"""Run with Blender --background --python; import the two user-selected GLBs."""
import bpy
import bmesh
import json
from pathlib import Path
from mathutils import Vector

root = Path(__file__).resolve().parents[2]
for sex, height in [('male', 1.75), ('female', 1.65)]:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=str(root / 'model-sources' / (sex + '.glb')))
    meshes = [o for o in bpy.context.scene.objects if o.type == 'MESH']
    points = [o.matrix_world @ v.co for o in meshes for v in o.data.vertices]
    low = Vector(tuple(min(p[k] for p in points) for k in range(3)))
    high = Vector(tuple(max(p[k] for p in points) for k in range(3)))
    print(sex, 'original bounds', tuple(low), tuple(high))
    scale = height / (high.z - low.z)
    center = (low + high) / 2
    positions, indices = [], []
    for obj in meshes:
        mesh = obj.data
        mesh.calc_loop_triangles()
        start = len(positions) // 3
        for v in mesh.vertices:
            p = obj.matrix_world @ v.co
            # Blender Z-up -> glTF Y-up; face the camera along +Z.
            positions.extend([(p.x-center.x)*scale, (p.z-low.z)*scale, -(p.y-center.y)*scale])
        for tri in mesh.loop_triangles:
            indices.extend(start+i for i in tri.vertices)
    out = {'position': positions, 'index': indices}
    (root / 'model-sources' / (sex + '.json')).write_text(json.dumps(out))
    print(sex, 'vertices', len(positions)//3, 'triangles', len(indices)//3)
    for part in ['body', 'arm', 'leg']:
        bm = bmesh.new()
        mesh = bpy.data.meshes.new('prepared')
        mesh.from_pydata([positions[i:i+3] for i in range(0,len(positions),3)], [], [indices[i:i+3] for i in range(0,len(indices),3)])
        bm.from_mesh(mesh)
        bmesh.ops.remove_doubles(bm, verts=list(bm.verts), dist=0.000005)
        if part != 'body':
            planes = [((.18,1.28,0),(.935,-.355,0))] if sex == 'male' else [((.125,1.25,0),(.85,-.53,0))]
            if part == 'leg':
                planes = [((0,.94 if sex=='male' else .88,0),(0,-1,0)), ((0,0,0),(1,0,0))]
            for co, normal in planes:
                bmesh.ops.bisect_plane(bm, geom=list(bm.verts)+list(bm.edges)+list(bm.faces), dist=1e-7, plane_co=co, plane_no=normal, clear_inner=True, clear_outer=False)
            # Keep the limb component; remove disconnected parts of the torso/other leg.
            unseen = set(bm.verts); components=[]
            while unseen:
                todo=[unseen.pop()]; component=set(todo)
                while todo:
                    for edge in todo.pop().link_edges:
                        for v in edge.verts:
                            if v in unseen:
                                unseen.remove(v); component.add(v); todo.append(v)
                components.append(component)
            keep=max(components,key=lambda c:max(v.co.x for v in c)) if part=='arm' else max(components,key=len)
            bmesh.ops.delete(bm,geom=[v for v in bm.verts if v not in keep],context='VERTS')
            boundary=[e for e in bm.edges if e.is_boundary]
            filled=bmesh.ops.holes_fill(bm,edges=boundary,sides=0).get('faces',[])
            for face in filled: face.material_index=1
        bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces))
        bmesh.ops.triangulate(bm,faces=list(bm.faces))
        bm.verts.ensure_lookup_table(); bm.verts.index_update()
        parts=[]
        for material in [0,1]:
            faces=[f for f in bm.faces if f.material_index==material]
            if not faces: continue
            used=sorted({v.index for f in faces for v in f.verts}); remap={v:i for i,v in enumerate(used)}
            parts.append({'name':'cap' if material else part,'position':[float(x) for v in used for x in bm.verts[v].co], 'index':[remap[v.index] for f in faces for v in f.verts]})
        (root/'model-sources'/f'{part}_{sex}.json').write_text(json.dumps(parts))
        print(part,sex,[(p['name'],len(p['index'])//3) for p in parts])
        bm.free();bpy.data.meshes.remove(mesh)

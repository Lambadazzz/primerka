import {createHash} from 'node:crypto';import test from 'node:test';import assert from 'node:assert/strict';import{readFile}from'node:fs/promises';import{GLTFLoader,MeshoptDecoder,Vector3}from'../scripts/geometry-runtime.mjs';
const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
async function load(name){const b=await readFile('public/models/'+name+'.glb');const scene=(await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;scene.updateMatrixWorld(true);const meshes=[];scene.traverse(m=>{if(m.isMesh)meshes.push(m)});return meshes;}
for(const sex of ['female','male'])test('arms-down '+sex+': anatomy, finite geometry, both separate limbs',async()=>{const before=(await load('body_'+sex+'_2'))[0],after=(await load('body_'+sex+'_3'))[0],a=before.geometry.attributes.position,b=after.geometry.attributes.position;assert.equal(a.count,b.count);const x=new Vector3(),y=new Vector3();let lowered=0,preserved=0,maxLegDrift=0;for(let i=0;i<a.count;i++){x.fromBufferAttribute(a,i).applyMatrix4(before.matrixWorld);y.fromBufferAttribute(b,i).applyMatrix4(after.matrixWorld);assert.ok(y.toArray().every(Number.isFinite));if(x.y<.8){maxLegDrift=Math.max(maxLegDrift,x.distanceTo(y));preserved++}if(Math.abs(x.x)>.4&&x.y>.85&&x.y<1.3&&Math.abs(y.x)<Math.abs(x.x)-.10)lowered++;}assert.ok(maxLegDrift<.0001,'legs changed: '+maxLegDrift);assert.ok(preserved>10000);assert.ok(lowered>1000,'arms were not lowered');for(const part of ['arm','leg']){const meshes=await load(part+'_'+sex+'_3');assert.ok(meshes[0].geometry.index.count>3000);if(part==='arm')assert.ok(meshes.some(m=>m.material.name==='cap'),'missing cut cap');}});
test('all four existing models and original limb files are byte-identical to published backup',async()=>{for(const variant of ['','_2'])for(const sex of ['female','male'])for(const part of ['body','arm','leg']){const name=part+'_'+sex+variant+'.glb';assert.equal(createHash('sha256').update(await readFile('public/models/'+name)).digest('hex'),JSON.parse(await readFile('tests/model-checksums.json','utf8'))[name],name)}});

for(const sex of ['female','male'])test('selected '+sex+': complete body and independent capped limbs fit the mobile budget',async()=>{
 const body=(await load('body_'+sex+'_3n'))[0];
 assert.equal(body.geometry.index.count/3,sex==='male'?14758:97794);
 for(const part of ['body','arm','leg']){
  const meshes=await load(part+'_'+sex+'_3n');const skin=meshes.find(m=>m.material.name!=='cap');
  skin.geometry.computeBoundingBox();const size=skin.geometry.boundingBox.clone().applyMatrix4(skin.matrixWorld).getSize(new Vector3());
  assert.ok(size.y>.5&&size.y<1.8);
  assert.ok(size.x<(part==='body'?.8:.3),'limb contains torso/other leg: '+part);
  for(const mesh of meshes)for(const attr of ['position','normal'])assert.ok([...mesh.geometry.attributes[attr].array].every(Number.isFinite));
  if(part!=='body')assert.ok(meshes.some(m=>m.material.name==='cap'),'open limb cut');
 }
});

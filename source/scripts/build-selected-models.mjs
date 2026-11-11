import {readFile} from 'node:fs/promises';
import {BufferGeometry,BufferAttribute} from './geometry-runtime.mjs';
import {glb} from './write-model-glb.mjs';

// JSON intermediates come from import-selected-models.py (Blender).
for(const sex of ['male','female'])for(const part of ['body','arm','leg']){
 const input=JSON.parse(await readFile(`../model-sources/${part}_${sex}.json`));
 const parts=input.map(({name,position,index})=>{
  const g=new BufferGeometry();g.setAttribute('position',new BufferAttribute(new Float32Array(position),3));
  g.setIndex(new BufferAttribute(new Uint32Array(index),1));g.computeVertexNormals();
  return {name,g};
 });
 await glb(`public/models/${part}_${sex}_3n.glb`,parts);
}

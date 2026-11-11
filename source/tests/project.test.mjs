import test from 'node:test';import assert from 'node:assert/strict';import {validateProject}from'../src/project-format.js';
const project=()=>({format:'primerka-project',version:2,state:{variant:'3',sex:'female',part:'arm',side:'L',tone:1,bg:0,counter:0,decals:{}},sessions:{arm_female_3_L:{version:1,active:'one',layers:[{id:'one',name:'Разметка',visible:true,opacity:1,patches:[]}]}},images:{}});
test('project validates model identity and survives JSON round-trip',()=>assert.equal(validateProject(JSON.parse(JSON.stringify(project()))).state.variant,'3'));

test('old projects reopen with the original mesh, while replacement model projects keep their new contexts',()=>{
 assert.equal(validateProject(project()).state.model3Legacy,true);
 const next=project();next.sessions.arm_female_3n_L=next.sessions.arm_female_3_L;delete next.sessions.arm_female_3_L;
 assert.equal(validateProject(next).state.model3Legacy,false);
 const explicit=project();explicit.state.model3Legacy=false;assert.equal(validateProject(explicit).state.model3Legacy,false);
});
test('project rejects unknown contexts, broken settings and untrusted image payloads before touching storage',()=>{for(const corrupt of [p=>p.state.variant='4',p=>p.state.tone=100,p=>p.sessions['__unexpected']=p.sessions.arm_female_3_L,p=>p.images.a='data:text/html;base64,AAAA',p=>p.state.decals['__unexpected']=[]]){const p=project();corrupt(p);assert.throws(()=>validateProject(p))}});

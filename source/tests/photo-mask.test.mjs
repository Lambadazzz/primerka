import test from 'node:test';
import assert from 'node:assert/strict';
import {validateErase,validateEraseFrame,applyPhotoErase,fittedImageRect} from '../src/photo-mask.js';
import {validateProject} from '../src/project-format.js';

test('photo mask replays normalized paths at full and preview sizes without changing image bounds',()=>{
 const strokes=[{radius:.05,group:'stroke1',points:[[.1,.2],[.8,.7]]}];
 for(const width of [900,2048]){
  const calls=[],ctx={save(){},restore(){},beginPath(){},moveTo(x,y){calls.push(['from',x,y])},lineTo(x,y){calls.push(['to',x,y])},stroke(){},arc(x,y,r){calls.push(['circle',x,y,r])},fill(){}};
  const canvas={width,height:width/2,getContext:()=>ctx};
  assert.equal(applyPhotoErase(canvas,strokes),canvas);
  assert.deepEqual(calls.at(-1),['circle',.8*width,.7*width/2,.05*width]);
  assert.equal(canvas.width,width);assert.equal(canvas.height,width/2);
  assert.equal(ctx.globalCompositeOperation,'destination-out');
 }
});
test('preparation pointer coordinates use the contained image, excluding empty margins',()=>{
 assert.deepEqual(fittedImageRect({width:800,height:400,getBoundingClientRect:()=>({left:10,top:20,width:400,height:400})}),{left:10,top:120,width:400,height:200});
});
test('photo erasures round-trip inside a project; malformed masks are rejected before import',()=>{
 const photo={id:'photo1',imageId:'image1',params:{mode:'original',ink:'#000000',strength:.5,erase:[{radius:.02,points:[[.5,.5]]}]},tri:[0,1,2],bary:[.2,.3,.5],tangent:[1,0,0],width:.1,rot:0,opacity:1};
 const project={format:'primerka-project',version:2,state:{variant:'1',sex:'male',part:'body',side:'L',tone:1,bg:0,counter:1,decals:{body_male:[photo]}},sessions:{},images:{image1:'data:image/png;base64,AAAA'}};
 assert.deepEqual(validateProject(JSON.parse(JSON.stringify(project))).state.decals.body_male[0].params.erase,photo.params.erase);
 for(const bad of [null,{},[{radius:-1,points:[[.5,.5]]}],[{radius:.1,points:[[2,.5]]}],[{radius:.1,points:[]}],[{radius:.1,points:[[NaN,.5]]}]]){
  assert.throws(()=>validateErase(bad));
 }
 const corrupt=structuredClone(project);corrupt.state.decals.body_male[0].params.erase=[{radius:.1,points:[[2,.5]]}];
 assert.throws(()=>validateProject(corrupt));
 validateErase(undefined);
 validateEraseFrame([-.01,-.01,1.02,1.02]);
 for(const frame of [null,[0,0,0,1],[0,0,Infinity,1],[0,0,1000,1]])assert.throws(()=>validateEraseFrame(frame));
});

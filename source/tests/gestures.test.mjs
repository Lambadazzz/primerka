import test from 'node:test';import assert from 'node:assert/strict';
import {GestureRouter,TouchGesture} from '../src/gesture-router.js';
test('finger and stylus strokes lock to drawing; extra fingers cannot rotate the canvas mid-stroke',()=>{
 const router=new GestureRouter();
 for(const pointer of [1,20]){
  assert.equal(router.begin(pointer,{onModel:true}),'draw');
  assert.equal(router.begin(pointer+1,{onModel:false}),'ignore');
  router.end(pointer+1);assert.equal(router.drawing,pointer);router.end(pointer);
 }
});

test('two-finger tap undoes once after both fingers lift, without camera jitter',()=>{
 const t=new TouchGesture();assert.equal(t.down(1,100,100,0).type,'single');
 assert.equal(t.down(2,150,100,30).type,'multi-start');
 assert.equal(t.move(1,102,101).type,'blocked');
 assert.equal(t.up(1,80).type,'blocked');assert.equal(t.up(2,95).type,'undo');
 assert.equal(t.up(2,100).type,'end-single');
});
test('two-finger drag and pinch transform and cannot undo or return to drawing after one lift',()=>{
 const t=new TouchGesture();t.down(1,100,100,0);t.down(2,150,100,20);
 const drag=t.move(1,120,100);assert.equal(drag.type,'transform');assert.equal(drag.dx,10);assert.ok(drag.scale>1);
 const pinch=t.move(2,180,100);assert.equal(pinch.type,'transform');assert.ok(pinch.scale<1);
 t.up(1,100);assert.equal(t.move(2,200,100).type,'blocked');assert.equal(t.up(2,120).type,'end-multi');
});
test('hold, late second finger, cancelled and three-finger gestures do not undo',()=>{
 for(const kind of ['hold','late','cancel','third']){
  const t=new TouchGesture();t.down(1,100,100,0);t.down(2,150,100,kind==='late'?500:20);
  if(kind==='third'){t.down(3,200,100,30);t.up(3,40);}
  t.up(1,kind==='hold'?500:60,kind==='cancel');
  assert.notEqual(t.up(2,kind==='hold'?550:90).type,'undo',kind);
 }
});
test('background gestures keep navigating when another finger touches the body, then drawing resumes',()=>{
 const router=new GestureRouter();
 assert.equal(router.begin(1,{onModel:false}),'navigate');
 assert.equal(router.begin(2,{onModel:true}),'navigate');
 router.end(1);assert.equal(router.begin(3,{onModel:true}),'navigate');
 router.end(2);router.end(3);assert.equal(router.begin(4,{onModel:true}),'draw');
 router.clear();assert.equal(router.begin(5,{onModel:true,navigate:true}),'navigate');
});

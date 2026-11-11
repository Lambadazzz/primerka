import test from 'node:test';import assert from 'node:assert/strict';import {brushes,pressureOf,sampleLine,validSession}from'../src/brushes.js';
import {followsSurface,redrawStrokeInk} from '../src/brushes.js';
const seed={tri:[0,1,2],bary:[.2,.3,.5],tangent:[1,0,0]};
const valid=()=>({version:1,active:'one',layers:[{id:'one',name:'Разметка',visible:true,opacity:1,patches:[{id:'patch',seed:structuredClone(seed),width:.16,strokes:[{brush:{...brushes[0]},color:'#27272a',size:1.5,opacity:1,hardness:1,pressure:true,points:[{x:100,y:100,p:.2},{x:101,y:101,p:1}]}]}]}]});
test('pressure changes only for stylus, can be disabled and never becomes NaN',()=>{assert.equal(pressureOf({pointerType:'pen',pressure:.2},true),.2);assert.equal(pressureOf({pointerType:'mouse',pressure:.5},true),1);assert.equal(pressureOf({pointerType:'pen',pressure:.2},false),1);assert.equal(pressureOf({pointerType:'pen',pressure:0},true),.01)});
test('interpolated stroke covers fast movement without gaps and preserves endpoints/pressure',()=>{const p=sampleLine({x:0,y:0,p:.1},{x:100,y:0,p:1},2);assert.equal(p.length,50);assert.deepEqual(p.at(-1),{x:100,y:0,p:1});for(let i=1;i<p.length;i++)assert.ok(p[i].x-p[i-1].x<=2.00001)});
test('chart join clips the end of the stroke without cutting a previous loop through the same coordinates',()=>{
 const stroke=valid().layers[0].patches[0].strokes[0];
 stroke.localCuts=true;
 stroke.size=4;
 stroke.endCut=[6,0,-1,0];
 stroke.points=[[6,0],[10,0],[10,12],[0,12],[0,0],[4,0],[6,0]].map(([x,y])=>({x,y,p:1}));
 const clipped=[];
 let masked=false;
 const ctx={canvas:{width:100,height:100},clearRect(){},save(){},restore(){masked=false},beginPath(){},moveTo(){},lineTo(){},closePath(){},clip(){masked=true},drawImage(){clipped.push(masked)}};
 redrawStrokeInk(ctx,{},stroke,stroke,1000);
 assert.deepEqual(clipped,[false,false,false,false,false,true,true]);
});
test('stroke follows a continuous curve but rejects a gap or a nearer or farther limb',()=>{
 const hit=(x,y,z)=>({distance:z,point:{distanceToSquared(other){return (x-other.x)**2+(y-other.y)**2+(z-other.z)**2},x,y,z}});
 const start=hit(0,0,1);
 assert.equal(followsSurface(start,hit(.003,.002,1.004),3,.001),true);
 assert.equal(followsSurface(start,null,3,.001),false);
 assert.equal(followsSurface(start,hit(.002,0,1.05),3,.001),false);
 assert.equal(followsSurface(start,hit(.002,0,.95),3,.001),false);
});
test('saved drawing round-trips with independent layers and erase commands',()=>{const s=valid();s.layers.push({...structuredClone(s.layers[0]),id:'two'});s.layers[1].patches[0].strokes[0].brush={...brushes.find(b=>b.eraser)};const copy=validSession(JSON.parse(JSON.stringify(s)));assert.equal(copy.layers.length,2);assert.equal(copy.layers[1].patches[0].strokes[0].brush.eraser,true);assert.deepEqual(copy.layers[0].patches[0].seed,seed)});
test('corrupt or excessive geometry/brush input rejected before import',()=>{for(const corrupt of [s=>s.layers[0].patches[0].seed.tri[0]=-1,s=>s.layers[0].patches[0].seed.bary[0]=NaN,s=>s.layers[0].patches[0].strokes[0].points[0].x=Infinity,s=>s.layers[0].patches[0].strokes[0].brush.id='bad',s=>s.layers[0].opacity=2]){const s=valid();corrupt(s);assert.throws(()=>validSession(s))}const s=valid();s.layers=Array.from({length:17},()=>s.layers[0]);assert.throws(()=>validSession(s))});

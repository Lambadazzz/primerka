// A gesture keeps the purpose chosen at pointerdown, even across the silhouette.
export class GestureRouter {
 constructor(){this.drawing=null;this.navigation=new Set();}
 begin(id,{onModel,navigate=false,button=0}){
  if(this.drawing!==null)return 'ignore';
  if(this.navigation.size||navigate||!onModel||button!==0&&button!==5){this.navigation.add(id);return 'navigate';}
  this.drawing=id;return 'draw';
 }
 end(id){this.navigation.delete(id);if(this.drawing===id)this.drawing=null;}
 clear(){this.drawing=null;this.navigation.clear();}
}

const pairOf=points=>{
 const [a,b]=[...points.values()];
 return {x:(a.x+b.x)/2,y:(a.y+b.y)/2,distance:Math.max(1,Math.hypot(a.x-b.x,a.y-b.y))};
};

// Once two fingers participate, no remaining finger may resume drawing until
// the whole gesture ends. Small tap jitter must not move the camera.
export class TouchGesture {
 constructor(){this.clear();}
 clear(){this.points=new Map();this.multi=false;this.moved=false;this.cancelled=false;this.tap=false;this.previous=null;}
 down(id,x,y,time){
  this.points.set(id,{x,y,sx:x,sy:y,time,travel:0});
  if(this.points.size===1&&!this.multi)return {type:'single'};
  if(this.points.size===2){
   const [a,b]=[...this.points.values()];
   this.tap=!this.multi&&Math.abs(a.time-b.time)<=220&&a.travel<=8;
   this.multi=true;this.started=time;this.previous=pairOf(this.points);
   for(const p of this.points.values()){p.mx=p.x;p.my=p.y;}
   return {type:'multi-start'};
  }
  this.tap=false;return {type:'blocked'};
 }
 move(id,x,y){
  const point=this.points.get(id);if(!point)return {type:'blocked'};
  const dx=x-point.x,dy=y-point.y;point.x=x;point.y=y;point.travel=Math.max(point.travel,Math.hypot(x-point.sx,y-point.sy));
  if(!this.multi)return {type:'single',dx,dy};
  if(this.points.size!==2){if(Math.hypot(x-point.mx,y-point.my)>8)this.moved=true;return {type:'blocked'};}
  const next=pairOf(this.points);
  if(!this.moved){
   const travel=Math.max(...[...this.points.values()].map(p=>Math.hypot(p.x-p.mx,p.y-p.my)));
   if(travel<=8&&Math.abs(next.distance-this.previous.distance)<=8)return {type:'blocked'};
   this.moved=true;
  }
  const previous=this.previous;this.previous=next;
  return {type:'transform',dx:next.x-previous.x,dy:next.y-previous.y,scale:previous.distance/next.distance};
 }
 up(id,time,cancelled=false){
  this.cancelled||=cancelled;this.points.delete(id);
  if(this.multi&&this.points.size===2)this.previous=pairOf(this.points);
  if(this.points.size)return {type:'blocked'};
  const type=this.multi&&this.tap&&!this.moved&&!this.cancelled&&time-this.started<=350?'undo':this.multi?'end-multi':'end-single';
  this.clear();return {type};
 }
}

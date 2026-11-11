export const brushes=[
 {id:'liner',name:'Лайнер',icon:'╱',size:1.5,hardness:1,opacity:1,spacing:.16,pressureSize:true},
 {id:'pencil',name:'Карандаш',icon:'✎',size:2,hardness:.75,opacity:.65,spacing:.12,grain:true,pressureSize:true},
 {id:'pen',name:'Перо',icon:'❖',size:3,hardness:1,opacity:1,spacing:.12,pressureSize:true,ellipse:.35},
 {id:'marker',name:'Маркер',icon:'▰',size:6,hardness:.9,opacity:.35,spacing:.13,pressureSize:false},
 {id:'soft',name:'Мягкая кисть',icon:'●',size:8,hardness:.25,opacity:.3,spacing:.13,pressureSize:true},
 {id:'airbrush',name:'Аэрограф',icon:'◌',size:16,hardness:0,opacity:.1,spacing:.1,pressureSize:false},
 {id:'stipple',name:'Точки',icon:'⠿',size:7,hardness:1,opacity:.7,spacing:.18,pressureSize:true,stipple:true},
 {id:'eraser',name:'Ластик',icon:'▱',size:5,hardness:.8,opacity:1,spacing:.12,pressureSize:true,eraser:true}
];
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function pressureOf(event,usePressure){return usePressure&&event.pointerType==='pen'?clamp(event.pressure||.01,.01,1):1;}
export function followsSurface(previous,hit,screenStep,projectionScale){
 if(!hit)return false;
 if(!previous)return true;
 const projectedStep=screenStep*Math.min(previous.distance,hit.distance)*projectionScale;
 // A grazing surface can move faster in depth than in screen space.
 const limit=.004+projectedStep*3;
 return previous.point.distanceToSquared(hit.point)<=limit*limit;
}
export function sampleLine(a,b,spacing){const distance=Math.hypot(b.x-a.x,b.y-a.y),count=Math.max(1,Math.ceil(distance/Math.max(.2,spacing)));return Array.from({length:count},(_,i)=>{const t=(i+1)/count;return {x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t,p:a.p+(b.p-a.p)*t}});}
export function validSession(data){if(!data||data.version!==1||!Array.isArray(data.layers)||data.layers.length>16)throw Error('Неподдерживаемый проект рисунка');let points=0,patches=0;for(const layer of data.layers){if(typeof layer.id!=='string'||typeof layer.name!=='string'||!Array.isArray(layer.patches)||!Number.isFinite(layer.opacity)||layer.opacity<0||layer.opacity>1)throw Error('Повреждённый слой');for(const patch of layer.patches){patches++;if(!patch.seed||!Array.isArray(patch.seed.tri)||patch.seed.tri.length!==3||!patch.seed.tri.every(v=>Number.isInteger(v)&&v>=0&&v<2000000)||!Array.isArray(patch.seed.bary)||patch.seed.bary.length!==3||!patch.seed.bary.every(Number.isFinite)||Math.abs(patch.seed.bary.reduce((a,b)=>a+b,0)-1)>.001||!Array.isArray(patch.seed.tangent)||patch.seed.tangent.length!==3||!patch.seed.tangent.every(Number.isFinite)||!Number.isFinite(patch.width)||patch.width<.03||patch.width>1||!Array.isArray(patch.strokes))throw Error('Повреждённый участок');for(const stroke of patch.strokes){if(!stroke.brush||!brushes.some(v=>v.id===stroke.brush.id)||!/^#[0-9a-f]{6}$/i.test(stroke.color)||!Number.isFinite(stroke.size)||stroke.size<.1||stroke.size>100||!Number.isFinite(stroke.opacity)||stroke.opacity<0||stroke.opacity>1||!Number.isFinite(stroke.hardness)||stroke.hardness<0||stroke.hardness>1||!Array.isArray(stroke.points))throw Error('Повреждённый штрих');stroke.brush={...brushes.find(v=>v.id===stroke.brush.id)};for(const cut of [stroke.startCut,stroke.endCut]){if(cut!==undefined&&(!Array.isArray(cut)||cut.length!==4||!cut.every(Number.isFinite)||Math.max(Math.abs(cut[0]),Math.abs(cut[1]))>8192||Math.abs(Math.hypot(cut[2],cut[3])-1)>.001))throw Error("Invalid stroke join");}for(const p of stroke.points){points++;if(![p.x,p.y,p.p].every(Number.isFinite)||Math.abs(p.x)>8192||Math.abs(p.y)>8192||p.p<0||p.p>1)throw Error('Повреждённые координаты');}}}}if(patches>128||points>1000000)throw Error('Проект слишком большой');return data;}
export function makeStamp(stroke){const canvas=document.createElement('canvas');canvas.width=canvas.height=96;const ctx=canvas.getContext('2d');const {brush,color,hardness}=stroke;let seed=1234567;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)|0;return(seed>>>0)/4294967296};
 if(brush.stipple){ctx.fillStyle=color;for(let i=0;i<70;i++){const a=random()*Math.PI*2,r=Math.sqrt(random())*44;ctx.globalAlpha=.3+random()*.7;ctx.beginPath();ctx.arc(48+Math.cos(a)*r,48+Math.sin(a)*r,.5+random()*1.1,0,Math.PI*2);ctx.fill();}return canvas;}
 const gradient=ctx.createRadialGradient(48,48,Math.min(.98,hardness)*44,48,48,46);gradient.addColorStop(0,color);gradient.addColorStop(1,color+'00');ctx.fillStyle=gradient;ctx.beginPath();ctx.ellipse(48,48,46,46*(brush.ellipse||1),-.65,0,Math.PI*2);ctx.fill();if(brush.grain){const pixels=ctx.getImageData(0,0,96,96);for(let i=3;i<pixels.data.length;i+=4)pixels.data[i]*=.15+random()*.85;ctx.putImageData(pixels,0,0);}return canvas;
}
export function dab(ctx,stamp,stroke,p,pixelsPerMeter){const size=stroke.size/1000*pixelsPerMeter*(stroke.pressure&&stroke.brush.pressureSize?(.12+.88*p.p):1);ctx.globalCompositeOperation=stroke.brush.eraser?'destination-out':'source-over';ctx.globalAlpha=stroke.opacity*(stroke.pressure?Math.max(.1,p.p):1);ctx.drawImage(stamp,p.x-size/2,p.y-size/2,size,size);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';}
function clipJoin(ctx,cut){
  const [x,y,dx,dy]=cut,extent=32768,tx=-dy*extent,ty=dx*extent;
  ctx.beginPath();
  ctx.moveTo(x+tx,y+ty);
  ctx.lineTo(x-tx,y-ty);
  ctx.lineTo(x-tx+dx*extent,y-ty+dy*extent);
  ctx.lineTo(x+tx+dx*extent,y+ty+dy*extent);
  ctx.closePath();
  ctx.clip();
}
export function dabJoined(ctx,stamp,paint,point,scale,startCut,endCut){
 if(!startCut&&!endCut){dab(ctx,stamp,paint,point,scale);return}
 ctx.save();
 if(startCut)clipJoin(ctx,startCut);
 if(endCut)clipJoin(ctx,endCut);
 dab(ctx,stamp,paint,point,scale);
 ctx.restore();
}
export function redrawStrokeInk(ctx,stamp,paint,stroke,scale){
 const {points}=stroke, diameter=stroke.size/1000*scale;
 let end=points.length,distance=0;
 if(stroke.localCuts&&stroke.endCut){
  for(end=points.length-1;end>0;end--){
   distance+=Math.hypot(points[end].x-points[end-1].x,points[end].y-points[end-1].y);
   if(distance>diameter)break;
  }
 }
 let remaining=stroke.localCuts&&stroke.startCut?diameter:-1;
 ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 for(const [i,point] of points.entries()){
  if(i&&remaining>=0)remaining-=Math.hypot(point.x-points[i-1].x,point.y-points[i-1].y);
  dabJoined(ctx,stamp,paint,point,scale,remaining>=0?stroke.startCut:null,i>=end?stroke.endCut:null);
 }
 return remaining;
}
function blendStroke(ctx,scratch,stroke){
 ctx.save();
 // Older projects used a single mask over each chart segment.
 if(!stroke.localCuts)for(const cut of [stroke.startCut,stroke.endCut])if(cut)clipJoin(ctx,cut);
 ctx.globalAlpha=stroke.opacity;
 ctx.globalCompositeOperation=stroke.brush.eraser?'destination-out':'source-over';
 ctx.drawImage(scratch,0,0);
 ctx.restore();
}
export function compositeStroke(canvas,base,scratch,stroke){const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);ctx.drawImage(base,0,0);blendStroke(ctx,scratch,stroke);}
export function replay(canvas,patch){const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);const scratch=document.createElement('canvas');scratch.width=canvas.width;scratch.height=canvas.height;const ink=scratch.getContext('2d');for(const stroke of patch.strokes){const paint={...stroke,opacity:1,brush:{...stroke.brush,eraser:false}},stamp=makeStamp(paint);redrawStrokeInk(ink,stamp,paint,stroke,canvas.width/patch.width);blendStroke(ctx,scratch,stroke);}}

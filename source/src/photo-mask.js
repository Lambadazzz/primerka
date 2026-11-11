// Coordinates are relative to the processed image; radius is relative to its width.
export const MAX_ERASE_POINTS=100000;
export function validateEraseFrame(frame){
 if(frame===undefined)return;
 if(!Array.isArray(frame)||frame.length!==4||!frame.every(v=>Number.isFinite(v)&&Math.abs(v)<=16)||frame[2]<=0||frame[3]<=0)throw Error('Повреждены границы эскиза');
}
export function cropPhotoFrame(canvas,frame){
 validateEraseFrame(frame);
 if(!frame){canvas.photoFrame=canvas.photoFrame||[0,0,1,1];return canvas}
 const old=canvas.photoFrame,source=document.createElement('canvas');
 source.width=canvas.width;source.height=canvas.height;source.getContext('2d').drawImage(canvas,0,0);
 const scaleX=canvas.width/old[2],scaleY=canvas.height/old[3];
 const width=frame[2]*scaleX,height=frame[3]*scaleY;
 canvas.width=Math.max(1,Math.min(4096,Math.round(width)));canvas.height=Math.max(1,Math.min(4096,Math.round(height)));
 canvas.getContext('2d').drawImage(source,(frame[0]-old[0])*scaleX,(frame[1]-old[1])*scaleY,width,height,0,0,canvas.width,canvas.height);
 canvas.photoFrame=frame.slice();return canvas;
}
export function validateErase(strokes){
 if(strokes===undefined)return;
 if(!Array.isArray(strokes)||strokes.length>2000)throw Error('Слишком много стираний эскиза');
 let count=0;
 for(const stroke of strokes){
  if(!stroke||!Number.isFinite(stroke.radius)||stroke.radius<=0||stroke.radius>4||!Array.isArray(stroke.points)||!stroke.points.length)throw Error('Повреждён ластик эскиза');
  if(stroke.group!==undefined&&(typeof stroke.group!=='string'||stroke.group.length>100))throw Error('Повреждён ластик эскиза');
  for(const point of stroke.points){
   if(!Array.isArray(point)||point.length!==2||!point.every(v=>Number.isFinite(v)&&v>=0&&v<=1))throw Error('Повреждены координаты ластика');
   if(++count>MAX_ERASE_POINTS)throw Error('Слишком много стираний эскиза');
  }
 }
}
export function fittedImageRect(canvas){
 const rect=canvas.getBoundingClientRect(),scale=Math.min(rect.width/canvas.width,rect.height/canvas.height);
 const width=canvas.width*scale,height=canvas.height*scale;
 return {left:rect.left+(rect.width-width)/2,top:rect.top+(rect.height-height)/2,width,height};
}
export function eraseSegment(canvas,from,to,radius){
 const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
 ctx.save();ctx.globalCompositeOperation='destination-out';ctx.globalAlpha=1;
 ctx.strokeStyle=ctx.fillStyle='#000';ctx.lineWidth=radius*w*2;ctx.lineCap='round';ctx.lineJoin='round';
 ctx.beginPath();ctx.moveTo(from[0]*w,from[1]*h);ctx.lineTo(to[0]*w,to[1]*h);ctx.stroke();
 ctx.beginPath();ctx.arc(to[0]*w,to[1]*h,radius*w,0,Math.PI*2);ctx.fill();ctx.restore();
}
export function applyPhotoErase(canvas,strokes=[]){
 validateErase(strokes);
 for(const stroke of strokes)for(let i=0;i<stroke.points.length;i++)eraseSegment(canvas,stroke.points[Math.max(0,i-1)],stroke.points[i],stroke.radius);
 return canvas;
}

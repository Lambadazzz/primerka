import {bridge as app} from './legacy.js';

// Old triangle/barycentric anchors must stay attached to their original mesh.
// Keep them in their existing contexts, and start the replacement mesh separately.
const button=document.createElement('button');button.type='button';button.className='pill-btn';
button.style.cssText='margin-top:8px;width:100%;font-size:11px';button.hidden=true;
document.getElementById('segVariant').after(button);
let generation=0;
async function update(){
 const current=++generation;
 const keys=await app.read('paint:catalog')||[];
 const oldPhotos=Object.entries(app.state.decals).some(([k,v])=>/_3(?:_[LR])?$/.test(k)&&v.length);
 let oldPaint=false;
 for(const key of keys.filter(k=>/_3(?:_[LR])?$/.test(k))){
  const value=await app.read('paint:'+key);
  if(value?.layers?.some(l=>l.patches?.some(p=>p.strokes?.length))){oldPaint=true;break;}
 }
 if(current!==generation)return;
 button.hidden=app.state.variant!=='3'||!app.state.model3Legacy&&!oldPaint&&!oldPhotos;
 button.textContent=app.state.model3Legacy?'Перейти на новые модели':'Открыть эскизы на прежней модели';
}
button.onclick=async()=>{
 button.disabled=true;
 try{await window.__paint.flush();app.state.model3Legacy=!app.state.model3Legacy;await app.write('state',structuredClone(app.state));await app.load();}
 catch{app.notify('Не удалось переключить модель. Текущая работа сохранена на устройстве.');}
 finally{button.disabled=false;void update();}
};
window.addEventListener('primerka:model-ready',()=>void update().catch(()=>{}));
if(app.model)void update().catch(()=>{});

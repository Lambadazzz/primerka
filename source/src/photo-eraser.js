import {bridge as app,THREE as T} from './legacy.js';
import {applyPhotoErase,eraseSegment,fittedImageRect,MAX_ERASE_POINTS} from './photo-mask.js';

const $=id=>document.getElementById(id);
const preview=$('previewCanvas'),sheet=$('sheet');
const ray=new T.Raycaster(),ndc=new T.Vector2();
let mode=null,stroke=null,size=32,blocked=false,generation=0;
const pointers=new Set();
function controls(className){
 const element=document.createElement('div');element.className='photo-erase-controls '+className;
 element.innerHTML='<button type="button" data-erase="toggle" aria-pressed="false">Ластик эскиза</button><label>Размер <output>32</output><input type="range" min="6" max="120" value="32" aria-label="Размер ластика эскиза"></label><button type="button" data-erase="undo">↶ Отменить стирание</button>';
 const slider=element.querySelector('input');
 slider.oninput=()=>{size=+slider.value;for(const ui of [prep,bar]){ui.querySelector('input').value=size;ui.querySelector('output').textContent=size}};
 return element;
}
const prep=controls('photo-erase-prep');
sheet.querySelector('.sheet-actions').before(prep);
const bar=controls('photo-erase-bar');bar.hidden=true;
bar.querySelector('[data-erase=toggle]').textContent='✓ Готово';
document.body.append(bar);
const launch=document.createElement('button');launch.type='button';launch.id='actErasePhoto';launch.textContent='Ластик эскиза';
$('inspector').querySelector('.actions-grid').append(launch);
const cursor=document.createElement('div');cursor.className='photo-erase-cursor';cursor.hidden=true;document.body.append(cursor);

function masks(){return mode?.params.erase||[]}
function updateUI(){
 prep.querySelector('[data-erase=toggle]').setAttribute('aria-pressed',String(mode?.kind==='prep'));
 preview.classList.toggle('photo-erasing',mode?.kind==='prep');
 bar.hidden=mode?.kind!=='model';
 for(const ui of [prep,bar])ui.querySelector('[data-erase=undo]').disabled=!mode||!masks().length;
}
function redraw(){
 if(!mode)return;
 if(mode.kind==='prep'){app.refreshPreview();return}
 const canvas=mode.target.canvas,ctx=canvas.getContext('2d');
 ctx.clearRect(0,0,canvas.width,canvas.height);ctx.drawImage(mode.base,0,0);
 applyPhotoErase(canvas,masks());mode.target.texture.needsUpdate=true;app.invalidate();
}
function save(){if(mode?.kind==='model'){app.refreshPhoto(mode.target);app.save(true)}updateUI()}
function finish(cancel=false){
 if(!stroke)return;
 if(cancel){mode.params.erase.splice(stroke.before);redraw()}
 try{stroke.element.releasePointerCapture(stroke.id)}catch{}
 stroke=null;save();
}
function stopMode(){
 ++generation;finish();mode=null;blocked=false;pointers.clear();cursor.hidden=true;
 app.controls.enabled=true;updateUI();
}
function startPrep(){
 stopMode();if(!app.sheet)return;
 mode={kind:'prep',params:app.sheet.params};updateUI();
}
async function startModel(){
 stopMode();const target=app.selected;
 if(!target){app.notify('Сначала выберите эскиз в нижней ленте');return}
 const current=++generation;
 try{
  const source=await app.image(target.rec.imageId);
  if(current!==generation||!app.decals.includes(target)||app.selected!==target)return;
  if(!source)throw Error('Не найдено исходное фото');
  app.cancelMotion();
  const base=app.processPhoto(source,{...target.rec.params,erase:[]});
  mode={kind:'model',target,params:target.rec.params,base};
  // Close the inspector so the model stays accessible on a phone.
  $('btnDeselect').click();updateUI();
  app.notify('Стирайте выбранный эскиз. С фона можно вращать модель.');
 }catch(error){app.notify(error.message)}
}
launch.onclick=()=>void startModel();
prep.querySelector('[data-erase=toggle]').onclick=()=>mode?.kind==='prep'?stopMode():startPrep();
bar.querySelector('[data-erase=toggle]').onclick=stopMode;
for(const ui of [prep,bar])ui.querySelector('[data-erase=undo]').onclick=()=>{
 finish();if(!mode||!masks().length)return;
 const last=mode.params.erase.pop();
 if(last.group)while(masks().at(-1)?.group===last.group)mode.params.erase.pop();
 redraw();save();
};

function pointAt(event){
 if(mode.kind==='prep'){
  const rect=fittedImageRect(preview);
  const x=(event.clientX-rect.left)/rect.width,y=(event.clientY-rect.top)/rect.height;
  return x>=0&&x<=1&&y>=0&&y<=1?{point:[x,y],radius:Math.min(4,size/rect.width/2)}:null;
 }
 const decal=mode.target;
 if(!decal.mesh.visible)return null;
 const rect=app.canvas.getBoundingClientRect();
 ndc.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
 app.root.updateMatrixWorld(true);ray.setFromCamera(ndc,app.camera);
 const surface=app.hit(event.clientX,event.clientY);
 for(const hit of ray.intersectObject(decal.mesh,false)){
  if(!surface||hit.distance>surface.distance+.006)continue;
  const uv=new T.Vector3(hit.uv.x,hit.uv.y,1).applyMatrix3(decal.uniforms.uvMat.value);
  if(uv.x<0||uv.x>1||uv.y<0||uv.y>1)continue;
  const unit=2*hit.distance*Math.tan(app.camera.fov*Math.PI/360)/rect.height;
  return {point:[uv.x,1-uv.y],radius:Math.min(4,size*unit/decal.rec.width/2)};
 }
 return null;
}
function consume(event){event.preventDefault();event.stopImmediatePropagation()}
function moveCursor(event){
 cursor.hidden=false;cursor.style.left=event.clientX+'px';cursor.style.top=event.clientY+'px';
 cursor.style.width=cursor.style.height=size+'px';
}
function addPoint(event){
 const value=pointAt(event);
 if(!value){stroke.last=null;return}
 if(stroke.count>=MAX_ERASE_POINTS){finish();app.notify('Лимит стираний. Отмените ненужные стирания.');return}
 // Start a separate path after leaving the visible image; never bridge across it.
 if(!stroke.last&&stroke.path.points.length){
  if(masks().length>=2000){finish();return}
  stroke.path={radius:value.radius,points:[],group:stroke.path.group};mode.params.erase.push(stroke.path);
 }
 const path=stroke.path;
 const last=stroke.last||value.point;
 path.points.push(value.point);stroke.count++;
 const canvas=mode.kind==='prep'?preview:mode.target.canvas;
 eraseSegment(canvas,last,value.point,path.radius);stroke.last=value.point;
 if(mode.kind==='model'){mode.target.texture.needsUpdate=true;app.invalidate()}
}
window.addEventListener('pointerdown',event=>{
 if(!mode||event.button>0)return;
 const element=mode.kind==='prep'?preview:app.canvas;
 if(event.target!==element)return;
 pointers.add(event.pointerId);
 if(stroke||blocked){consume(event);finish(true);blocked=true;return}
 const value=pointAt(event);if(!value)return;
 if(pointers.size>1){consume(event);blocked=true;return}
 if(masks().length>=2000||masks().reduce((n,p)=>n+p.points.length,0)>=MAX_ERASE_POINTS){app.notify('Лимит стираний. Отмените ненужные стирания.');return}
 consume(event);app.cancelMotion();app.controls.enabled=false;
 const canvas=mode.kind==='prep'?preview:mode.target.canvas;
 if(canvas.photoFrame&&!mode.params.eraseFrame)mode.params.eraseFrame=canvas.photoFrame.slice();
 const path={radius:value.radius,points:[],group:app.newId()};
 mode.params.erase=[...masks(),path];
 stroke={id:event.pointerId,element,path,last:null,before:mode.params.erase.length-1,count:masks().reduce((n,p)=>n+p.points.length,0)};
 try{element.setPointerCapture(event.pointerId)}catch{}
 addPoint(event);moveCursor(event);updateUI();
},{capture:true,passive:false});
window.addEventListener('pointermove',event=>{
 if(!mode)return;
 if(event.target===(mode.kind==='prep'?preview:app.canvas))moveCursor(event);
 if(blocked&&pointers.has(event.pointerId)){consume(event);return}
 if(stroke?.id!==event.pointerId)return;
 consume(event);const events=event.getCoalescedEvents?.();
 for(const value of events?.length?events:[event]){if(!stroke)break;addPoint(value)}
},{capture:true,passive:false});
function end(event,cancel=false){
 if(!mode)return;
 pointers.delete(event.pointerId);
 if(stroke?.id===event.pointerId){consume(event);finish(cancel)}
 else if(blocked)consume(event);
 if(!pointers.size){blocked=false;app.controls.enabled=true}
 cursor.hidden=true;
}
window.addEventListener('pointerup',event=>end(event),{capture:true,passive:false});
window.addEventListener('pointercancel',event=>end(event,true),{capture:true,passive:false});
window.addEventListener('blur',()=>{finish();pointers.clear();blocked=false;app.controls.enabled=true;cursor.hidden=true});
document.addEventListener('visibilitychange',()=>{if(document.hidden)finish()});
window.addEventListener('primerka:model-before',stopMode);
document.addEventListener('click',()=>{
 if(mode?.kind==='model'&&(!app.decals.includes(mode.target)||app.selected!==mode.target))stopMode();
});
window.addEventListener('keydown',event=>{
 if(!mode||/INPUT|TEXTAREA/.test(event.target.tagName))return;
 if(event.key==='Escape'){consume(event);stopMode()}
 if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='z'){consume(event);(mode.kind==='prep'?prep:bar).querySelector('[data-erase=undo]').click()}
},{capture:true});
new MutationObserver(()=>{
 if(mode?.kind==='prep'&&!sheet.classList.contains('open')||mode?.kind==='model'&&(sheet.classList.contains('open')||document.body.classList.contains('painting')))stopMode();
}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});
updateUI();

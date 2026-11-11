import {GestureRouter,TouchGesture} from './gesture-router.js';
import {saveNativeFile} from './android-files.js';
import {validateProject} from './project-format.js';
import {bridge as app,THREE as T} from './legacy.js';
import {brushes,clamp,pressureOf,sampleLine,makeStamp,dab,dabJoined,redrawStrokeInk,followsSurface,replay,compositeStroke,validSession} from './brushes.js';
const $=id=>document.getElementById(id),RES=1024;
let session=null,key='',loading=false,open=false,activeStroke=null,history=[],future=[],historyBusy=false,saveTimer,saveJob=Promise.resolve(),loadGeneration=0;
const gestures=new GestureRouter(),touches=new TouchGesture();let touchMode=null;
const patches=new Map(),catalog=new Set(),ray=new T.Raycaster(),ndc=new T.Vector2();ray.firstHitOnly=true;
let brush=brushes[0],color='#27272a',size=brush.size,opacity=brush.opacity,hardness=brush.hardness,smoothing=.35,usePressure=true,navigate=false;
function button(label,fn,cls=''){const b=document.createElement('button');b.type='button';b.textContent=label;b.className=cls;b.onclick=fn;return b}
const editor=document.createElement('section');editor.id='paintEditor';editor.hidden=true;editor.setAttribute('aria-label','Редактор рисунка по модели');editor.innerHTML=`
 <header class="paint-header"><button id="paintDone" class="paint-primary">✓ Готово</button><div><strong>Рисунок по телу</strong><small id="paintSaveState">На этом планшете</small></div><div class="paint-history"><button id="paintUndo" aria-label="Отменить действие">↶</button><button id="paintRedo" aria-label="Повторить действие">↷</button></div><button id="paintFiles">Проект и экспорт</button></header>
 <nav class="paint-tools" aria-label="Кисти"><div id="brushes"></div><button id="paintNavigate" title="Вращать модель даже при касании тела">✥<small>Обзор</small></button></nav>
 <aside class="paint-panel"><div class="paint-section"><h2 id="brushName">Лайнер</h2><div class="paint-preview"><canvas id="brushPreview" width="240" height="55"></canvas></div><label>Цвет <input id="paintColor" type="color" value="#27272a"></label><div id="paintPalette"></div><button id="paintEyedropper">⌾ Пипетка рисунка</button>
 <label>Размер <output id="sizeValue"></output><input id="paintSize" type="range" min="0.3" max="60" step="0.1" value="1.5"></label><label>Непрозрачность <output id="opacityValue"></output><input id="paintOpacity" type="range" min="1" max="100" value="100"></label><label>Жёсткость <output id="hardnessValue"></output><input id="paintHardness" type="range" min="0" max="100" value="100"></label><label>Сглаживание <output id="smoothValue"></output><input id="paintSmooth" type="range" min="0" max="85" value="35"></label><label class="paint-check"><input id="paintPressure" type="checkbox" checked> Учитывать нажим стилуса</label></div>
 <div class="paint-section"><div class="paint-layer-head"><h2>Слои</h2><button id="paintAddLayer" aria-label="Добавить слой">＋</button></div><div id="paintLayers"></div><div id="paintPhotos"></div></div><p class="paint-help">Палец и стилус рисуют по телу. Один палец на фоне — поворот. Два пальца: касание — отмена, движение — перемещение, щипок — масштаб. При втором пальце незавершённый штрих убирается. Ластик действует только на выбранный слой.</p></aside>
 <p class="paint-bottom" id="paintHint">Рисуйте пальцем или стилусом по модели</p><div class="paint-cursor" id="paintCursor" hidden></div>
 <dialog id="paintFileDialog"><form method="dialog"><button class="paint-close" aria-label="Закрыть экспорт">×</button><h2>Проект и экспорт</h2><p>Проект сохраняет модели, фотоэскизы, слои и штрихи. Его можно открыть на другом устройстве.</p><button type="button" id="paintExportProject">Скачать проект со слоями</button><button type="button" id="paintImportProject">Открыть проект из файла</button><button type="button" id="paintRestoreBackup">Вернуть работу до импорта</button><hr><button type="button" id="paintPNG">PNG рисунка — текущий вид</button><button type="button" id="paintFlatPNG">PNG участка — без перспективы</button><small>Для развёртки используется последний участок, на котором рисовали; видимые слои совмещаются на нём. На прозрачном PNG — только рисунок, фотоэскизы остаются в проекте.</small><button type="button" id="paintShot">Снимок модели с тату и рисунком</button><p id="paintExportStatus" role="status"></p><small>Примерка 2.4.0 · <span id="appOffline">Проверка офлайн-режима…</span></small></form></dialog><input type="file" id="paintProjectFile" accept=".json,.primerka,application/json" hidden>`;document.body.append(editor);
const projectInput=$('paintProjectFile'),fileDialog=$('paintFileDialog');
function showFiles(){editor.hidden=false;fileDialog.showModal();if(!open)editor.classList.add('files-only')}
fileDialog.addEventListener('close',()=>{if(!open){editor.hidden=true;editor.classList.remove('files-only')}});
fileDialog.addEventListener('click', event => {
 if (open || event.target !== fileDialog) return;
 const {left, right, top, bottom} = fileDialog.getBoundingClientRect();
 if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) fileDialog.close();
});
$('paintFiles').onclick=showFiles;$('btnProjects').onclick=showFiles;
function fresh(){const id=app.newId();return{version:1,active:id,layers:[{id,name:'Разметка 1',visible:true,opacity:1,patches:[]}]}}
function layer(){return session?.layers.find(l=>l.id===session.active)||session?.layers[0]}
function snapshotSession(value=session){
 return {...value,layers:value.layers.map(layer=>({...layer,patches:layer.patches.slice()}))};
}
function record(action){history.push(action);future=[];}
function remember(){
 finishStroke();
 const before=snapshotSession();
 let after;
 record({
  undo(){after=snapshotSession();session=snapshotSession(before);},
  redo(){session=snapshotSession(after);}
 });
}
function historyUI(){
 $('paintUndo').disabled=historyBusy||!history.length;
 $('paintRedo').disabled=historyBusy||!future.length;
 editor.querySelector('.paint-panel').inert=historyBusy;
 $('paintDone').disabled=$('paintFiles').disabled=historyBusy;
}
function persist(){if(!session||loading)return;if(location.hostname==='127.0.0.1'){$('paintSaveState').dataset.points=String(session.layers.reduce((n,l)=>n+l.patches.reduce((n,p)=>n+p.strokes.reduce((n,s)=>n+s.points.length,0),0),0));$('paintSaveState').dataset.patches=String(patches.size);}clearTimeout(saveTimer);$('paintSaveState').textContent='Сохраняю…';(()=>{const value=structuredClone(session),savedKey=key;catalog.add(savedKey);saveJob=saveJob.catch(()=>{}).then(()=>app.write('paint:'+savedKey,value)).then(()=>app.write('paint:catalog',[...catalog])).then(()=>{$('paintSaveState').textContent='Сохранено на планшете'}).catch(()=>{$('paintSaveState').textContent='Не сохранено — скачайте проект';app.notify('Не удалось сохранить рисунок. Скачайте проект, не закрывая приложение.');});})();}
async function flush(){clearTimeout(saveTimer);if(session&&!loading){const value=structuredClone(session);const savedKey=key;catalog.add(savedKey);saveJob=saveJob.catch(()=>{}).then(()=>app.write('paint:'+savedKey,value)).then(()=>app.write('paint:catalog',[...catalog]));await saveJob;}}
function dispose(){for(const r of patches.values()){app.root.remove(r.mesh);r.texture.dispose();r.mesh.material.dispose();r.mesh.geometry.dispose();}patches.clear()}
function patchGeometry(record){const graph=app.model.graph;graph.unfold(record.seed,record.width*.82);const data=graph.buildPatch(null,.0005),g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(data.position,3));g.setAttribute('normal',new T.BufferAttribute(data.normal,3));const uv=data.uv;for(let i=0;i<uv.length;i++)uv[i]=uv[i]/record.width+.5;g.setAttribute('uv',new T.BufferAttribute(uv,2));g.setIndex(new T.BufferAttribute(data.index,1));g.computeBoundingSphere();g.computeBoundsTree();return {geometry:g,source:data.source};}
function createPatch(record,owner){const {geometry,source}=patchGeometry(record),canvas=document.createElement('canvas');canvas.width=canvas.height=RES;replay(canvas,record);const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=Math.min(8,app.renderer.capabilities.getMaxAnisotropy());const material=new T.ShaderMaterial({uniforms:{map:{value:texture},opacity:{value:owner.opacity}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform sampler2D map;uniform float opacity;varying vec2 vUv;void main(){if(vUv.x<0.||vUv.y<0.||vUv.x>1.||vUv.y>1.)discard;vec4 c=texture2D(map,vUv);gl_FragColor=vec4(c.rgb,c.a*opacity);\n#include <colorspace_fragment>\n}',transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-3,polygonOffsetUnits:-6});const mesh=new T.Mesh(geometry,material);mesh.renderOrder=3+session.layers.indexOf(owner);mesh.visible=owner.visible;app.root.add(mesh);const runtime={record,owner,canvas,texture,mesh,source};patches.set(record.id,runtime);return runtime;}
function rebuild(){const wanted=new Set(session.layers.flatMap(l=>l.patches.map(p=>p.id)));for(const[id,r]of patches)if(!wanted.has(id)){app.root.remove(r.mesh);r.texture.dispose();r.mesh.material.dispose();r.mesh.geometry.dispose();patches.delete(id)}for(const l of session.layers)for(const record of l.patches){const r=patches.get(record.id);if(r){r.record=record;r.owner=l;replay(r.canvas,record);r.texture.needsUpdate=true;r.mesh.visible=l.visible;r.mesh.material.uniforms.opacity.value=l.opacity;r.mesh.renderOrder=3+session.layers.indexOf(l);}else createPatch(record,l);}renderLayers();app.invalidate()}
async function load(){const generation=++loadGeneration;loading=true;dispose();key=app.key();session=null;history=[];future=[];try{const savedKey=key;await saveJob.catch(()=>{});const saved=await app.read('paint:'+savedKey);const keys=await app.read('paint:catalog')||[];if(generation!==loadGeneration)return;session=saved?validSession(saved):fresh();for(const k of keys)catalog.add(k);rebuild();}catch(e){if(generation===loadGeneration){session=fresh();app.notify('Рисунок не открыт: '+e.message);}}finally{if(generation===loadGeneration){loading=false;if(open)app.layout(true);renderLayers();historyUI();}}}
window.addEventListener('primerka:model-before',()=>{if(session&&!loading){const value=structuredClone(session),savedKey=key;catalog.add(savedKey);saveJob=saveJob.catch(()=>{}).then(()=>app.write('paint:'+savedKey,value)).then(()=>app.write('paint:catalog',[...catalog]));}++loadGeneration;loading=true;dispose();});
window.addEventListener('primerka:model-ready',()=>void load());if(app.model)void load();
function enter(){if(!app.model||loading){app.notify('Дождитесь загрузки модели');return}open=true;window.__paintMode=true;app.cancelMotion();app.deselect();editor.hidden=false;editor.classList.remove('files-only');document.body.classList.add('painting');app.layout(true);renderLayers();updateBrush();}
function leave(){finishStroke();gestures.clear();touches.clear();touchMode=null;open=false;window.__paintMode=false;editor.hidden=true;document.body.classList.remove('painting');app.controls.enabled=true;app.layout(false);$('paintCursor').hidden=true;void flush().catch(()=>app.notify('Не удалось сохранить — скачайте проект'));}
$('btnPaint').onclick=enter;$('paintDone').onclick=leave;
for(const preset of brushes){const b=button('',()=>{brush=preset;size=brush.size;opacity=brush.opacity;hardness=brush.hardness;navigate=false;updateBrush()});b.dataset.brush=preset.id;b.title=preset.name;b.innerHTML=`<span>${preset.icon}</span><small>${preset.name}</small>`;$('brushes').append(b)}
function updateBrush(){for(const b of $('brushes').children)b.classList.toggle('on',b.dataset.brush===brush.id);$('brushName').textContent=brush.name;$('paintSize').value=size;$('sizeValue').textContent=size.toFixed(1)+' мм';$('paintOpacity').value=opacity*100;$('opacityValue').textContent=Math.round(opacity*100)+'%';$('paintHardness').value=hardness*100;$('hardnessValue').textContent=Math.round(hardness*100)+'%';$('smoothValue').textContent=Math.round(smoothing*100)+'%';$('paintNavigate').classList.toggle('on',navigate);const c=$('brushPreview'),ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);const stroke={brush:{...brush,eraser:false},color,size:6,opacity:1,hardness,pressure:true},stamp=makeStamp(stroke);for(let x=10;x<230;x+=2)dab(ctx,stamp,stroke,{x,y:28+Math.sin(x/35)*9,p:.15+.85*Math.sin((x-10)/220*Math.PI)},3000);ctx.globalCompositeOperation='destination-in';ctx.fillStyle='rgba(0,0,0,'+opacity+')';ctx.fillRect(0,0,c.width,c.height);ctx.globalCompositeOperation='source-over';}
for(const [id,update] of [['paintSize',v=>size=+v],['paintOpacity',v=>opacity=+v/100],['paintHardness',v=>hardness=+v/100],['paintSmooth',v=>smoothing=+v/100]])$(id).oninput=e=>{update(e.target.value);updateBrush()};
$('paintColor').oninput=e=>{color=e.target.value;updateBrush()};$('paintPressure').onchange=e=>usePressure=e.target.checked;
for(const tone of ['#27272a','#6b7280','#a1a1aa','#a24a3a','#28558b','#497659','#8b5ba8','#ffffff']){const b=button('',()=>{color=tone;$('paintColor').value=color;updateBrush()},'paint-swatch');b.style.background=tone;b.title=tone;$('paintPalette').append(b)}
$('paintNavigate').onclick=()=>{navigate=!navigate;updateBrush()};let eyedropper=false;$('paintEyedropper').onclick=()=>{eyedropper=true;$('paintHint').textContent='Коснитесь цвета на рисунке';};
function renderLayers(){if(!session)return;const list=$('paintLayers');list.replaceChildren();for(const l of [...session.layers].reverse()){const row=document.createElement('div');row.className='paint-layer'+(session.active===l.id?' active':'');const eye=button(l.visible?'◉':'○',()=>{remember();l.visible=!l.visible;for(const p of patches.values())if(p.owner===l)p.mesh.visible=l.visible;renderLayers();persist();historyUI();});eye.title='Видимость слоя';const name=button(l.name,()=>{finishStroke();session.active=l.id;renderLayers();persist()});name.title='Выбрать слой; двойное нажатие — переименовать';name.ondblclick=()=>{const value=prompt('Название слоя',l.name);if(value?.trim()){remember();l.name=value.trim().slice(0,50);renderLayers();persist()}};const del=button('×',()=>{if(!confirm('Удалить слой «'+l.name+'»? Это действие можно отменить.'))return;remember();session.layers.splice(session.layers.indexOf(l),1);if(!session.layers.length){const f=fresh();session.layers=f.layers;session.active=f.active}else if(session.active===l.id)session.active=session.layers.at(-1).id;rebuild();persist();historyUI()});del.title='Удалить слой';const alpha=document.createElement('input');alpha.type='range';alpha.min=0;alpha.max=100;alpha.value=l.opacity*100;alpha.setAttribute('aria-label','Непрозрачность слоя '+l.name);alpha.onchange=()=>{remember();l.opacity=alpha.value/100;for(const p of patches.values())if(p.owner===l)p.mesh.material.uniforms.opacity.value=l.opacity;persist();historyUI()};row.append(eye,name,del,alpha);list.append(row)}
 const photos=$('paintPhotos');photos.replaceChildren();for(const d of app.decals){d.mesh.visible=d.rec.visible!==false;const row=document.createElement('div');row.className='paint-photo';const b=button(d.mesh.visible?'◉':'○',()=>{d.rec.visible=d.rec.visible===false;d.mesh.visible=d.rec.visible;app.save();app.invalidate();renderLayers()});b.title='Видимость фотоэскиза';const img=document.createElement('img');img.src=d.thumb;const label=document.createElement('span');label.textContent='Фотоэскиз '+d.rec.n;row.append(b,img,label);photos.append(row)}if(!app.decals.length)photos.textContent='Фотоэскиз можно добавить до входа в редактор.';
}
$('paintAddLayer').onclick=()=>{if(session.layers.length>=8){app.notify('Можно создать до 8 слоёв');return}remember();const id=app.newId();session.layers.push({id,name:'Разметка '+(session.layers.length+1),visible:true,opacity:1,patches:[]});session.active=id;renderLayers();persist();historyUI()};
async function changeHistory(redo){
 if(historyBusy||loading)return;
 finishStroke();
 const from=redo?future:history,to=redo?history:future,action=from.at(-1);
 if(!action)return;
 historyBusy=true;historyUI();
 try{
  await (redo?action.redo():action.undo());
  from.pop();to.push(action);
  rebuild();if(!action.persisted)persist();
 }catch{app.notify('Не удалось изменить историю. Попробуйте ещё раз.');}
 finally{historyBusy=false;historyUI();}
}
$('paintUndo').onclick=()=>void changeHistory(false);
$('paintRedo').onclick=()=>void changeHistory(true);

const clearDialog=document.createElement('dialog');
clearDialog.id='clearViewerDialog';
clearDialog.setAttribute('aria-labelledby','clearViewerTitle');
clearDialog.innerHTML=`
 <h2 id="clearViewerTitle"></h2>
 <div id="clearViewerOptions">
  <button type="button" data-clear="drawing">Рисунок</button>
  <button type="button" data-clear="sketches">Эскизы</button>
  <button type="button" data-clear="all">Всё</button>
 </div>
 <p id="clearViewerError" role="alert" hidden></p>
 <div class="clear-viewer-actions">
  <button type="button" id="clearViewerCancel">Отмена</button>
  <button type="button" id="clearViewerConfirm" hidden>Убрать</button>
 </div>`;
document.body.append(clearDialog);
const clearTitle=$('clearViewerTitle'),clearOptions=$('clearViewerOptions'),clearConfirm=$('clearViewerConfirm'),clearError=$('clearViewerError');
const clearLabels={drawing:'рисунок',sketches:'все эскизы',all:'рисунок и все эскизы'};
let clearChoice;

$('btnClear').onclick=()=>{
 if(loading||historyBusy||!session)return;
 clearTitle.textContent='Что вы хотите убрать?';
 clearOptions.hidden=false;clearConfirm.hidden=true;clearError.hidden=true;
 clearDialog.showModal();
};
clearOptions.addEventListener('click',event=>{
 const choice=event.target.closest('[data-clear]')?.dataset.clear;
 if(!choice)return;
 clearChoice=choice;
 clearTitle.textContent='Убрать '+clearLabels[choice]+' с текущей модели?';
 clearOptions.hidden=true;clearConfirm.hidden=false;
 $('clearViewerCancel').focus();
});
$('clearViewerCancel').onclick=()=>{if(!historyBusy)clearDialog.close();};
clearDialog.addEventListener('cancel',event=>{if(historyBusy)event.preventDefault();});
clearDialog.addEventListener('click',event=>{
 if(historyBusy||event.target!==clearDialog)return;
 const {left,right,top,bottom}=clearDialog.getBoundingClientRect();
 if(event.clientX<left||event.clientX>right||event.clientY<top||event.clientY>bottom)clearDialog.close();
});
function replaceViewerWork(nextDrawing,nextSketches){
 return async()=>{
  await saveJob;
  const entries=nextDrawing?[['paint:'+key,nextDrawing],['paint:catalog',[...new Set([...catalog,key])]]]:[];
  if(nextSketches)await app.replaceDecals(nextSketches(app.state.decals[key]||[]),entries);
  else await app.writeEntries(entries);
  if(nextDrawing){session=snapshotSession(nextDrawing);catalog.add(key);}
 };
}
clearConfirm.onclick=async()=>{
 if(historyBusy||loading)return;
 finishStroke();
 const hadDrawing=session.layers.some(l=>l.patches.some(p=>p.strokes.length));
 const hadSketches=!!app.state.decals[key]?.length;
 const beforeDrawing=clearChoice!=='sketches'&&hadDrawing?snapshotSession():null;
 const beforeSketches=clearChoice!=='drawing'&&hadSketches?structuredClone(app.state.decals[key]):null;
 if(!beforeDrawing&&!beforeSketches){clearDialog.close();app.notify('На этой модели нечего убрать');return;}
 const afterDrawing=beforeDrawing?snapshotSession():null;
 if(afterDrawing){
  for(const layer of afterDrawing.layers)layer.patches=[];
  delete afterDrawing.lastPatch;
 }
 const removedIds=new Set(beforeSketches?.map(sketch=>sketch.id));
 const restoreSketches=beforeSketches?current=>[
  ...structuredClone(beforeSketches.filter(sketch=>!current.some(other=>other.id===sketch.id))),
  ...current
 ]:null;
 const removeSketches=beforeSketches?current=>current.filter(sketch=>!removedIds.has(sketch.id)):null;
 const action={
  undo:replaceViewerWork(beforeDrawing,restoreSketches),
  redo:replaceViewerWork(afterDrawing,removeSketches),
  persisted:true
 };
 historyBusy=true;clearConfirm.disabled=$('clearViewerCancel').disabled=true;historyUI();clearError.hidden=true;
 try{
  await action.redo();record(action);rebuild();clearDialog.close();
  app.notify('Убрано. Действие можно отменить в режиме рисования.');
 }catch{clearError.textContent='Не удалось убрать. Попробуйте ещё раз.';clearError.hidden=false;}
 finally{historyBusy=false;clearConfirm.disabled=$('clearViewerCancel').disabled=false;historyUI();}
};
function hitPatch(runtime,x,y,base){ndc.set(x/innerWidth*2-1,-y/innerHeight*2+1);ray.setFromCamera(ndc,app.camera);app.root.updateMatrixWorld(true);const hit=ray.intersectObject(runtime.mesh,false)[0];if(!hit||Math.abs(hit.distance-base.distance)>.006||!hit.uv)return null;return {x:hit.uv.x*RES,y:(1-hit.uv.y)*RES}}
function choosePatch(event,base){const owner=layer();if(!owner||!owner.visible){app.notify('Выберите видимый слой');return null}for(const runtime of [...patches.values()].reverse()){if(runtime.owner!==owner)continue;const uv=hitPatch(runtime,event.clientX,event.clientY,base);const margin=Math.max(80,size/1000/runtime.record.width*RES);if(uv&&uv.x>margin&&uv.y>margin&&uv.x<RES-margin&&uv.y<RES-margin)return runtime;}
 if([...patches.values()].length>=24){app.notify('Этот вид содержит 24 участка. Сохраните проект или рисуйте на отдельной части тела.');return null}const record={id:app.newId(),seed:app.seed(base),width:Math.max(.16,size/1000*4),strokes:[]};owner.patches.push(record);const runtime=createPatch(record,owner);app.invalidate();return runtime;}
function strokeFor(runtime){let stroke=activeStroke.records.get(runtime.record.id);if(!stroke){stroke={brush:{...brush},color,size,opacity,hardness,pressure:usePressure,points:[],localCuts:true};if(!activeStroke.patchLengths.has(runtime.record))activeStroke.patchLengths.set(runtime.record,runtime.record.strokes.length);runtime.record.strokes.push(stroke);activeStroke.records.set(runtime.record.id,stroke);const base=document.createElement('canvas'),scratch=document.createElement('canvas');base.width=base.height=scratch.width=scratch.height=RES;base.getContext('2d').drawImage(runtime.canvas,0,0);const paint={...stroke,opacity:1,brush:{...stroke.brush,eraser:false}};activeStroke.stamps.set(stroke,{stamp:makeStamp(paint),paint,base,scratch,runtime,dirty:false,stroke,startRemaining:-1});}return stroke;}
function drawAt(runtime,uv,p,continuePath=true,force=false){
 const stroke=strokeFor(runtime),previous=stroke.points.at(-1),point={...uv,p};
 const scale=RES/runtime.record.width,distance=previous?Math.hypot(point.x-previous.x,point.y-previous.y):Infinity;
 const pressureScale=usePressure&&brush.pressureSize ? .12+.88*Math.min(p,previous?.p??p) : 1;
 const spacing=size/1000*scale*pressureScale*brush.spacing;
 if(continuePath&&distance<spacing*.65&&!force&&!activeStroke.spraying)return stroke;

 const points=previous&&continuePath&&distance<RES*.5?sampleLine(previous,point,spacing):[point];
 const buffer=activeStroke.stamps.get(stroke),ctx=buffer.scratch.getContext('2d');
 for(const dot of points){
  if(buffer.startRemaining>=0){
   const last=stroke.points.at(-1);
   buffer.startRemaining-=Math.hypot(dot.x-last.x,dot.y-last.y);
  }
  stroke.points.push(dot);
  dabJoined(ctx,buffer.stamp,buffer.paint,dot,scale,buffer.startRemaining>=0?stroke.startCut:null);
 }
 buffer.dirty=true;
 if(!activeStroke.frame)activeStroke.frame=requestAnimationFrame(paintFrame);
 return stroke;
}
function updateJoin(stroke,kind,cut){
 if(!cut)return;
 stroke[kind]=cut;
 const buffer=activeStroke.stamps.get(stroke);
 buffer.startRemaining=redrawStrokeInk(buffer.scratch.getContext('2d'),buffer.stamp,buffer.paint,stroke,RES/buffer.runtime.record.width);
 buffer.dirty=true;
}
function joinCut(from,to,sign){
 const dx=to.x-from.x,dy=to.y-from.y,length=Math.hypot(dx,dy);
 return length>.01?[to.x,to.y,sign*dx/length,sign*dy/length]:undefined;
}
function sample(event,base){const pressure=pressureOf(event,usePressure);if(brush.eraser){for(const runtime of patches.values()){if(runtime.owner!==layer())continue;const uv=hitPatch(runtime,event.clientX,event.clientY,base);if(uv&&uv.x>=0&&uv.x<=RES&&uv.y>=0&&uv.y<=RES)drawAt(runtime,uv,pressure);}return}
 let current=activeStroke.current;let uv=current&&hitPatch(current,event.clientX,event.clientY,base);const margin=current?Math.max(50,size/1000/current.record.width*RES*.6):0;if(!uv||uv.x<margin||uv.y<margin||uv.x>RES-margin||uv.y>RES-margin){const next=choosePatch(event,base),nextUV=next&&hitPatch(next,event.clientX,event.clientY,base);if(nextUV){current=next;uv=nextUV;}activeStroke.current=current;}
 if(current&&uv&&uv.x>=0&&uv.x<=RES&&uv.y>=0&&uv.y<=RES){
  const last=activeStroke.lastSample;
  let connected=last?.runtime===current;
  if(last&&!connected){
   const previousUV=hitPatch(current,last.x,last.y,last.base);
   const outgoingUV=hitPatch(last.runtime,event.clientX,event.clientY,base);
   const outgoing=previousUV&&outgoingUV?drawAt(last.runtime,outgoingUV,pressure,true,true):activeStroke.records.get(last.runtime.record.id);
   if(previousUV&&outgoingUV){
    updateJoin(outgoing,'endCut',joinCut(last.uv,outgoingUV,-1));
   }
   if(activeStroke.frame)cancelAnimationFrame(activeStroke.frame);
   paintFrame();
   activeStroke.records.delete(last.runtime.record.id);
   activeStroke.stamps.delete(outgoing);

   if(previousUV&&outgoingUV){
    const incoming=drawAt(current,previousUV,last.p,false);
    updateJoin(incoming,'startCut',joinCut(previousUV,uv,1));
    connected=true;
   }
  }
  drawAt(current,uv,pressure,connected);
  session.lastPatch=current.record.id;
  activeStroke.lastSample={runtime:current,x:event.clientX,y:event.clientY,base,p:pressure,uv};
 }else activeStroke.lastSample=null;
}
function pickColor(e){const base=app.hit(e.clientX,e.clientY);if(!base)return;for(const runtime of [...patches.values()].reverse()){if(!runtime.owner.visible)continue;const uv=hitPatch(runtime,e.clientX,e.clientY,base);if(!uv||uv.x<0||uv.y<0||uv.x>=RES||uv.y>=RES)continue;const pixel=runtime.canvas.getContext('2d').getImageData(uv.x,uv.y,1,1).data;if(pixel[3]){color='#'+[...pixel.slice(0,3)].map(v=>v.toString(16).padStart(2,'0')).join('');$('paintColor').value=color;updateBrush();break}}eyedropper=false;$('paintHint').textContent='Рисуйте пальцем или стилусом по модели'}
function stop(e){e.preventDefault();e.stopImmediatePropagation()}
function capturePointer(id){try{app.canvas.setPointerCapture(id)}catch{}}
function releasePointer(id){try{app.canvas.releasePointerCapture(id)}catch{}}
function startStroke(e){
 if(loading||historyBusy||!session)return false;
 const owner=layer();if(!owner?.visible){app.notify('Выберите видимый слой');return false}
 app.cancelMotion();app.controls.enableDamping=false;app.controls.update();app.controls.enabled=false;
 activeStroke={pointer:e.pointerId,ownerId:owner.id,beforePatches:owner.patches.slice(),beforeLast:session.lastPatch,patchLengths:new Map(),current:null,records:new Map(),stamps:new Map()};
 capturePointer(e.pointerId);eventSample(e);
 if(brush.id==='airbrush')activeStroke.hold=setInterval(()=>{if(activeStroke?.event){activeStroke.spraying=true;eventSample(activeStroke.event);activeStroke.spraying=false;}},40);
 return true;
}
function revertStroke({ownerId,beforePatches,beforeLast,patchLengths}){
 for(const [patch,length] of patchLengths)patch.strokes.length=length;
 session.layers.find(l=>l.id===ownerId).patches=beforePatches.slice();
 session.lastPatch=beforeLast;
}
function rememberStroke({ownerId,beforePatches,beforeLast,patchLengths}){
 const afterPatches=session.layers.find(l=>l.id===ownerId).patches.slice(),afterLast=session.lastPatch;
 const added=[...patchLengths].map(([patch,length])=>[patch,patch.strokes.slice(length)]);
 record({
  undo(){revertStroke({ownerId,beforePatches,beforeLast,patchLengths});},
  redo(){
   for(const [patch,strokes] of added)for(const stroke of strokes)patch.strokes.push(stroke);
   session.layers.find(l=>l.id===ownerId).patches=afterPatches.slice();
   session.lastPatch=afterLast;
  }
 });
}
function cancelStroke(){
 if(!activeStroke)return;
 const stroke=activeStroke;clearInterval(stroke.hold);if(stroke.frame)cancelAnimationFrame(stroke.frame);
 releasePointer(stroke.pointer);gestures.end(stroke.pointer);activeStroke=null;
 revertStroke(stroke);rebuild();persist();historyUI();
}
function beginNavigation(){app.cancelMotion();app.controls.enableDamping=false;app.controls.update();app.controls.enabled=false;$('paintCursor').hidden=true;}
function endNavigation(){app.controls.enabled=true;app.controls.enableDamping=true;}
function rotateTouch(dx,dy){const c=app.controls,camera=app.camera,offset=camera.position.clone().sub(c.target),r=offset.length();let theta=Math.atan2(offset.x,offset.z)-dx*Math.PI*2/innerHeight*c.rotateSpeed,phi=Math.acos(clamp(offset.y/r,-1,1))-dy*Math.PI*2/innerHeight*c.rotateSpeed;phi=clamp(phi,Math.max(.001,c.minPolarAngle),Math.min(Math.PI-.001,c.maxPolarAngle));theta=clamp(theta,c.minAzimuthAngle,c.maxAzimuthAngle);offset.set(r*Math.sin(phi)*Math.sin(theta),r*Math.cos(phi),r*Math.sin(phi)*Math.cos(theta));camera.position.copy(c.target).add(offset);c.update();app.invalidate();}
function transformTouch({dx,dy,scale}){const c=app.controls,camera=app.camera,distance=camera.position.distanceTo(c.target),unit=2*distance*Math.tan(camera.fov*Math.PI/360)/innerHeight,e=camera.matrixWorld.elements;const delta=new T.Vector3(e[0],e[1],e[2]).multiplyScalar(-dx*unit).addScaledVector(new T.Vector3(e[4],e[5],e[6]),dy*unit);camera.position.add(delta);c.target.add(delta);const offset=camera.position.clone().sub(c.target),next=clamp(distance*scale,c.minDistance,c.maxDistance);camera.position.copy(c.target).add(offset.multiplyScalar(next/distance));c.update();app.invalidate();}
function samplesOf(e){const events=e.getCoalescedEvents?.();return events?.length?events:[e];}
window.addEventListener('pointerdown',e=>{
 if(!open||e.target!==app.canvas)return;
 if(e.pointerType==='touch'){
  stop(e);capturePointer(e.pointerId);const action=touches.down(e.pointerId,e.clientX,e.clientY,performance.now());
  if(action.type==='multi-start'){cancelStroke();gestures.clear();touchMode='multi';beginNavigation();return;}
  if(action.type!=='single')return;
  if(activeStroke){touchMode='ignore';return;}
  if(navigate||!app.hit(e.clientX,e.clientY)){touchMode='rotate';beginNavigation();return;}
  if(eyedropper){pickColor(e);touchMode='ignore';return;}
  touchMode=startStroke(e)?'draw':'ignore';return;
 }
 if(touches.multi||touches.points.size&&touchMode!=='ignore'){stop(e);return;}
 const route=gestures.begin(e.pointerId,{onModel:!!app.hit(e.clientX,e.clientY),navigate,button:e.button});if(route==='ignore'){stop(e);return}if(route==='navigate'){app.cancelMotion();return}stop(e);if(eyedropper){pickColor(e);gestures.end(e.pointerId);return}if(!startStroke(e))gestures.end(e.pointerId);
},{capture:true,passive:false});
window.addEventListener('pointermove',e=>{
 if(!open||e.target!==app.canvas&&!activeStroke&&!touches.points.has(e.pointerId))return;
 if(e.pointerType==='touch'&&touches.points.has(e.pointerId)){stop(e);const action=touches.move(e.pointerId,e.clientX,e.clientY);if(action.type==='transform')transformTouch(action);else if(action.type==='single'){if(touchMode==='rotate')rotateTouch(action.dx,action.dy);else if(touchMode==='draw'&&activeStroke?.pointer===e.pointerId)for(const value of samplesOf(e))eventSample(value);}return;}
 if(touches.multi){stop(e);return;}
 if(!activeStroke){if(e.pointerType!=='touch'){$('paintCursor').hidden=false;$('paintCursor').style.left=e.clientX+'px';$('paintCursor').style.top=e.clientY+'px';const base=app.hit(e.clientX,e.clientY);const pixels=base?size/1000*innerHeight/(2*Math.tan(app.camera.fov*Math.PI/360)*base.distance):8;$('paintCursor').style.width=$('paintCursor').style.height=clamp(pixels,4,220)+'px';}return}if(e.pointerId!==activeStroke.pointer)return;stop(e);for(const value of samplesOf(e))eventSample(value);
},{capture:true,passive:false});
function paintFrame(){if(!activeStroke)return;activeStroke.frame=0;for(const b of activeStroke.stamps.values())if(b.dirty){compositeStroke(b.runtime.canvas,b.base,b.scratch,b.stroke);b.runtime.texture.needsUpdate=true;b.dirty=false}app.invalidate();}
function eventSample(e,settle=false){
 const stroke=activeStroke;
 if(stroke.blocked)return;
 const previous=settle?stroke.filtered:stroke.event;
 const count=previous?Math.max(1,Math.ceil(Math.hypot(e.clientX-previous.clientX,e.clientY-previous.clientY)/3)):1;
 const projectionScale=2*Math.tan(app.camera.fov*Math.PI/360)/innerHeight;
 const follows=(last,point,hit)=>followsSurface(last?.hit,hit,last?Math.hypot(point.clientX-last.clientX,point.clientY-last.clientY):0,projectionScale);
 for(let i=1;i<=count;i++){
  const t=i/count,raw={clientX:previous?previous.clientX+(e.clientX-previous.clientX)*t:e.clientX,clientY:previous?previous.clientY+(e.clientY-previous.clientY)*t:e.clientY,pressure:previous?previous.pressure+(e.pressure-previous.pressure)*t:e.pressure,pointerType:e.pointerType};
  raw.hit=app.hit(raw.clientX,raw.clientY);
  if(!follows(settle?stroke.filtered:stroke.raw,raw,raw.hit)){stroke.blocked=true;return}
  if(!settle)stroke.raw=raw;
  const last=stroke.filtered;
  let point=raw;
  if(last&&!settle&&smoothing){
   const filtered={...raw,clientX:raw.clientX+(last.clientX-raw.clientX)*smoothing,clientY:raw.clientY+(last.clientY-raw.clientY)*smoothing};
   filtered.hit=app.hit(filtered.clientX,filtered.clientY);
   if(follows(last,filtered,filtered.hit))point=filtered;
  }
  if(!follows(last,point,point.hit)){stroke.blocked=true;return}
  stroke.filtered=point;
  sample(point,point.hit);
 }
 stroke.event={clientX:e.clientX,clientY:e.clientY,pointerType:e.pointerType,pressure:e.pressure};
}
function finishStroke(){if(!activeStroke)return;gestures.end(activeStroke.pointer);clearInterval(activeStroke.hold);if(activeStroke.event&&!brush.eraser)eventSample(activeStroke.event,true);if(activeStroke.frame)cancelAnimationFrame(activeStroke.frame);paintFrame();releasePointer(activeStroke.pointer);if(activeStroke.patchLengths.size)rememberStroke(activeStroke);else{revertStroke(activeStroke);rebuild();}activeStroke=null;if(!touches.points.size)endNavigation();persist();historyUI();}
function endPointer(e,cancelled=false){
 if(e.pointerType==='touch'&&touches.points.has(e.pointerId)){stop(e);const action=touches.up(e.pointerId,performance.now(),cancelled);releasePointer(e.pointerId);if(activeStroke?.pointer===e.pointerId)finishStroke();if(action.type==='undo')$('paintUndo').click();if(!touches.points.size){touchMode=null;endNavigation();}return;}
 gestures.end(e.pointerId);if(activeStroke?.pointer===e.pointerId){stop(e);finishStroke();}
}
window.addEventListener('pointerup',e=>endPointer(e),{capture:true,passive:false});window.addEventListener('pointercancel',e=>endPointer(e,true),{capture:true,passive:false});
window.addEventListener('blur',()=>{gestures.clear();touches.clear();touchMode=null;finishStroke();endNavigation()});app.canvas.addEventListener('pointerleave',()=>$('paintCursor').hidden=true);

window.addEventListener('keydown',e=>{if(fileDialog.open){if(e.key==='Escape'){e.preventDefault();fileDialog.close()}return}if(!open||/INPUT|TEXTAREA/.test(e.target.tagName))return;if(e.key==='Escape'){leave();return}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();(e.shiftKey?$('paintRedo'):$('paintUndo')).click();}if(e.key.toLowerCase()==='e'){brush=brushes.find(b=>b.eraser);updateBrush()}});
window.addEventListener('resize',()=>{if(open)app.layout(true)});document.addEventListener('visibilitychange',()=>{if(document.hidden){touches.clear();touchMode=null;finishStroke();endNavigation();void flush().catch(()=>{})}});
async function download(blob,name){if(await saveNativeFile(blob,name))return;const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000)}
const stamp=()=>new Date().toISOString().slice(0,19).replaceAll(':','-');
async function exportProject(){finishStroke();await flush();const state=structuredClone(app.state),images={},sessions={};for(const k of catalog){const v=await app.read('paint:'+k);if(v)sessions[k]=v}for(const records of Object.values(state.decals))for(const record of records){if(images[record.imageId])continue;const canvas=await app.image(record.imageId);if(!canvas)throw Error('Не найден фотоэскиз. Проект не сохранён.');images[record.imageId]=canvas.toDataURL('image/png')}const data={format:'primerka-project',version:2,savedAt:new Date().toISOString(),state,sessions,images};await download(new Blob([JSON.stringify(data)],{type:'application/json'}),'primerka-'+stamp()+'.primerka.json');}
async function guarded(action){try{$('paintExportStatus').textContent='Готовлю файл…';await action();$('paintExportStatus').textContent='Файл готов. Сохраните его в «Загрузки».'}catch(e){$('paintExportStatus').textContent=e.message;app.notify(e.message)}}
$('paintExportProject').onclick=()=>guarded(exportProject);$('paintImportProject').onclick=()=>projectInput.click();

projectInput.onchange=async()=>{const file=projectInput.files?.[0];projectInput.value='';if(!file)return;await guarded(async()=>{if(file.size>80*1024*1024)throw Error('Проект больше 80 МБ');const p=validateProject(JSON.parse(await file.text()));const decoded={};for(const[id,data]of Object.entries(p.images)){const blob=await(await fetch(data)).blob();await createImageBitmap(blob).then(image=>{if(image.width>8192||image.height>8192)throw Error('Слишком большое изображение');image.close()});decoded[id]=blob}if(!confirm('Открыть этот проект? Текущая работа останется в автоматической резервной копии; для переноса скачайте её как проект.'))return;await flush();await backupCurrent();for(const[id,blob]of Object.entries(decoded))await app.write('img:'+id,blob);app.clearImages();for(const k of catalog)if(!p.sessions[k])await app.write('paint:'+k,fresh());for(const[k,v]of Object.entries(p.sessions))await app.write('paint:'+k,v);catalog.clear();for(const k of Object.keys(p.sessions))catalog.add(k);await app.write('paint:catalog',[...catalog]);session=null;for(const field of ['variant','sex','part','side','tone','bg','counter','decals','panelHidden','model3Legacy'])if(field in p.state)app.state[field]=p.state[field];await app.write('state',structuredClone(app.state));app.save();await app.load();fileDialog.close();app.notify('Проект открыт');});};
async function backupCurrent(){const images={};for(const records of Object.values(app.state.decals))for(const r of records){const blob=await app.read('img:'+r.imageId);if(blob)images[r.imageId]=blob}await app.write('paint:backup',{state:structuredClone(app.state),sessions:Object.fromEntries(await Promise.all([...catalog].map(async k=>[k,await app.read('paint:'+k)]))),images});}
$('paintRestoreBackup').onclick=()=>guarded(async()=>{const backup=await app.read('paint:backup');if(!backup)throw Error('Резервной копии до импорта пока нет');if(!confirm('Восстановить работу до последнего импорта? Текущая работа займёт её место в резервной копии.'))return;await flush();await backupCurrent();for(const[id,blob]of Object.entries(backup.images||{}))await app.write('img:'+id,blob);app.clearImages();for(const[k,v]of Object.entries(backup.sessions))await app.write('paint:'+k,v);catalog.clear();for(const k of Object.keys(backup.sessions))catalog.add(k);await app.write('paint:catalog',[...catalog]);session=null;Object.assign(app.state,backup.state);await app.write('state',structuredClone(app.state));await app.load();fileDialog.close();});
$('paintShot').onclick=()=>guarded(()=>app.screenshot());
async function pngView(){if(!session)throw Error('Сначала нарисуйте на модели');const objects=[];app.scene.traverse(o=>{if(o.isMesh){objects.push([o,o.visible]);o.visible=[...patches.values()].some(p=>p.mesh===o&&p.owner.visible)}});try{app.renderer.render(app.scene,app.camera);const blob=await new Promise(r=>app.canvas.toBlob(r,'image/png'));await download(blob,'primerka-drawing-'+stamp()+'.png')}finally{for(const[o,v]of objects)o.visible=v;app.invalidate()}}
$('paintPNG').onclick=()=>guarded(pngView);
async function pngFlat(){const target=patches.get(session?.lastPatch)||[...patches.values()].at(-1);if(!target)throw Error('Сначала нарисуйте участок');const graph=app.model.graph;graph.unfold(target.record.seed,target.record.width*.82);const mark=graph.stamp,uv=graph.U,objects=[],scene=new T.Scene(),camera=new T.PerspectiveCamera(90,1,.1,5);camera.position.z=1;camera.lookAt(0,0,0);for(const p of patches.values()){if(!p.owner.visible)continue;const source=p.source,g=p.mesh.geometry,src=g.index.array,indices=[];for(let i=0;i<src.length;i+=3)if([src[i],src[i+1],src[i+2]].every(v=>graph.done[source[v]]===mark))indices.push(src[i],src[i+1],src[i+2]);const pos=new Float32Array(source.length*3);for(let i=0;i<source.length;i++){pos[i*3]=uv[source[i]*2]/target.record.width*2;pos[i*3+1]=uv[source[i]*2+1]/target.record.width*2}const geom=new T.BufferGeometry();geom.setAttribute('position',new T.BufferAttribute(pos,3));geom.setAttribute('uv',g.attributes.uv.clone());geom.setIndex(indices);const mesh=new T.Mesh(geom,p.mesh.material);mesh.renderOrder=p.mesh.renderOrder;mesh.frustumCulled=false;scene.add(mesh);objects.push(mesh)}const renderer=new T.WebGLRenderer({alpha:true,antialias:true});try{renderer.setSize(2048,2048);renderer.render(scene,camera);const blob=await new Promise(r=>renderer.domElement.toBlob(r,'image/png'));await download(blob,'primerka-flat-'+Math.round(target.record.width*100)+'cm-'+stamp()+'.png')}finally{for(const mesh of objects)mesh.geometry.dispose();renderer.dispose();renderer.forceContextLoss();}}
$('paintFlatPNG').onclick=()=>guarded(pngFlat);
updateBrush();historyUI();
// Read-only state used by local browser verification; no images or private project data are transmitted.
window.__paint={enter,leave,get session(){return session},get patches(){return patches},get brush(){return brush},get loading(){return loading},validateProject,flush};

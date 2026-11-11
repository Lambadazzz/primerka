const settingsButton=document.getElementById('btnSettings');
const storageKey='primerka:tour-seen';
const steps=[
 {title:'Добро пожаловать в Примерку',text:'Посмотрите, как приложить эскиз к телу, дорисовать детали и сохранить результат.'},
 {title:'Выберите модель',text:'Здесь можно сменить позу, выбрать тело целиком, руку с плечом или ногу и переключить сторону.',target:'btnPanel'},
 {title:'Примерьте эскиз',text:'Загрузите изображение и разместите его на модели. Добавленные эскизы появятся в нижней ленте.',target:'btnAdd'},
 {title:'Рисуйте по модели',text:'В редакторе есть кисти и слои. Палец или стилус рисует по модели, а движение пальцем с фона вращает её. Щипок двумя пальцами меняет масштаб.',target:'btnPaint'},
 {title:'Сохраните работу',text:'В «Проектах» можно скачать редактируемый файл, открыть его на другом устройстве или сохранить PNG и снимок.',target:'btnProjects'},
 {title:'Вернитесь к подсказкам',text:'Этот обзор можно в любой момент открыть снова через настройки.',target:'btnSettings'}
];

const settings=document.createElement('dialog');
settings.className='primerka-settings';
settings.setAttribute('aria-labelledby','primerkaSettingsTitle');
settings.innerHTML=`
 <form method="dialog">
  <div class="guide-label"></div>
  <h2 id="primerkaSettingsTitle">Настройки</h2>
  <button class="guide-restart" type="button"><span><strong>Повторить обучение</strong><small>Короткий обзор инструментов</small></span><span aria-hidden="true">↗</span></button>
  <button class="guide-secondary">Готово</button>
 </form>`;

settings.querySelector('.guide-label').textContent=document.title;

const tour=document.createElement('dialog');
tour.className='primerka-tour';
tour.setAttribute('aria-labelledby','primerkaTourTitle');
tour.setAttribute('aria-describedby','primerkaTourText');
tour.innerHTML=`
 <div class="guide-spot" aria-hidden="true" hidden></div>
 <section class="guide-card">
  <div class="guide-art" aria-hidden="true">
   <svg viewBox="0 0 360 120" fill="none">
    <path d="M-20 104C48 91 53 20 125 25s70 89 139 57 62-67 119-67" stroke="#ddad91" stroke-width="1.5" stroke-dasharray="4 6"/>
    <ellipse cx="180" cy="60" rx="88" ry="42" transform="rotate(-16 180 60)" stroke="#f4ceaa" opacity=".55"/>
    <path d="M180 21c5 23 16 34 39 39-23 5-34 16-39 39-5-23-16-34-39-39 23-5 34-16 39-39Z" fill="#f8dfc7"/>
    <path d="M244 28v18m-9-9h18M116 78v14m-7-7h14" stroke="#f8dfc7" stroke-width="2" stroke-linecap="round"/>
   </svg>
  </div>
  <div class="guide-content">
   <div class="guide-label" id="primerkaTourStep"></div>
   <h2 id="primerkaTourTitle" tabindex="-1"></h2>
   <p id="primerkaTourText"></p>
   <div class="guide-progress" aria-hidden="true"></div>
   <div class="guide-actions">
    <button type="button" class="guide-secondary" data-guide="skip">Пропустить</button>
    <button type="button" class="guide-secondary" data-guide="back">Назад</button>
    <button type="button" class="guide-primary" data-guide="next"></button>
   </div>
  </div>
 </section>`;

document.body.append(settings,tour);
const title=tour.querySelector('h2');
const spot=tour.querySelector('.guide-spot');
const next=tour.querySelector('[data-guide=next]');
const back=tour.querySelector('[data-guide=back]');
const tools=document.querySelector('.tool-list');
let step=0,savedScroll=0;

function positionSpot(){
 const target=document.getElementById(steps[step].target);
 spot.hidden=!target;
 if(!target){delete tour.dataset.placement;return}
 const rect=target.getBoundingClientRect();
 spot.style.left=rect.left-4+'px';
 spot.style.top=rect.top-4+'px';
 spot.style.width=rect.width+8+'px';
 spot.style.height=rect.height+8+'px';
 tour.dataset.placement=rect.top>tour.clientHeight-rect.bottom?'top':'bottom';
}

function showStep(){
 const current=steps[step];
 const target=document.getElementById(current.target);
 if(target&&tools.contains(target)){
  const bounds=tools.getBoundingClientRect(),rect=target.getBoundingClientRect();
  if(rect.top<bounds.top)tools.scrollTop-=bounds.top-rect.top;
  if(rect.bottom>bounds.bottom)tools.scrollTop+=rect.bottom-bounds.bottom;
 }
 tour.querySelector('.guide-art').hidden=step!==0;
 tour.querySelector('#primerkaTourStep').textContent=step===0?'Краткий обзор':`${step} / ${steps.length-1}`;
 title.textContent=current.title;
 tour.querySelector('#primerkaTourText').textContent=current.text;
 tour.querySelector('.guide-progress').replaceChildren(...steps.map((_,i)=>{
  const dot=document.createElement('span');
  dot.classList.toggle('current',i===step);
  return dot;
 }));
 back.hidden=step===0;
 next.textContent=step===0?'Начать':step===steps.length-1?'Готово':'Далее';
 positionSpot();
 title.focus({preventScroll:true});
}

function startTour(){
 if(tour.open)return;
 step=0;
 savedScroll=tools.scrollTop;
 tour.showModal();
 showStep();
}

function rememberTour(){
 try{localStorage.setItem(storageKey,'1')}catch{}
}

function closeTour(){
 rememberTour();
 tour.close();
}

settingsButton.addEventListener('click',()=>settings.showModal());
settings.querySelector('.guide-restart').addEventListener('click',()=>{
 settings.close();
 startTour();
});
next.addEventListener('click',()=>{
 if(step===steps.length-1){closeTour();return}
 step++;
 showStep();
});
back.addEventListener('click',()=>{step--;showStep()});
tour.querySelector('[data-guide=skip]').addEventListener('click',closeTour);
tour.addEventListener('cancel',rememberTour);
tour.addEventListener('close',()=>{tools.scrollTop=savedScroll});
window.addEventListener('resize',()=>{if(tour.open)positionSpot()});
window.addEventListener('load',()=>{
 let seen=false;
 try{seen=localStorage.getItem(storageKey)==='1'}catch{}
 if(!seen&&!document.querySelector('dialog[open]'))startTour();
});

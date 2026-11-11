const toggle = document.getElementById('btnPanel');
const modelPanel = document.getElementById('modelProperties');
const inspector = document.getElementById('inspector');
const inspectorToggle = document.getElementById('btnInsp');
const dismiss = document.getElementById('dismissViewerMenu');
const dock = document.querySelector('.dock');

function updateMenus() {
  const expanded = !document.body.classList.contains('panel-hidden');
  const inspectorOpen = inspector.classList.contains('open');
  const label = expanded ? 'Скрыть свойства модели' : 'Показать свойства модели';
  toggle.setAttribute('aria-expanded', String(expanded));
  toggle.setAttribute('aria-label', label);
  toggle.title = label;
  modelPanel.inert = !expanded;
  inspectorToggle.setAttribute('aria-expanded', String(inspectorOpen));
  inspector.inert = !inspectorOpen;
  dismiss.hidden = document.body.classList.contains('painting') || (!expanded && !inspectorOpen);
}

dismiss.addEventListener('click', () => {
  if (!modelPanel.inert) toggle.click();
  if (!inspector.inert) document.getElementById('btnDeselect').click();
});

const menuObserver = new MutationObserver(updateMenus);
for (const element of [document.body, inspector]) {
  menuObserver.observe(element, { attributes: true, attributeFilter: ['class'] });
}
new ResizeObserver(() => {
  const height = dock.offsetHeight;
  if (height) document.documentElement.style.setProperty('--viewer-dock-height', height + 'px');
}).observe(dock);
updateMenus();

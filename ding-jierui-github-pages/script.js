const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
const tabs = [...document.querySelectorAll('.research-tab')];
function activateTab(tab, focus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    item.classList.toggle('selected', selected);
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); activateTab(tabs[next], true); }
  });
});
const narrow = window.matchMedia('(max-width: 720px)');
function orientTabs() {
  document.querySelector('.research-navigation').setAttribute('aria-orientation', narrow.matches ? 'horizontal' : 'vertical');
  if (!narrow.matches) { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
}
orientTabs();
narrow.addEventListener('change', orientTabs);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.focus();
  }
});
if ('IntersectionObserver' in window) {
  const links = [...navigation.querySelectorAll('a')];
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      }
    });
  }, {rootMargin:'-15% 0px -65% 0px',threshold:0});
  document.querySelectorAll('section[id]').forEach(section => activeObserver.observe(section));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.add('visible'); revealObserver.unobserve(entry.target);}});
    }, {threshold:.08});
    document.querySelectorAll('.section-heading,.research-layout,.journey-layout,.award-list,.interest-grid,.future-layout').forEach(element => {
      element.classList.add('reveal-ready'); revealObserver.observe(element);
    });
  }
}

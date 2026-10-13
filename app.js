(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const setMenu = (open) => {
    menu?.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    if (open) nav?.querySelector('a')?.focus();
  };
  menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav?.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { setMenu(false); menu.focus(); }
    if (event.key === 'Tab' && menu?.getAttribute('aria-expanded') === 'true') {
      const links = [...nav.querySelectorAll('a')];
      if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); menu.focus(); }
      else if (!event.shiftKey && document.activeElement === menu) { event.preventDefault(); links[0]?.focus(); }
      else if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); menu.focus(); }
      else if (event.shiftKey && document.activeElement === menu) { event.preventDefault(); links.at(-1)?.focus(); }
    }
  });
  const desktop = matchMedia('(min-width:901px)');
  desktop.addEventListener('change', () => { if (desktop.matches) setMenu(false); });
  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('#experience-grid .experience')];
  const status = document.querySelector('#experience-status');
  const messages = {featured:'Three ways to start exploring Mexico with Devocean.',beginner:'First experiences and snorkelling — talk to us about the right introduction.',certified:'Guided experiences for certified divers. Requirements vary by trip.',technical:'Specialist experiences — appropriate certification and experience are required.'};
  function filterExperience(value) {
    filters.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === value)));
    cards.forEach((card, i) => { card.hidden = value === 'featured' ? i > 2 : card.dataset.audience !== value; });
    if (status) status.textContent = messages[value];
  }
  filters.forEach(b => b.addEventListener('click', () => filterExperience(b.dataset.filter)));
  if (filters.length) filterExperience('featured');

  const form = document.querySelector('#enquiry-form');
  let enquiry = '';
  if (form) {
    const requested = new URLSearchParams(location.search).get('experience');
    const select = form.elements.experience;
    if (requested && requested.length <= 140) {
      if (![...select.options].some(o => o.value === requested)) select.add(new Option(requested, requested));
      select.value = requested;
    }
    const date = new Date();
    const today = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
    form.elements.date.min = today;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const f = new FormData(form);
      const name = String(f.get('name')).trim();
      const message = String(f.get('message')).trim();
      if (!name || !message) { (name ? form.elements.message : form.elements.name).focus(); return; }
      enquiry = `Hello Devocean Divers,\n\nI would like to plan a diving experience.\n\nName: ${name}\nEmail: ${f.get('email')}\nDate: ${f.get('date') || 'Flexible / to confirm'}\nGroup: ${f.get('divers')}\nExperience: ${f.get('experience')}\nCertification level: ${f.get('level')}\n\n${message}\n\nPlease confirm availability, full pricing and booking conditions. Thank you!`;
      document.querySelector('#send-email').href = `mailto:devoceandivers.mexico@gmail.com?subject=${encodeURIComponent('Dive enquiry — '+f.get('experience'))}&body=${encodeURIComponent(enquiry)}`;
      document.querySelector('#send-whatsapp').href = 'https://wa.me/529843142681?text='+encodeURIComponent(enquiry);
      const ready = document.querySelector('#enquiry-ready');
      ready.hidden = false;
      ready.focus();
      ready.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'center'});
    });
    form.addEventListener('input', () => { document.querySelector('#enquiry-ready').hidden = true; });
    form.querySelector('[type="submit"]').disabled = false;
    document.querySelector('#copy-enquiry')?.addEventListener('click', async () => {
      const result = document.querySelector('#copy-status');
      try { await navigator.clipboard.writeText(enquiry); result.textContent = 'Copied. Paste your enquiry into an email to Devocean.'; }
      catch { result.textContent = 'Copy is unavailable here. Choose Open email or Open WhatsApp instead.'; }
    });
  }
})();

(() => {
  const nav = document.getElementById('nav');
  const app = document.getElementById('app');
  const NAV = window.IECED_NAV || [];
  const DATA = window.IECED_DATA || {};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const get = key => NAV.find(item => item.key === key);
  const link = (item, active) => item ? `<a href="?page=${encodeURIComponent(item.key)}" data-page="${esc(item.key)}" class="${active === item.key ? 'active' : ''}">${esc(item.label)}</a>` : '';
  const group = (label, keys, active) => `<div class="nav-group"><button class="nav-trigger" type="button" aria-expanded="false">${esc(label)} <span aria-hidden="true">⌄</span></button><div class="nav-dropdown">${keys.map(key => link(get(key), active)).join('')}</div></div>`;

  function renderNav(active) {
    nav.innerHTML = [
      link(get('home'), active),
      group('Nosotros', ['nosotros','trayectoria','por-que-ieced','centros','staff','calidad','procesos-calidad','teleconsulta','app-ieced','premios','premios-ieced','investigacion','investigacion-cientifica','formacion-medica'], active),
      group('Servicios', ['servicios','atencion','consultas-medicas','obesidad','procedimientos-endoscopicos','preparaciones','preguntas-frecuentes','enfermedades'], active),
      group('Convenios', ['convenios','seguros-particulares','formularios-seguros','seguros-publicos'], active),
      group('Beneficios', ['beneficios','plan-suscripcion','supermaxi','fundasen'], active),
      link(get('podcast'), active), link(get('blog'), active), link(get('contacto'), active)
    ].join('');
  }

  function visualPanel(label = 'IECED') {
    return `<aside class="visual-panel" aria-label="Identidad institucional IECED"><div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div><div class="visual-core"><span>IECED</span><small>${esc(label)}</small></div><div class="visual-caption">Instituto Ecuatoriano de<br>Enfermedades Digestivas</div></aside>`;
  }

  function renderHome() {
    document.title = 'IECED | Instituto Ecuatoriano de Enfermedades Digestivas';
    app.innerHTML = `
      <section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><div class="eyebrow">Instituto Ecuatoriano de Enfermedades Digestivas</div><h1>Innovación y experiencia al cuidado de tu salud digestiva.</h1><p>Atención especializada en gastroenterología y endoscopía digestiva, con tecnología y experiencia médica.</p><div class="hero-actions"><a class="btn" href="?page=contacto">Agenda tu cita <span>↗</span></a><a class="textlink" href="?page=nosotros">Conoce IECED　→</a></div><div class="hero-proof"><span>Atención especializada</span><span>Tecnología médica</span><span>Guayaquil · Ecuador</span></div></div>${visualPanel('Salud digestiva')}</div></section>
      <section class="section"><div class="wrap intro-grid"><div><div class="eyebrow">Conócenos</div><h2>Un instituto enfocado en la salud digestiva.</h2></div><div><p>IECED está especializado en el diagnóstico, tratamiento y seguimiento de enfermedades digestivas y endoscópicas. Su propuesta integra profesionales de distintas áreas de la gastroenterología y tecnología aplicada a la atención médica.</p><a class="textlink" href="?page=nosotros">Más sobre nosotros　→</a></div></div></section>
      <section class="section soft"><div class="wrap"><div class="section-head"><div class="eyebrow">Áreas de atención</div><h2>Servicios especializados</h2><p>Consulta los servicios y procedimientos disponibles en IECED.</p></div><div class="service-grid">${[['Consultas médicas','consultas-medicas','Atención especializada y seguimiento.'],['Procedimientos endoscópicos','procedimientos-endoscopicos','Diagnóstico y tratamiento endoscópico.'],['Obesidad','obesidad','Opciones de atención para el control del peso.'],['Preparaciones','preparaciones','Indicaciones previas a procedimientos.'],['Preguntas frecuentes','preguntas-frecuentes','Información para pacientes.'],['Enfermedades digestivas','enfermedades','Conoce enfermedades y síntomas gastrointestinales.']].map((x,i)=>`<a class="service-card" href="?page=${x[1]}"><span class="service-number">0${i+1}</span><h3>${x[0]}</h3><p>${x[2]}</p><span class="service-arrow">↗</span></a>`).join('')}</div></div></section>
      <section class="section"><div class="wrap feature-grid"><div><div class="eyebrow">Tecnología e innovación</div><h2>Experiencia médica respaldada por innovación.</h2><p>IECED comunica el uso de tecnología avanzada y el desarrollo de herramientas de inteligencia artificial aplicadas a procedimientos como colangioscopía y ecoendoscopía.</p><a class="textlink" href="?page=por-que-ieced">¿Por qué IECED?　→</a></div><div class="feature-stat"><strong>IECED</strong><span>Instituto Ecuatoriano de<br>Enfermedades Digestivas</span><i>Atención · Innovación · Calidad</i></div></div></section>
      <section class="orange-band"><div class="wrap bandinner"><div><h2>¿Necesitas información o deseas agendar una cita?</h2><p>Comunícate con nuestro equipo de atención.</p></div><a class="btn btn-white" href="?page=contacto">Contáctanos　↗</a></div></section>`;
  }

  function renderPage(key) {
    const data = DATA[key];
    if (!data) return renderHome();
    document.title = `${data.title || 'IECED'} | IECED`;
    const paragraphs = (data.body || []).map(p => `<p>${esc(p)}</p>`).join('');
    const pending = data.needs_source ? `<div class="notice"><b>Contenido pendiente de validación:</b> este apartado figura en la navegación institucional, pero no se encontró su contenido completo en el material disponible. No se ha inventado información. Se debe incorporar el texto oficial antes de publicar esta sección como definitiva.</div>` : '';
    const contact = key === 'contacto' ? `<div class="contact-grid"><a class="contact-item" href="tel:+59342109180"><b>Teléfono</b>04 2 109180</a><a class="contact-item" href="https://wa.me/593986637750" target="_blank" rel="noopener"><b>WhatsApp</b>098 663 7750</a><a class="contact-item" href="mailto:callcenter1@ieced.ec"><b>Correo electrónico</b>callcenter1@ieced.ec</a><div class="contact-item"><b>Ubicación</b>Guayaquil, Ecuador</div></div>` : '';
    app.innerHTML = `<section class="page-hero"><div class="wrap"><div class="crumb"><a href="?page=home">Inicio</a><span>/</span>${esc(data.eyebrow || 'IECED')}</div><div class="eyebrow">${esc(data.eyebrow || 'IECED')}</div><h1>${esc(data.title || 'IECED')}</h1>${data.intro ? `<p>${esc(data.intro)}</p>` : ''}</div></section><section class="page-content"><div class="wrap page-layout"><article class="page-copy">${paragraphs}${pending}${contact}<a class="btn" href="?page=contacto">Contáctanos <span>↗</span></a></article>${visualPanel(data.eyebrow || 'IECED')}</div></section>`;
  }

  function render() {
    const requested = new URLSearchParams(location.search).get('page') || 'home';
    const key = requested === 'inicio' ? 'home' : requested;
    renderNav(key);
    document.querySelector('.nav')?.classList.remove('open');
    document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
    if (key === 'home' || !DATA[key]) renderHome(); else renderPage(key);
  }

  document.addEventListener('click', event => {
    const trigger = event.target.closest('.nav-trigger');
    if (trigger) {
      const parent = trigger.closest('.nav-group');
      document.querySelectorAll('.nav-group').forEach(item => { if (item !== parent) { item.classList.remove('expanded'); item.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false'); } });
      const expanded = parent.classList.toggle('expanded');
      trigger.setAttribute('aria-expanded', String(expanded));
      return;
    }
    const anchor = event.target.closest('a[href^="?page="]');
    if (anchor) {
      event.preventDefault();
      history.pushState({}, '', anchor.getAttribute('href'));
      render();
      window.scrollTo({top:0, behavior:'smooth'});
    }
  });
  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    const menu = document.querySelector('.nav');
    const open = menu.classList.toggle('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', String(open));
  });
  window.addEventListener('popstate', render);
  render();
})();

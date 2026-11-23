(() => {
  'use strict';
  const nav = document.getElementById('nav');
  const app = document.getElementById('app');
  const NAV = window.IECED_NAV || [];
  const DATA = window.IECED_DATA || {};
  const ui = {
    es: {appointment:'Agendamiento',home:'Inicio',about:'Nosotros',services:'Servicios',agreements:'Convenios',benefits:'Beneficios',podcast:'Podcast IECED',blog:'Blog',contact:'Contacto',explore:'Explora',footerTag:'El futuro del cuidado de tu salud digestiva ya está aquí.',crumbHome:'Inicio',contactCta:'Contáctanos',missingTitle:'Contenido por completar',missing:'Este apartado está presente en la navegación institucional, pero el respaldo disponible no contiene el texto completo de esta página. Se ha conservado el apartado y su ruta; el contenido oficial podrá incorporarse cuando se facilite.',homeEyebrow:'Tu salud al cuidado de los mejores',homeTitle:'El futuro del cuidado de tu salud digestiva ya está aquí.',homeIntro:'IECED, con los mejores gastroenterólogos de Guayaquil, integra experiencia médica, innovación y tecnología avanzada para el cuidado de la salud digestiva.',awards:'Premiados y reconocidos internacionalmente',awardsText:'Por las investigaciones y avances médicos logrados de la mano de excelentes estándares de calidad y una gestión de mejora continua, hemos logrado el reconocimiento internacional.',ai:'Pioneros en el uso de Inteligencia Artificial en procedimientos endoscópicos',aiText:'Somos pioneros en el Ecuador por el desarrollo y uso de inteligencia artificial en Colangioscopía y Ecoendoscopía. Contamos con tecnología de punta y con gastroenterólogos de larga trayectoria internacional.',servicesTitle:'Especializados en tratamientos gastroenterológicos y endoscópicos',servicesIntro:'En IECED, no solo tratamos enfermedades gastrointestinales, creamos historias de éxito.',servicesBody:'Descubre el camino hacia una vida digestiva más saludable. Estamos en Guayaquil, Quito, Santo Domingo, Manta y Milagro.',procedures:'Procedimientos avanzados',centres:'Centros avalados de IECED',staff:'Gastroenterólogos y Endoscopistas',benefitTitle:'Los mejores descuentos del año',benefitText:'Asegura tu atención médica online o presencial a través de la APP IECED en cualquier dispositivo móvil.',book:'Agenda tu cita',more:'Ver más',learn:'Conoce IECED',ready:'¿Necesitas información o deseas agendar una cita?',readyText:'Comunícate con nuestro equipo de atención.',readMore:'Conocer más',blogIntro:'Noticias e información sobre salud digestiva.',readArticle:'Ver artículo',articleUnavailable:'El respaldo disponible conserva el título y la fecha de esta publicación, pero no incluye el texto íntegro. No se ha reconstruido ni inventado el contenido.',formTitle:'Escríbenos',formName:'Nombres',formSurname:'Apellidos',formEmail:'Correo electrónico',formPhone:'Teléfono',formSubject:'Asunto',formMessage:'Mensaje',formPrivacy:'Acepto el tratamiento de mis datos para gestionar esta solicitud.',formSend:'Enviar solicitud',formSelect:'Selecciona un asunto',formThanks:'Al enviar, tu solicitud será remitida al correo de atención de IECED mediante el servicio de formularios indicado.'},
    en: {appointment:'Book an appointment',home:'Home',about:'About us',services:'Services',agreements:'Insurance plans',benefits:'Benefits',podcast:'IECED Podcast',blog:'Blog',contact:'Contact',explore:'Explore',footerTag:'The future of your digestive health care is here.',crumbHome:'Home',contactCta:'Contact us',missingTitle:'Content to be completed',missing:'This section appears in the institutional navigation, but the available backup does not include the full text of this page. The section and its route have been preserved; the official content can be added when supplied.',homeEyebrow:'Your health in the care of the best',homeTitle:'The future of your digestive health care is here.',homeIntro:'IECED brings together leading gastroenterologists in Guayaquil, medical experience, innovation and advanced technology for digestive health care.',awards:'Internationally awarded and recognized',awardsText:'Through medical research and advances, high quality standards and continuous improvement, IECED has achieved international recognition.',ai:'Pioneers in the use of Artificial Intelligence in endoscopic procedures',aiText:'We are pioneers in Ecuador in developing and using artificial intelligence in cholangioscopy and endoscopic ultrasound. We offer advanced technology and experienced gastroenterologists.',servicesTitle:'Specialized gastroenterology and endoscopic treatments',servicesIntro:'At IECED, we do more than treat gastrointestinal diseases: we create success stories.',servicesBody:'Discover the path to a healthier digestive life. We are located in Guayaquil, Quito, Santo Domingo, Manta and Milagro.',procedures:'Advanced procedures',centres:'IECED accredited centers',staff:'Gastroenterologists and Endoscopists',benefitTitle:'The best discounts of the year',benefitText:'Secure in-person or online medical care through the IECED app on any mobile device.',book:'Book an appointment',more:'Learn more',learn:'Discover IECED',ready:'Need information or want to book an appointment?',readyText:'Get in touch with our care team.',readMore:'Read more',blogIntro:'News and information about digestive health.',readArticle:'Read article',articleUnavailable:'The available backup preserves the title and date of this publication, but does not include the full text. The content has not been reconstructed or invented.',formTitle:'Write to us',formName:'First name',formSurname:'Last name',formEmail:'Email address',formPhone:'Phone',formSubject:'Subject',formMessage:'Message',formPrivacy:'I agree to the processing of my data to manage this request.',formSend:'Send request',formSelect:'Select a subject',formThanks:'When submitted, your request will be sent to IECED’s contact email through the configured form service.'}
  };
  const labels = {
    'Nuestra Trayectoria':'Our History','¿Por qué IECED?':'Why IECED?','Centros avalados de IECED':'IECED Accredited Centers','Staff Médico':'Medical Staff','Procesos de Calidad IECED':'IECED Quality Processes','Teleconsulta':'Teleconsultation','APP IECED':'IECED App','Premios y reconocimientos':'Awards and Recognition','Premios IECED':'IECED Awards','Investigación y Formación':'Research and Training','Investigación científica':'Scientific Research','Formación médica':'Medical Training','Atención':'Patient Care','Consultas médicas':'Medical Consultations','No más obesidad':'Weight Management','Procedimientos endoscópicos':'Endoscopic Procedures','Preparaciones':'Procedure Preparations','Preguntas frecuentes':'Frequently Asked Questions','Enfermedades gastrointestinales y sus síntomas':'Gastrointestinal Diseases and Symptoms','Seguros particulares':'Private Insurance','Formularios de seguro particulares':'Private Insurance Forms','Seguros públicos':'Public Insurance','Plan de Suscripción':'Membership Plan','Beneficios Supermaxi en IECED':'Supermaxi Benefits at IECED','Calidad':'Quality','Convenios':'Insurance Agreements','Beneficios':'Benefits','Seguros públicos':'Public Insurance','Fundasen':'Fundasen','Preparaciones':'Procedure Preparations','Servicios':'Services','Atención':'Patient Care','Teleconsulta':'Teleconsultation','Nuestra Trayectoria':'Our History','Investigación y Formación':'Research and Training','Investigación científica':'Scientific Research','Formación médica':'Medical Training','Endoscopía Digestiva':'Digestive Endoscopy','Consulta Médica':'Medical Consultation','Colonoscopia':'Colonoscopy','Ecoendoscopía diagnóstica':'Diagnostic Endoscopic Ultrasound','Balón Gástrico':'Gastric Balloon','Manometría':'Manometry','POEM (Miotomía Endoscópica Per Oral)':'POEM (Peroral Endoscopic Myotomy)','CPRE':'ERCP'
  };
  const pageEnglish = {
    'nosotros':['Where innovation meets commitment.','We create success stories. Discover the path to a healthier digestive life with our team of gastroenterology and digestive endoscopy professionals.',['Specialized in the diagnosis, treatment and follow-up of digestive and endoscopic diseases. Our services range from prevention to advanced treatment using cutting-edge technology.','We have an interdisciplinary team of experienced professionals in different areas of gastroenterology, offering comfort, precision and safety to patients.','Our committed team includes qualified physicians with strong academic backgrounds. At IECED and its national locations, patients benefit from technological advances in gastroenterological diagnosis and endoscopic treatment.']],
    'por-que-ieced':['Why IECED?','At IECED, we combine cutting-edge technology with the experience of our medical team to provide gastroenterology care.',['Specialists with extensive national and international experience, recognized for their innovation and scientific contribution to digestive health.','We are pioneers in Ecuador in the development and use of artificial intelligence in cholangioscopy and endoscopic ultrasound.','We offer advanced technology and gastroenterologists with extensive international experience.']],
    'consultas-medicas':['Medical consultations','Leading specialists provide medical consultations and solutions for digestive discomfort.',['Many symptoms that can disrupt your lifestyle are related to the digestive system. Medical consultations are therefore important for prevention, early detection and disease monitoring.','At the Ecuadorian Institute of Digestive Diseases — IECED, we are here to help. Contact us to ask about in-person consultations or teleconsultations.','General medicine consultations and consultations for endoscopic sleeve gastroplasty are also available.']],
    'obesidad':['Weight management','Effective treatments for weight management.',['At IECED, highly trained physicians help people with overweight or obesity improve their health.','To learn about the right treatment, schedule an appointment with a specialist.']],
    'procedimientos-endoscopicos':['Endoscopic procedures','Gastroenterology and endoscopic procedures supported by advanced medical technology.',['IECED offers endoscopic procedures and technology for the diagnosis and treatment of digestive diseases.','Procedures and advances described in the institutional information include digestive endoscopy, colonoscopy, endoscopic ultrasound, confocal endomicroscopy, pH monitoring and impedance monitoring.']],
    'enfermedades':['Gastrointestinal diseases and symptoms','What are the diseases and symptoms associated with each part of the digestive system?',['The institutional information organizes diseases and symptoms by areas of the digestive system.','Published topics include food allergies, digestive disorders caused by anti-inflammatory medicines, anemia, acute diarrhea, traveler’s diarrhea, functional abdominal pain, constipation, lactose intolerance and gastroesophageal reflux.']],
    'app-ieced':['Enjoy peace of mind!','Secure in-person or online medical care through the IECED app on any mobile device.',['Book an appointment with your preferred physician.','Schedule medical appointments in less than five minutes.','View and download your results.','Pay for in-person and online appointments.','Access exclusive benefits through the IECED app, including discounts on ultrasounds, medical consultations, procedures and laboratory tests.']],
    'contacto':['Contact us','Write to us. The future of your digestive health care is here.',['Guayaquil: 04 2 109180','WhatsApp: 098 663 7750','Email: callcenter1@ieced.ec','Address: Next to Omni Hospital, Av. Abel R. Castillo S/N and Av. Juan Tanca Marengo, Torre Médica I mezzanine 3 and Torre Médica II, 4th floor, offices 405–406.']],
    'centros':['IECED accredited centers','Specialized centers associated with the IECED network.',['Ecuadorian Institute of Digestive Diseases.','EndoscopyNet, a specialized gastroenterology center.','The institutional website lists centers in Guayaquil, Quito, Santo Domingo and Manta.']],
    'staff':['Gastroenterologists and Endoscopists','At IECED, we are redefining gastroenterology care.',['We combine cutting-edge technology with the experience of our medical team to provide gastroenterology care. Our specialists have extensive national and international experience and are recognized for their innovation and scientific contributions to digestive health.']],
    'blog':['IECED Blog','News and information about digestive health.',['November 17: World Pancreatic Cancer Day.','Enjoy the holidays with good digestion!','Colitis: when the colon becomes inflamed.','Digestive care in older age.','How to maintain good digestion?']],
    'premios-ieced':['IECED Awards','Internationally awarded and recognized.',['Through medical research, advances, high quality standards and continuous improvement, IECED has achieved international recognition.','The institutional website highlights recognition as one of the world’s leading endoscopic ultrasound (EUS) centers, citing EURO-EUS 2023.']],
    'preguntas-frecuentes':['Frequently asked questions','Answers to common questions about gastroenterology and procedures.',['What does a gastroenterologist do? A gastroenterologist specializes in the digestive system and provides clinical assessment and endoscopic treatment of gastrointestinal conditions.','When should you see a gastroenterologist? If you experience digestive symptoms such as heartburn, reflux, diarrhea, constipation or abdominal pain.','What tests may a gastroenterologist request? Imaging tests, functional tests and endoscopic procedures, including ultrasound, abdominal CT or MRI, capsule endoscopy, laboratory tests, manometry, pH monitoring, colonoscopy, upper digestive endoscopy and endoscopic ultrasound.','What is an endoscopy? A procedure that allows visualization of the esophagus, stomach and the first part of the small intestine.','What is an endoscopic ultrasound? A test combining endoscopy and ultrasound to examine structures of the gastrointestinal tract.']],
    'seguros-particulares':['Private insurance agreements','IECED has agreements with health insurance providers nationwide.',['The institutional website lists agreements with Asisken, Ecuasanitas, Saludsa, Humana, Sweaden, Mediken, Confiamed, Best Doctors, VUMI, BMI Internacional, Bupa Ecuador, Liberty Seguros, Latina Seguros and Plan Vital.','Commercial Department: jefaturacomercial@ieced.ec · comercial@ieced.ec · 04 2 109180 Ext. 638.']],
    'formularios-seguros':['Private insurance forms','Forms published for private insurance procedures.',['Asisken: pre- and post-authorization request for medical procedures; medical expense reimbursement request.','Best Doctors: claim form.','BMI: corporate and individual medical expense reimbursement forms.','BUPA: claim form.','Ecuasanitas: medical expense and/or personal accident claim form; service request.','Humana: medical care reimbursement request.','Medec: diagnosis and/or reimbursement request.','Mediken: expense reimbursement form.','Plan Vital: reimbursement forms.']],
    'procesos-calidad':['IECED Quality Processes','Institutional processes focused on patient safety and continuous improvement.',['Correct patient identification: two identification methods are used — a wristband with full name, ID number and procedure, and verification of the name at the head of the stretcher.','Preventive maintenance of biomedical equipment: an annual schedule is coordinated with suppliers.','Quality management and continuous improvement: indicators, customer satisfaction and improvement opportunities are measured monthly.','High-risk medications and dangerous abbreviations: abbreviations accepted by the Ministry of Public Health are reviewed and high-risk medications are identified.','Adverse event reporting, biosafety, fall prevention, and cleaning and disinfection of the hospital environment and medical equipment.']],
    'seguros-publicos':['Public insurance','Agreement with the Ecuadorian Social Security Institute (IESS).',['IECED reports that it has agreements with public insurance providers. Patients referred by the IESS are treated with approved orders.','To schedule an appointment or procedure through the IESS, patients may be referred and scheduled by calling 140 or using approved medical care orders.']],
    'supermaxi':['Supermaxi benefits at IECED','Secure in-person or online medical care at authorized centers nationwide and access exclusive benefits by presenting your Supermaxi card.',['Medical consultations: 20% discount on appointments with gastroenterology and pulmonology specialists.','Ultrasounds: 30% discount.','Basic procedures: 30% discount on diagnostic endoscopies and diagnostic colonoscopies.','Advanced procedures: 15% discount on diagnostic endoscopic ultrasound, 3D anorectal endoscopic ultrasound, manometry, pH and impedance monitoring, confocal endomicroscopy, electronic chromoendoscopy, gastrostomy, FibroScan, capsule endoscopy, gastric balloon, choledochoscopy, breath tests, POEM and ERCP.','Customer service: 04 2109180.']],
    'preparaciones':['IECED Procedure Preparations','Download preparation instructions for procedures.',['To ensure effective procedure results, carefully read and follow the recommendations describing how to prepare for each endoscopic procedure.','Endoscopy and colonoscopy: Travadpik Oral, Izinova, Nulytely and Neolax.','Other procedures with published preparation instructions include ERCP, gastric balloon, 24-hour pH and impedance monitoring, POEM, cyanoacrylate ECO COILS, capsule endoscopy, diagnostic endoscopic ultrasound with fine-needle aspiration, esophageal variceal ligation, manometry, FibroScan, spirometry and bronchoscopy.']],
    'podcast':['IECED Podcast','Podcasts about medicine for a general audience.',['Medical Director: Dr. Carlos A. Robles.','Medical Coordinator: Dr. Juan M. Alcívar.','Guests: physicians specializing in gastroenterology and digestive endoscopy.','Guests mentioned on the institutional website include Dr. Gabriela Lara Cifuentes, Dr. Giselle Jácome Naranjo and Dr. Franklin Anchundia.']]
  };
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let lang = 'es'; try { lang = localStorage.getItem('ieced-lang') || 'es'; } catch(e) {}
  if (!['es','en'].includes(lang)) lang = 'es';
  const t = key => ui[lang][key] || ui.es[key] || key;
  const label = key => { const item = NAV.find(x => x.key === key); if (!item) return key; return lang === 'en' ? (labels[item.label] || ({Inicio:'Home',Nosotros:'About us',Servicios:'Services',Convenios:'Insurance plans',Beneficios:'Benefits',Contacto:'Contact','Staff Médico':'Medical Staff',Blog:'Blog'}[item.label]) || item.label) : item.label; };
  const get = key => NAV.find(item => item.key === key);
  const href = key => `?page=${encodeURIComponent(key)}`;
  const link = (key, active) => `<a href="${href(key)}" data-page="${esc(key)}" class="${active === key ? 'active' : ''}">${esc(label(key))}</a>`;
  const groups = [
    {key:'about', title:'Nosotros', rows:[
      {title:'Nuestra Trayectoria', keys:['por-que-ieced','centros','staff']},
      {title:'Calidad', keys:['procesos-calidad']},
      {title:'Teleconsulta', keys:['app-ieced']},
      {title:'Premios y reconocimientos', keys:['premios-ieced']},
      {title:'Investigación y Formación', external:[['Investigación científica','https://pentaxcenter.com/'],['Formación médica','https://pentaxcenter.com/']]}
    ]},
    {key:'services', title:'Servicios', rows:[
      {title:'Atención', keys:['consultas-medicas','service-consulta-medica','procedimientos-endoscopicos','service-endoscopia-digestiva','service-colonoscopia','service-ecoendoscopia','service-balon-gastrico','service-manometria','service-poem','service-cpre','obesidad','preparaciones','preguntas-frecuentes','enfermedades']},
      {title:'Convenios', keys:['seguros-particulares','formularios-seguros','seguros-publicos']},
      {title:'Beneficios', items:[{key:'app-ieced',label:'Plan de Suscripción'},{key:'supermaxi',label:'Beneficios Supermaxi en IECED'}], external:[['Fundasen','https://www.fundasen.com.ec/']]}
    ]}
  ];
  const BLOG_POSTS = [
    {slug:'dia-mundial-cancer-pancreas',title:'17 de noviembre: Día Mundial del Cáncer de Páncreas',subtitle:'Conciencia y prevención frente al cáncer más agresivo del mundo',titleEn:'November 17: World Pancreatic Cancer Day',subtitleEn:'Awareness and prevention of one of the world’s most aggressive cancers',date:'14 Nov 2024',category:'Noticia · Páncreas · Salud'},
    {slug:'fiestas-buena-digestion',title:'¡VIVAN LAS FIESTAS CON BUENA DIGESTIÓN!',subtitle:'Conozca cómo disfrutar de las fiestas de temporada sin comprometer la salud digestiva',titleEn:'Enjoy the holidays with good digestion!',subtitleEn:'How to enjoy the season without compromising digestive health',date:'7 Nov 2024',category:'Hígado · Noticia · Salud'},
    {slug:'colitis-colon-inflama',title:'Colitis, cuando el colon se inflama',titleEn:'Colitis: when the colon becomes inflamed',date:'5 Sep 2024',category:'Colon · Colonoscopia · Noticia · Salud'},
    {slug:'cuidado-digestivo-edad-dorada',title:'CUIDADO DIGESTIVO EN LA EDAD DORADA',titleEn:'Digestive care in older age',date:'16 Jul 2024',category:'Noticia · Salud'},
    {slug:'mantener-buena-digestion',title:'¿Cómo mantener una buena digestión?',titleEn:'How to maintain good digestion?',date:'26 Mar 2024',category:'Hígado · Noticia · Salud'},
    {slug:'disminuir-riesgo-enfermedades-digestivas',title:'¿Cómo disminuir el riesgo de sufrir enfermedades digestivas?',titleEn:'How to reduce the risk of digestive diseases',date:'9 Feb 2024',category:'Hígado · Noticia · Salud'},
    {slug:'consejos-mejorar-salud-digestiva',title:'3 consejos para mejorar tu salud digestiva',titleEn:'3 tips to improve your digestive health',date:'19 Jan 2024',category:'Hígado · Noticia · Salud'},
    {slug:'estres-sistema-digestivo',title:'¿Cómo afecta el estrés al sistema digestivo?',titleEn:'How does stress affect the digestive system?',date:'10 Jan 2024',category:'Noticia · Salud'},
    {slug:'enfermedades-digestivas-comunes',title:'¿Cuáles son las enfermedades digestivas más comunes?',titleEn:'What are the most common digestive diseases?',date:'5 Jan 2024',category:'Cáncer · Hígado · Noticia · Salud'},
    {slug:'microbiota-intestinal-salud',title:'Microbiota intestinal ¿cómo influye en tu salud?',titleEn:'Gut microbiota: how does it affect your health?',date:'15 Dec 2023',category:'Noticia · Salud'}
  ];
  function renderBlog() {
    const title = lang==='en' ? 'IECED Blog' : 'Blog IECED';
    document.title = `${title} | IECED`;
    const cards = BLOG_POSTS.map(post=>`<article class="blog-card"><div class="blog-card-meta"><span>${esc(post.date)}</span><span>${esc(post.category)}</span></div><h2>${esc(lang==='en'?(post.titleEn||post.title):post.title)}</h2>${(lang==='en'?post.subtitleEn:post.subtitle)?`<p>${esc(lang==='en'?post.subtitleEn:post.subtitle)}</p>`:''}<a class="text-link" href="?page=blog-articulo&post=${encodeURIComponent(post.slug)}">${esc(t('readArticle'))} →</a></article>`).join('');
    app.innerHTML = `<section class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="${href('home')}">${esc(t('crumbHome'))}</a><span>›</span>${esc(title)}</div><div class="eyebrow">IECED · ${esc(t('blog'))}</div><h1>${esc(title)}</h1><p>${esc(t('blogIntro'))}</p></div></section><section class="page-content"><div class="wrap"><div class="blog-grid">${cards}</div><p class="source-note">${lang==='en'?'This list reproduces post titles and dates visible in the available institutional archive. Full article texts were not included in the supplied capture.':'La lista reproduce los títulos y fechas visibles en el archivo institucional disponible. La captura facilitada no incluía los textos íntegros de los artículos.'}</p></div></section>`;
    reveal();
  }
  function renderBlogArticle(slug) {
    const post = BLOG_POSTS.find(item=>item.slug===slug);
    if (!post) { renderBlog(); return; }
    const postTitle = lang==='en'?(post.titleEn||post.title):post.title;
    document.title = `${postTitle} | IECED`;
    app.innerHTML = `<section class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="${href('home')}">${esc(t('crumbHome'))}</a><span>›</span><a href="${href('blog')}">${esc(t('blog'))}</a><span>›</span>${esc(postTitle)}</div><div class="eyebrow">${esc(post.category)} · ${esc(post.date)}</div><h1>${esc(postTitle)}</h1>${(lang==='en'?post.subtitleEn:post.subtitle)?`<p>${esc(lang==='en'?post.subtitleEn:post.subtitle)}</p>`:''}</div></section><section class="page-content"><div class="wrap article-layout"><article class="page-copy"><div class="notice"><strong>${esc(t('missingTitle'))}</strong><p>${esc(t('articleUnavailable'))}</p></div><a class="btn btn-outline" href="${href('blog')}">← ${esc(t('blog'))}</a></article>${brandPanel('BLOG IECED')}</div></section>`;
    reveal();
  }
  function renderContactForm() {
    const subjects = lang==='en' ? ['Medical appointment','Procedure quotation','Discount request','Insurance agreement','Free talks','Marketing','Public relations','Work with us','Other'] : ['Agendar cita médica','Cotizar procedimiento','Solicitar descuento','Convenio con aseguradora','Charlas gratuitas','Marketing','Relaciones públicas','Trabaja con nosotros','Otro'];
    return `<section class="contact-form-section"><h2>${esc(t('formTitle'))}</h2><p>${esc(t('formThanks'))}</p><form class="contact-form" action="https://formsubmit.co/callcenter1@ieced.ec" method="POST"><input type="hidden" name="_subject" value="Nueva solicitud desde la web IECED"><input type="hidden" name="_template" value="table"><input type="text" name="_honey" class="form-honeypot" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="form-fields"><label>${esc(t('formName'))} *<input name="nombres" autocomplete="given-name" required maxlength="80"></label><label>${esc(t('formSurname'))} *<input name="apellidos" autocomplete="family-name" required maxlength="80"></label><label>${esc(t('formEmail'))} *<input type="email" name="email" autocomplete="email" required maxlength="160"></label><label>${esc(t('formPhone'))} *<input type="tel" name="telefono" autocomplete="tel" required inputmode="tel" maxlength="30"></label><label class="form-wide">${esc(t('formSubject'))} *<select name="asunto" required><option value="">${esc(t('formSelect'))}</option>${subjects.map(s=>`<option>${esc(s)}</option>`).join('')}</select></label><label class="form-wide">${esc(t('formMessage'))} *<textarea name="mensaje" required rows="5" maxlength="3000"></textarea></label></div><label class="privacy-check"><input type="checkbox" name="consentimiento" value="Aceptado" required><span>${esc(t('formPrivacy'))}</span></label><button class="btn" type="submit">${esc(t('formSend'))} ↗</button></form><small class="form-config-note">${lang==='en'?'The form provider may request one-time activation by the recipient email before accepting the first submission.':'El proveedor del formulario puede solicitar una activación única desde el correo destinatario antes de aceptar el primer envío.'}</small></section>`;
  }

  function menuText(value) {
    if (lang!=='en') return value;
    return ({
      'Nuestra Trayectoria':'Our History','Calidad':'Quality','Teleconsulta':'Teleconsultation',
      'Premios y reconocimientos':'Awards and Recognition','Investigación y Formación':'Research and Training',
      'Atención':'Patient Care','Convenios':'Insurance Agreements','Beneficios':'Benefits',
      'Investigación científica':'Scientific Research','Formación médica':'Medical Training','Fundasen':'Fundasen'
    })[value] || value;
  }
  function renderNav(active) {
    const menus = groups.map(g => {
      const rows = g.rows.map(row => {
        const internal = (row.keys || []).map(k => link(k,active)).join('') + (row.items || []).map(item => `<a href="${href(item.key)}" data-page="${esc(item.key)}" class="${active===item.key?'active':''}">${esc(menuText(item.label))}</a>`).join('');
        const external = (row.external || []).map(item => `<a href="${esc(item[1])}" target="_blank" rel="noopener noreferrer">${esc(menuText(item[0]))} ↗</a>`).join('');
        return `<section class="mega-row"><div class="mega-row-title">${esc(menuText(row.title))}</div><div class="mega-row-links">${internal}${external}</div></section>`;
      }).join('');
      const groupTitle = lang==='en' ? (g.key==='about'?'About us':'Services') : g.title;
      return `<div class="nav-group"><button class="nav-trigger" type="button" aria-expanded="false">${esc(groupTitle)}<span aria-hidden="true">⌄</span></button><div class="nav-dropdown mega-dropdown">${rows}</div></div>`;
    }).join('');
    nav.innerHTML = `${link('home',active)}${menus}${link('podcast',active)}${link('blog',active)}${link('contacto',active)}`;
  }
  function brandPanel(kicker='IECED') {
    return `<div class="brand-panel" aria-label="Identidad institucional IECED"><div class="panel-ring ring-a"></div><div class="panel-ring ring-b"></div><div class="panel-center"><img src="assets/logo-ieced.svg" alt="IECED"><span>${esc(kicker)}</span></div><div class="panel-foot">INSTITUTO ECUATORIANO DE<br>ENFERMEDADES DIGESTIVAS</div></div>`;
  }
  function serviceCard(title,key,description,n) {
    return `<a class="service-card" href="${href(key)}"><span class="service-index">${String(n).padStart(2,'0')}</span><h3>${esc(title)}</h3><p>${esc(description)}</p><span class="card-arrow">↗</span></a>`;
  }
  function renderHome() {
    document.title = 'IECED | Instituto Ecuatoriano de Enfermedades Digestivas';
    const isEn = lang==='en';
    const serviceItems = isEn
      ? [['Digestive Endoscopy','procedimientos-endoscopicos','Technology transforming digestive medicine.'],['Colonoscopy','procedimientos-endoscopicos','Early detection of abnormalities.'],['Gastric Balloon','obesidad','Learn about gastric balloon treatment.'],['Confocal Endomicroscopy','procedimientos-endoscopicos','Advanced endoscopic imaging.'],['Therapeutic Endoscopy','procedimientos-endoscopicos','Advanced digestive procedures.'],['Endoscopic Sleeve','obesidad','A treatment option for weight management.']]
      : [['Endoscopia Digestiva','procedimientos-endoscopicos','La tecnología que revoluciona la medicina digestiva.'],['Colonoscopia','procedimientos-endoscopicos','Detección temprana de anomalías en el crecimiento del colon.'],['Balón Gástrico','obesidad','Conoce el procedimiento y sus indicaciones.'],['Endomicroscopía confocal','procedimientos-endoscopicos','Tecnología de visualización avanzada.'],['Endoscopía terapéutica','procedimientos-endoscopicos','Procedimientos digestivos especializados.'],['Manga Gástrica Endoscópica','obesidad','Una alternativa para el tratamiento del sobrepeso.']];
    const doctors = ['Dr. Carlos Robles Medranda','Dra. Hannah Pitanga Lukashok','Dr. Juan Manuel Alcívar','Gastroenteróloga Raquel Del Valle'];
    const centres = ['Guayaquil','Quito','Santo Domingo','Manta','Milagro'];
    app.innerHTML = `
      <section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><div class="eyebrow">${isEn?'Your health in the care of the best':'Tu salud al cuidado de los mejores'}</div><h1>${isEn?'The future of your digestive health care is here':'El futuro del cuidado de tu salud digestiva ya está aquí'}</h1><p class="hero-lead">${isEn?'IECED, with leading gastroenterologists in Guayaquil, is nominated as one of the world’s leading Endoscopic Ultrasound (EUS) Centers.':'IECED, con los mejores gastroenterólogos de Guayaquil, nominado como uno de los mejores Centros Ultrasonido Endoscópico (EUS) de todo el mundo.'}</p><div class="hero-actions"><a class="btn" href="${href('consultas-medicas')}">${isEn?'Medical consultations':'Consultas médicas'} <span>↗</span></a><a class="text-link" href="${href('nosotros')}">${isEn?'Learn about IECED':'Conoce IECED'} →</a></div></div>${brandPanel('IECED · SALUD DIGESTIVA')}</div></section>

      <section class="section recognition"><div class="wrap recognition-grid"><div class="section-kicker">${isEn?'International recognition':'Premiados y reconocidos internacionalmente'}</div><div><h2>${isEn?'Awarded and internationally recognized':'Premiados y reconocidos internacionalmente'}</h2><p>${isEn?'Through medical research and advances, high quality standards and continuous improvement, IECED has achieved international recognition.':'Por las investigaciones y avances médicos logrados de la mano de excelentes estándares de calidad y una gestión de mejora continua, hemos logrado el reconocimiento internacional.'}</p><a class="text-link" href="${href('premios-ieced')}">${isEn?'Achievements':'LOGROS OBTENIDOS'} →</a></div></div></section>

      <section class="section innovation"><div class="wrap innovation-grid"><div class="innovation-mark"><div class="tech-orbit"><span>AI</span></div><small>IECED · INTELIGENCIA ARTIFICIAL</small></div><div><div class="eyebrow">${isEn?'Advanced technology':'Innovación médica'}</div><h2>${isEn?'Pioneers in the use of Artificial Intelligence in endoscopic procedures':'Pioneros en el uso de Inteligencia Artificial en procedimientos endoscópicos'}</h2><p>${isEn?'IECED is a pioneer in Ecuador in developing and using artificial intelligence in cholangioscopy and endoscopic ultrasound.':'Somos pioneros en el Ecuador por el desarrollo y uso de inteligencia artificial en Colangioscopía y Ecoendoscopía.'}</p><a class="text-link" href="${href('procedimientos-endoscopicos')}">${isEn?'Explore procedures':'Conoce nuestros procedimientos'} →</a></div></div></section>

      <section class="section services-section"><div class="wrap"><div class="section-heading"><div class="eyebrow">${isEn?'IECED services':'Servicios IECED'}</div><h2>${isEn?'Advanced care for digestive health':'El futuro del cuidado de tu salud digestiva ya está aquí'}</h2><p>${isEn?'Explore medical consultations, app-based care and advanced digestive procedures.':'Conoce nuestros servicios, agenda una consulta y accede a procedimientos especializados para el cuidado de tu salud digestiva.'}</p></div><div class="service-grid">${serviceItems.map((item,i)=>serviceCard(item[0],item[1],item[2],i+1)).join('')}</div><div class="center-link"><a class="btn btn-outline" href="${href('procedimientos-endoscopicos')}">${isEn?'All procedures':'Todos los procedimientos'} ↗</a></div></div></section>

      <section class="section proof-section"><div class="wrap benefits-grid"><div><div class="eyebrow">${isEn?'IECED App':'APP IECED · ¡Siempre seguro!'}</div><h2>${isEn?'Book your medical appointment through the IECED app':'Agenda tu cita médica con gastroenterólogos en Guayaquil presencialmente o por videoconsulta, mediante nuestra APP'}</h2><p>${isEn?'Schedule appointments, view results and manage payments from your mobile device.':'Asegura tu atención médica online o presencial a través de la APP IECED en cualquier dispositivo móvil.'}</p><ul class="check-list"><li>${isEn?'Book with your preferred physician':'Agenda con tu médico favorito'}</li><li>${isEn?'Appointments in less than five minutes':'Agendamiento de citas médicas en menos de 5 minutos'}</li><li>${isEn?'View and download your results':'Visualiza y descarga tus resultados'}</li><li>${isEn?'Pay for in-person or online appointments':'Pago de citas médicas presencial y online'}</li><li>${isEn?'Benefits for your family group':'Beneficios para núcleo familiar'}</li></ul><a class="text-link" href="${href('app-ieced')}">${isEn?'Discover the app':'Conoce la APP IECED'} →</a></div><div class="app-placeholder"><div class="phone-frame"><div class="phone-brand">IECED</div><div class="phone-line"></div><div class="phone-line short"></div><div class="phone-action"></div><div class="phone-line"></div><div class="phone-line short"></div></div><span>APP IECED</span></div></div></section>

      <section class="section"><div class="wrap"><div class="section-heading"><div class="eyebrow">${isEn?'Specialized care':'Atención especializada'}</div><h2>${isEn?'Medical consultations':'Consultas médicas'}</h2><p>${isEn?'Leading specialists help you understand digestive symptoms and find the appropriate care.':'Los mejores médicos en su especialidad te ayudarán con consultas médicas y la solución para tu malestar digestivo.'}</p></div><div class="service-grid"><a class="service-card" href="${href('consultas-medicas')}"><span class="service-index">01</span><h3>${isEn?'Gastroenterology':'Consultas con especialistas en gastroenterología'}</h3><p>${isEn?'In-person consultations and teleconsultations.':'Prevención, detección temprana y control de enfermedades digestivas.'}</p></a><a class="service-card" href="${href('consultas-medicas')}"><span class="service-index">02</span><h3>${isEn?'General medicine':'Consultas en medicina general'}</h3><p>${isEn?'Medical assessment and guidance.':'Atención médica desde los primeros síntomas.'}</p></a><a class="service-card" href="${href('obesidad')}"><span class="service-index">03</span><h3>${isEn?'Endoscopic sleeve consultation':'Consulta manga endoscópica'}</h3><p>${isEn?'Specialist care for weight management.':'Tratamientos para el control del sobrepeso y la obesidad.'}</p></a></div></div></section>

      <section class="cta-band"><div class="wrap cta-inner"><div><h2>${isEn?'Effective treatments for obesity':'Tratamientos efectivos para la obesidad'}</h2><p>${isEn?'Explore treatment options from $40.':'Adquiere tu plan desde $40.'}</p></div><a class="btn btn-white" href="${href('obesidad')}">${isEn?'Learn more':'Conoce más'} ↗</a></div></section>

      <section class="section proof-section"><div class="wrap proof-grid"><div><div class="eyebrow">IECED · EURO EUS</div><h2>${isEn?'Recognized as one of the world’s leading Endoscopic Ultrasound (EUS) Centers':'Reconocimiento como uno de los mejores Centros Ultrasonido Endoscópico (EUS) de todo el mundo'}</h2><p>${isEn?'IECED is recognized among the world’s leading EUS centers based on EURO-EUS. The institute highlights advanced equipment endorsed in Ecuador by the World Endoscopy Organization (WEO).':'El Instituto Ecuatoriano de Enfermedades Digestivas (IECED) siendo uno de los mejores centros EUS del mundo en base a la EURO EUS. Adicionalmente conocido como el centro gastroenterológico y endoscópico más avanzado de Latinoamérica, con equipos de última generación avalados en Ecuador por la Organización Mundial de Endoscopia (WEO).'}</p><a class="text-link" href="${href('premios-ieced')}">${isEn?'Learn more':'Conoce nuestros reconocimientos'} →</a></div><div class="proof-seal"><span>IECED</span><small>EURO EUS · WEO</small></div></div></section>

      <section class="section"><div class="wrap"><div class="section-heading"><div class="eyebrow">${isEn?'Our medical staff':'Staff médico'}</div><h2>${isEn?'Gastroenterologists and Endoscopists':'Gastroenterólogos y Endoscopistas'}</h2><p>${isEn?'Specialists with national and international experience, recognized for their scientific contribution to digestive health.':'En IECED, estamos redefiniendo el cuidado gastroenterológico. Combinamos tecnología de vanguardia con la experiencia de nuestro equipo médico para ofrecer el mejor cuidado gastroenterológico del mundo.'}</p></div><div class="staff-placeholder-grid">${doctors.map((name,i)=>`<a class="staff-placeholder" href="${href('staff')}"><span>IECED</span><small>${esc(name)}</small></a>`).join('')}</div><div class="center-link"><a class="text-link" href="${href('staff')}">${isEn?'View medical staff':'Ver Staff Médico'} →</a></div></div></section>

      <section class="section recognition"><div class="wrap"><div class="section-heading"><div class="eyebrow">${isEn?'National network':'Red nacional'}</div><h2>${isEn?'IECED accredited centers':'Centros avalados de IECED'}</h2><p>${isEn?'Specialized centers associated with the IECED network.':'Descubre el camino hacia una vida digestiva más saludable. Estamos en Guayaquil, Quito, Santo Domingo, Manta y Milagro.'}</p></div><div class="service-grid">${centres.map((name,i)=>`<a class="service-card" href="${href('centros')}"><span class="service-index">${String(i+1).padStart(2,'0')}</span><h3>${esc(name)}</h3><p>${isEn?'IECED accredited center':'Centro avalado de IECED'}</p></a>`).join('')}</div></div></section>

      <section class="section benefits-section"><div class="wrap benefits-grid"><div><div class="eyebrow">${isEn?'Benefits':'Beneficios'}</div><h2>${isEn?'The best discounts of the year':'Los mejores descuentos del año'}</h2><p>${isEn?'Enjoy peace of mind. Secure online or in-person medical care through the IECED app on any mobile device.':'¡Disfruta de tu tiempo con tranquilidad! Asegura tu atención médica online o presencial a través de la APP IECED en cualquier dispositivo móvil.'}</p><ul class="check-list"><li>${isEn?'Easy and direct':'Fácil y directo'}</li><li>${isEn?'Book with your preferred physician':'Agenda con tu médico favorito'}</li><li>${isEn?'Appointments in less than five minutes':'Agendamiento de citas médicas en menos de 5 minutos'}</li><li>${isEn?'View and download your results':'Visualiza y descarga tus resultados'}</li><li>${isEn?'Pay for medical appointments':'Pago de citas médicas'}</li><li>${isEn?'Exclusive benefits':'Beneficios exclusivos'}</li></ul><a class="text-link" href="${href('beneficios')}">${isEn?'Explore benefits':'Conoce los beneficios'} →</a></div><div class="app-placeholder"><div class="phone-frame"><div class="phone-brand">IECED</div><div class="phone-line"></div><div class="phone-line short"></div><div class="phone-action"></div><div class="phone-line"></div></div><span>IECED APP</span></div></div></section>

      <section class="cta-band"><div class="wrap cta-inner"><div><h2>${isEn?'Need information or want to book an appointment?':'¿Necesitas información o deseas agendar una cita?'}</h2><p>${isEn?'Contact the IECED team.':'Comunícate con nuestro equipo de atención.'}</p></div><a class="btn btn-white" href="${href('contacto')}">${isEn?'Contact us':'Contáctanos'} ↗</a></div></section>`;
    reveal();
  }
  function renderAppPage() {
    const isEn = lang === 'en';
    document.title = `${isEn ? 'IECED App' : 'APP IECED'} | IECED`;
    const benefits = isEn
      ? [['30%','Ultrasounds'],['25%','Medical consultations'],['20%','Procedures'],['15%','Laboratory tests'],['10%','Discount for dependents']]
      : [['30%','En ecografías'],['25%','En consultas médicas'],['20%','En procedimientos'],['15%','En exámenes de laboratorio'],['10%','De descuento para dependientes']];
    const features = isEn
      ? [['01','Book with your preferred physician','Schedule medical appointments through the app.'],['02','Appointments in less than five minutes','Manage your appointment quickly.'],['03','View and download your results','Access your medical results from your device.'],['04','Pay for appointments','In-person and online appointment payments.']]
      : [['01','Agenda con tu médico favorito','Gestiona tus citas médicas desde la aplicación.'],['02','Agendamiento en menos de 5 minutos','Organiza tu atención de forma sencilla.'],['03','Visualiza y descarga tus resultados','Consulta tus resultados desde tu dispositivo.'],['04','Pago de citas médicas','Realiza pagos de citas presenciales y online.']];
    app.innerHTML = `
      <section class="app-page-hero"><div class="wrap app-hero-grid"><div class="app-hero-copy"><div class="eyebrow">${isEn?'IECED MOBILE APPLICATION':'APP IECED · ¡SIEMPRE SEGURO!'}</div><h1>${isEn?'Enjoy your time with peace of mind!':'¡Disfruta de tu tiempo con tranquilidad!'}</h1><p>${isEn?'Secure your medical care online or in person through the IECED app on your mobile device.':'Asegura tu atención médica online o presencial a través de la APP IECED en cualquier dispositivo móvil.'}</p><div class="app-store-actions"><a class="store-button" href="https://play.google.com/store/apps/details?id=com.mdconsgroup.iecedapp" target="_blank" rel="noopener noreferrer"><span class="store-mark">▶</span><span><small>${isEn?'GET IT ON':'DISPONIBLE EN'}</small><strong>Google Play</strong></span></a><a class="store-button" href="https://apps.apple.com/ec/app/ieced/id1623242587" target="_blank" rel="noopener noreferrer"><span class="store-mark">●</span><span><small>${isEn?'DOWNLOAD ON':'DESCÁRGALA EN'}</small><strong>App Store</strong></span></a></div><a class="app-other-link" href="#otras-versiones">${isEn?'Other versions and compatibility':'Otras versiones'} ↓</a></div><div class="app-visual" aria-label="${isEn?'Illustration of the IECED mobile app':'Ilustración de la aplicación móvil IECED'}"><div class="app-orbit app-orbit-one"></div><div class="app-orbit app-orbit-two"></div><div class="app-phone"><div class="app-phone-notch"></div><div class="app-phone-head"><img src="assets/logo-ieced.svg" alt="IECED"><span>Hola, paciente</span></div><div class="app-phone-card"><small>IECED · APP</small><strong>${isEn?'Your health, closer':'Tu salud, más cerca'}</strong><span class="app-phone-pill">${isEn?'Book appointment':'Agendar cita'} ↗</span></div><div class="app-phone-lines"><i></i><i></i><i></i></div><div class="app-phone-bottom"><b>⌂</b><b>▦</b><b>♡</b><b>◉</b></div></div><span class="app-visual-caption">${isEn?'Care made simple':'Atención fácil y directa'}</span></div></div></section>
      <section class="app-benefits-section"><div class="wrap"><div class="section-heading"><div class="eyebrow">${isEn?'EXCLUSIVE BENEFITS':'BENEFICIOS EXCLUSIVOS'}</div><h2>${isEn?'Benefits available through the IECED app':'Beneficios exclusivos desde la APP IECED'}</h2><p>${isEn?'Enjoy the benefits offered to app users.':'Disfruta de los beneficios exclusivos disponibles desde la aplicación.'}</p></div><div class="app-benefit-grid">${benefits.map((b,i)=>`<article class="app-benefit-card"><span class="app-benefit-number">${String(i+1).padStart(2,'0')}</span><strong>${b[0]}</strong><p>${b[1]}</p></article>`).join('')}</div></div></section>
      <section class="app-features-section"><div class="wrap"><div class="section-heading"><div class="eyebrow">${isEn?'EASY AND DIRECT':'FÁCIL Y DIRECTO'}</div><h2>${isEn?'For us, your time and wellbeing matter':'Para nosotros tu tiempo y bienestar es importante.'}</h2><p>${isEn?'Manage key parts of your care through the IECED app.':'Asegura tu atención médica online o presencial a través de la APP IECED en cualquier dispositivo móvil.'}</p></div><div class="app-feature-grid">${features.map(f=>`<article class="app-feature-card"><span>${f[0]}</span><div><h3>${f[1]}</h3><p>${f[2]}</p></div></article>`).join('')}</div></div></section>
      <section class="app-versions-section" id="otras-versiones"><div class="wrap app-versions-inner"><div><div class="eyebrow">${isEn?'OTHER VERSIONS':'OTRAS VERSIONES'}</div><h2>${isEn?'Android compatibility':'Compatibilidad con Android'}</h2><p>${isEn?'IECED provides an Android legacy version for devices that are not compatible with the current Google Play version. Contact IECED to confirm the appropriate installation option for your device.':'IECED informa que dispone de una versión Android compatible con dispositivos anteriores a Android 13. Para confirmar la opción de instalación adecuada para tu dispositivo, comunícate con el equipo de IECED.'}</p><a class="btn" href="https://wa.me/593986637750" target="_blank" rel="noopener noreferrer">${isEn?'Ask IECED on WhatsApp':'Consultar por WhatsApp'} ↗</a></div><div class="app-version-note"><strong>${isEn?'Before installing':'Antes de instalar'}</strong><p>${isEn?'Use the official store whenever your device is compatible. For older Android versions, request the current official instructions from IECED.':'Utiliza la tienda oficial siempre que tu dispositivo sea compatible. Para versiones anteriores de Android, solicita a IECED las instrucciones oficiales vigentes.'}</p></div></div></section>`;
    reveal();
  }

  function renderPage(key) {
    const data = DATA[key];
    if (data && data.menu_heading_only) {
      const headingLinks = {
        trayectoria:['por-que-ieced','centros','staff'], calidad:['procesos-calidad'], teleconsulta:['app-ieced'],
        premios:['premios-ieced'], servicios:['consultas-medicas','obesidad','procedimientos-endoscopicos'],
        atencion:['consultas-medicas','obesidad','procedimientos-endoscopicos','preparaciones','preguntas-frecuentes','enfermedades'],
        convenios:['seguros-particulares','formularios-seguros','seguros-publicos'], beneficios:['app-ieced','supermaxi']
      }[key] || [];
      const researchExternal = key==='investigacion' ? `<div class="external-category-links"><a class="service-card" href="https://pentaxcenter.com/" target="_blank" rel="noopener noreferrer"><h3>Investigación científica ↗</h3></a><a class="service-card" href="https://pentaxcenter.com/" target="_blank" rel="noopener noreferrer"><h3>Formación médica ↗</h3></a></div>` : ''; 
      const cards = headingLinks.map((k,i)=>{const item=get(k);return `<a class="service-card" href="${href(k)}"><span class="service-index">${String(i+1).padStart(2,'0')}</span><h3>${esc(item?item.label:k)}</h3><span class="card-arrow">↗</span></a>`}).join('');
      document.title = `${label(key)} | IECED`;
      app.innerHTML = `<section class="page-hero"><div class="wrap"><div class="eyebrow">IECED</div><h1>${esc(label(key))}</h1></div></section><section class="page-content"><div class="wrap"><div class="service-grid">${cards}${researchExternal}</div></div></section>`;
      reveal(); return;
    }
    if (!data) {
      const missingLabel = label(key);
      document.title = `${missingLabel} | IECED`;
      app.innerHTML = `<section class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="${href('home')}">${esc(t('crumbHome'))}</a><span>›</span>${esc(missingLabel)}</div><div class="eyebrow">IECED</div><h1>${esc(missingLabel)}</h1></div></section><section class="page-content"><div class="wrap"><div class="notice"><strong>${esc(t('missingTitle'))}</strong><p>${esc(t('missing'))}</p></div></div></section>`;
      reveal();
      return;
    }
    const en = pageEnglish[key];
    const title = lang==='en' ? (en ? en[0] : label(key)) : (data.title || label(key));
    const intro = lang==='en' ? (en ? en[1] : '') : data.intro;
    const body = lang==='en' ? (en ? en[2] : []) : (data.body || []);
    const missing = data.needs_source;
    document.title = `${title || label(key)} | IECED`;
    const bodyHtml = (body || []).map((p,i)=>`<div class="content-paragraph"><span class="paragraph-marker">${String(i+1).padStart(2,'0')}</span><p>${esc(p)}</p></div>`).join('');
    const resourceHtml = (data.downloads || []).length ? `<section class="resource-section"><h2>${lang==='en'?'Download documents':'Descargar documentos'}</h2><div class="resource-grid">${data.downloads.map((r,i)=>`<a class="resource-card" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer"><span class="resource-index">${String(i+1).padStart(2,'0')}</span><span>${esc(r.label)}</span><b>↓</b></a>`).join('')}</div></section>` : '';
    const faqHtml = (data.faqs || []).length ? `<section class="faq-section"><h2>${lang==='en'?'Frequently asked questions':'Preguntas y respuestas'}</h2>${data.faqs.map(item=>`<details class="faq-item"><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join('')}</section>` : '';
    const diseaseHtml = (data.disease_groups || []).length ? `<section class="disease-section"><h2>${lang==='en'?'Diseases by digestive system area':'Enfermedades por zona del aparato digestivo'}</h2>${data.disease_groups.map(group=>`<details class="disease-group"><summary>${esc(group.name)} <span>${group.items.length}</span></summary><ul>${group.items.map(item=>`<li>${esc(item)}</li>`).join('')}</ul></details>`).join('')}</section>` : '';
    const partnersHtml = (data.partners || []).length ? `<section class="partner-section"><h2>${lang==='en'?'Insurance partners':'Aseguradoras asociadas'}</h2><div class="partner-grid">${data.partners.map((item,i)=>`<article class="partner-card"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(item.name)}</h3><p>${esc(item.description)}</p><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${lang==='en'?'Visit website':'Visitar sitio web'} ↗</a></article>`).join('')}</div></section>` : '';
    const teamHtml = (data.team || []).length ? `<section class="team-section"><h2>${lang==='en'?'Medical team':'Staff médico'}</h2><div class="team-grid">${data.team.map((item,i)=>`<article class="team-card"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(item.name)}</h3><p>${esc(item.role)}</p></article>`).join('')}</div></section>` : '';
    const centersHtml = (data.centers || []).length ? `<section class="center-section"><h2>${lang==='en'?'Accredited centers':'Centros de la red IECED'}</h2><div class="center-grid">${data.centers.map((item,i)=>`<article class="center-card"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(item.name)}</h3><p>${esc(item.city)}</p></article>`).join('')}</div></section>` : '';
    const proceduresHtml = (data.procedures || []).length ? `<section class="procedure-section"><h2>${lang==='en'?'Procedures and technologies':'Procedimientos y tecnologías'}</h2><div class="procedure-grid">${data.procedures.map((item,i)=>`<article class="procedure-card"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(item)}</h3></article>`).join('')}</div></section>` : '';
    const notice = missing ? `<div class="notice"><strong>${esc(t('missingTitle'))}</strong><p>${esc(t('missing'))}</p></div>` : '';
    const extrasHtml = `${resourceHtml}${faqHtml}${diseaseHtml}${partnersHtml}${teamHtml}${centersHtml}${proceduresHtml}`;
    const contact = key==='contacto' ? `<div class="contact-grid"><a class="contact-item" href="tel:+59342109180"><span>☎</span><div><b>${lang==='en'?'Phone':'Teléfono'}</b>04 2 109180</div></a><a class="contact-item" href="https://wa.me/593986637750" target="_blank" rel="noopener"><span>◉</span><div><b>WhatsApp</b>098 663 7750</div></a><a class="contact-item" href="mailto:callcenter1@ieced.ec"><span>✉</span><div><b>Email</b>callcenter1@ieced.ec</div></a><a class="contact-item" href="mailto:comercial@ieced.ec"><span>✉</span><div><b>Comercial</b>comercial@ieced.ec</div></a><div class="contact-item"><span>⌖</span><div><b>${lang==='en'?'Address':'Dirección'}</b>${lang==='en'?'Next to Omni Hospital, Av. Abel R. Castillo S/N and Av. Juan Tanca Marengo. Torre Médica I, mezzanine 3; Torre Médica II, 4th floor, offices 405–406, Guayaquil.':'Junto al Omni Hospital, Av. Abel R. Castillo S/N y Av. Juan Tanca Marengo. Torre Médica I, mezzanine 3; Torre Médica II, 4.º piso, consultorios 405–406, Guayaquil.'}</div></div></div><section class="contact-map-section"><div class="contact-map-heading"><h2>${lang==='en'?'Find IECED':'Encuéntranos en Google Maps'}</h2><a href="https://www.google.com/maps/search/?api=1&query=IECED%2C%20Av.%20Abel%20R.%20Castillo%20S%2FN%20y%20Av.%20Juan%20Tanca%20Marengo%2C%20Guayaquil%2C%20Ecuador" target="_blank" rel="noopener noreferrer">${lang==='en'?'Open in Google Maps':'Abrir en Google Maps'} ↗</a></div><iframe class="contact-map" title="${lang==='en'?'IECED location map':'Mapa de ubicación de IECED'}" src="https://www.google.com/maps?q=IECED%2C%20Av.%20Abel%20R.%20Castillo%20S%2FN%20y%20Av.%20Juan%20Tanca%20Marengo%2C%20Guayaquil%2C%20Ecuador&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></section>${renderContactForm()}` : '';
    app.innerHTML = `<section class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="${href('home')}">${esc(t('crumbHome'))}</a><span>›</span>${esc(label(key))}</div><div class="eyebrow">${esc(data.eyebrow || 'IECED')}</div><h1>${esc(title || label(key))}</h1>${intro ? `<p>${esc(intro)}</p>` : ''}</div></section><section class="page-content"><div class="wrap page-layout ${key==='contacto'?'contact-page-layout':''}"><article class="page-copy">${bodyHtml}${notice}${extrasHtml}${contact}<a class="btn" href="${href('contacto')}">${esc(t('contactCta'))}<span>↗</span></a></article>${key==='contacto'?'':brandPanel(data.eyebrow || 'IECED')}</div></section>`;
    reveal();
  }
  let revealObserver = null;
  function reveal(){
    if (revealObserver) revealObserver.disconnect();
    const selector = [
      'h1','h2','h3','p','img','.eyebrow','.service-card','.blog-card',
      '.app-benefit-card','.app-feature-card','.contact-item','.notice',
      '.content-paragraph','.contact-map-section','.staff-placeholder',
      '.proof-seal','.brand-panel','.app-visual','.app-version-note',
      '.app-store-actions','.contact-form-section'
    ].join(',');
    const candidates = [...app.querySelectorAll(selector)];
    const selected = new Set(candidates);
    const nodes = candidates.filter(node => {
      let parent = node.parentElement;
      while (parent && parent !== app) {
        if (selected.has(parent)) return false;
        parent = parent.parentElement;
      }
      return true;
    });
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-revealed'));
      return;
    }
    const siblingCounts = new Map();
    nodes.forEach(node => {
      const parent = node.parentElement;
      const index = siblingCounts.get(parent) || 0;
      siblingCounts.set(parent, index + 1);
      node.classList.add('scroll-reveal');
      node.style.setProperty('--reveal-delay', `${Math.min(index * 75, 300)}ms`);
      const rect = node.getBoundingClientRect();
      // El contenido que ya está en la primera pantalla se muestra sin espera.
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        node.classList.add('is-revealed');
        node.classList.remove('scroll-reveal');
        node.style.removeProperty('--reveal-delay');
      }
    });
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {root:null, rootMargin:'0px 0px -6% 0px', threshold:0.08});
    nodes.filter(node => node.classList.contains('scroll-reveal')).forEach(node => revealObserver.observe(node));
  }
  let navigationBusy = false;
  const routeLoader = document.getElementById('routeLoader');
  function navigate(url, push) {
    if (navigationBusy) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (push) history.pushState({}, '', url);
    if (reduced) {
      render();
      window.scrollTo({top:0,behavior:'auto'});
      return;
    }
    navigationBusy = true;
    app.classList.remove('page-enter');
    app.classList.add('page-exit');
    routeLoader?.classList.add('is-active');
    routeLoader?.setAttribute('aria-hidden','false');
    // El indicador aparece durante el cambio de ruta, como una pantalla breve de carga.
    window.setTimeout(() => {
      render();
      window.scrollTo({top:0,behavior:'auto'});
      app.classList.remove('page-exit');
      void app.offsetWidth;
      app.classList.add('page-enter');
      window.setTimeout(() => {
        routeLoader?.classList.remove('is-active');
        routeLoader?.setAttribute('aria-hidden','true');
        window.setTimeout(() => {
          app.classList.remove('page-enter');
          navigationBusy = false;
        }, 560);
      }, 620);
    }, 360);
  }

  function render(){
    const requested=new URLSearchParams(location.search).get('page')||'home';
    const key=requested==='inicio'?'home':(requested==='plan-suscripcion'?'app-ieced':requested);
    renderNav(key);
    nav.classList.remove('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
    if(key==='home') renderHome(); else if(key==='app-ieced') renderAppPage(); else if(key==='blog') renderBlog(); else if(key==='blog-articulo') renderBlogArticle(new URLSearchParams(location.search).get('post')||''); else renderPage(key);
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-lang]').forEach(b=>{const active=b.dataset.lang===lang;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
    document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n);});
  }
  document.addEventListener('click',event=>{
    const trigger=event.target.closest('.nav-trigger');
    if(trigger){const group=trigger.closest('.nav-group');document.querySelectorAll('.nav-group').forEach(g=>{if(g!==group){g.classList.remove('expanded');g.querySelector('.nav-trigger').setAttribute('aria-expanded','false');}});const expanded=group.classList.toggle('expanded');trigger.setAttribute('aria-expanded',String(expanded));return;}
    const langButton=event.target.closest('[data-lang]');
    if(langButton){lang=langButton.dataset.lang;try{localStorage.setItem('ieced-lang',lang);}catch(e){}navigate(location.href,false);return;}
    const anchor=event.target.closest('a[href^="?page="]');
    if(anchor){event.preventDefault();navigate(anchor.getAttribute('href'),true);return;}
  });
  document.querySelector('.menu-toggle').addEventListener('click',()=>{const open=nav.classList.toggle('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded',String(open));});
  document.addEventListener('click',event=>{if(!event.target.closest('.nav-group')){document.querySelectorAll('.nav-group.expanded').forEach(g=>{g.classList.remove('expanded');g.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false');});}});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){document.querySelectorAll('.nav-group.expanded').forEach(g=>{g.classList.remove('expanded');g.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false');});nav.classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');}});
  window.addEventListener('popstate',()=>navigate(location.href,false));
  render();
})();

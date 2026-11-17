# Control de calidad IECED — 17/11/2026

## Comprobaciones realizadas
- [x] Proyecto actualizado sobre la segunda fase existente, sin iniciar desde cero.
- [x] Sintaxis JavaScript comprobada con `node --check` para `app.js` y `data.js`.
- [x] Menú jerárquico alineado con las categorías del menú oficial recuperado.
- [x] Desplegables estructurados en filas horizontales en escritorio y apilados en móvil.
- [x] Paleta de marca actualizada a `#ff6400` y `#ff7011`.
- [x] Tipografías configuradas como Montserrat y Source Sans Pro.
- [x] Enlaces sociales de Facebook, Instagram, X, YouTube y LinkedIn incorporados.
- [x] Iconos sociales vectoriales almacenados localmente en blanco; LinkedIn corregido y sin dependencia del CDN.
- [x] Icono flotante de WhatsApp sustituido por un SVG vectorial blanco; se conservaron número, enlace, ubicación y comportamiento.
- [x] Tamaño del menú y franja superior ajustados ligeramente.
- [x] Estados hover/activo del menú con texto oscuro sobre fondo claro de acento naranja.
- [x] Aparición progresiva por elemento con Intersection Observer, una sola vez y sin ocultar secciones completas ni animar el contenedor de página.
- [x] El contenido ya visible al cargar se muestra de inmediato; los elementos inferiores se revelan al entrar en pantalla.
- [x] `prefers-reduced-motion` desactiva el movimiento y mantiene visible el contenido.
- [x] Se eliminó la transición global de salida/entrada de `#app`; navegar entre apartados ya no desvanece la página completa.
- [x] Página APP IECED ampliada con beneficios, funciones y enlaces verificados a Google Play y App Store.
- [x] Sección de otras versiones Android incorporada con información de compatibilidad y contacto.
- [x] Mapa incrustado en Contacto y enlace de apertura en Google Maps basados en la dirección oficial.
- [x] Contenido ampliado en varias páginas con base en la información oficial consultada.
- [x] Rutas sin contenido recuperado dejan de enviar al usuario a Inicio.
- [x] Se mantiene el selector de idioma y la estructura de GitHub Pages.
- [x] Se mantiene la restricción de no incorporar fotografías de personas.

## Pendiente de comprobar o completar
- [ ] Comparación visual de escritorio y móvil en navegador real.
- [ ] Comprobar visualmente la cadencia de scroll reveal en navegador de escritorio y móvil reales.
- [ ] Comprobar que las fichas de Google Play y App Store abren correctamente desde los botones de APP IECED.
- [ ] Obtener y validar el archivo APK Android legacy antes de ofrecer un botón de descarga local.
- [ ] Prueba completa de todos los menús, submenús, botones y enlaces.
- [ ] Revisión de todas las páginas institucionales restantes y recuperación de su contenido íntegro.
- [ ] Blog completo: páginas 2–5, todas las publicaciones, imágenes permitidas y contenido de artículos.
- [ ] Traducción completa de cada sección y de cada publicación al inglés.
- [ ] Validación visual en navegador de los cinco iconos sociales y del icono de WhatsApp, así como de cada perfil externo.
- [ ] Confirmación visual de que el pin del mapa corresponde a la sede IECED; el mapa usa la dirección oficial, no coordenadas verificadas.
- [ ] Confirmación del primer envío real del formulario y activación de FormSubmit.
- [ ] Validación de términos y política de privacidad por el responsable de IECED.
- [ ] Revisión de errores de consola y recursos que no carguen.
- [ ] Comparar el espaciado y tamaño exactos de los iconos con la captura de referencia; esa imagen no estuvo disponible como archivo accesible durante esta edición.
- [ ] Confirmación final de compatibilidad en GitHub Pages.

**Estado:** ajustes de scroll reveal e iconografía implementados. La revisión visual en navegador real sigue pendiente; no debe etiquetarse como réplica 98–100 % hasta cerrar todos los puntos pendientes.
- [x] Renderizado de las plantillas APP IECED y Contacto probado con un entorno DOM simulado en Node: se verificaron los cinco descuentos, los dos botones de tiendas, el mapa, el formulario y la dirección de correo de destino.
- [x] Los SVG locales (redes sociales y WhatsApp) pasan validación XML; el HTML principal se pudo analizar y el CSS mantiene llaves balanceadas.
- [x] `app.js` y `data.js` pasan `node --check`.

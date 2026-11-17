# IECED — réplica estática para GitHub Pages

## Actualización de reconstrucción — 17 de noviembre de 2026

Se continuó sobre el proyecto existente `IECED-segunda-fase-actualizado.zip`. No se inició una plantilla nueva.

### Cambios aplicados en esta fase
- Se contrastó la navegación del proyecto con la estructura del menú de la página oficial y la captura HTML facilitada.
- Se reconstruyó la jerarquía del menú: **Nosotros** con Nuestra Trayectoria, Calidad, Teleconsulta, Premios y reconocimientos e Investigación y Formación; **Servicios** con Atención, Convenios y Beneficios; además de Inicio, Podcast IECED, Blog y Contacto.
- Los desplegables ahora presentan cada categoría como una fila horizontal con sus enlaces. En móvil se apilan para facilitar la navegación táctil.
- Se corrigió la paleta a los valores observados en los estilos de la web oficial: naranja principal `#ff6400` y naranja secundario `#ff7011`. También se ajustaron tipografías a Montserrat y Source Sans Pro, según la captura de estilos.
- Se corrigió el icono de LinkedIn y se reemplazaron los cinco iconos sociales remotos por SVG locales para evitar fallos de carga del CDN. Los enlaces corresponden a los perfiles detectados en la captura HTML oficial: Facebook, Instagram, X, YouTube y LinkedIn.
- Se amplió la portada con los bloques de reconocimiento, inteligencia artificial, APP IECED, consultas, obesidad, staff, centros avalados y beneficios, usando contenido institucional recuperado.
- Se amplió el contenido disponible de Nosotros, ¿Por qué IECED?, Centros avalados, Procesos de Calidad, APP IECED, Consultas médicas, No más obesidad, Preparaciones y Premios IECED.
- Las rutas sin contenido recuperado ya no devuelven silenciosamente a Inicio: muestran el nombre de la sección y una advertencia de contenido fuente pendiente.
- Se amplió ligeramente el tamaño del menú y de la franja superior, sin cambiar su estructura; se ajustó el hover y el estado activo para mejorar el contraste usando fondos claros y texto oscuro dentro de la identidad naranja IECED.
- La navegación entre rutas conserva el cambio de contenido sin desvanecer ni ocultar el contenedor completo de la página; las animaciones de aparición se reservan a elementos individuales al desplazarse.
- Se reconstruyó la página APP IECED con sus beneficios oficiales, funciones descritas por IECED, ilustración CSS propia sin fotografías de personas y botones hacia las fichas oficiales de Google Play y App Store. La sección “Otras versiones” explica la compatibilidad Android legacy y ofrece contacto; no se enlaza un APK cuya descarga no pudo verificarse.
- Se añadió un mapa incrustado en Contacto y un enlace para abrir Google Maps, utilizando la dirección oficial publicada por IECED. La búsqueda del mapa utiliza la dirección textual; no se inventaron coordenadas.
- Se conservan el selector ES/EN, favicon, logotipo, formulario, navegación interna y adaptación responsive.
- No se añadieron fotografías de médicos, colaboradores, pacientes ni imágenes de stock. Los bloques que dependen de esas fotografías siguen siendo espacios neutros.

### Datos oficiales consultados
- Menú y estructura: captura HTML de la web oficial facilitada en la conversación y página principal IECED.
- Colores y tipografías: estilos CSS incluidos en la captura HTML oficial.
- Textos institucionales y detalles de servicios: páginas oficiales de Nosotros, Centros avalados, Procesos de Calidad, APP IECED, Consultas médicas, Obesidad, Preparaciones y Premios IECED.
- Redes sociales: enlaces del bloque social de la captura HTML oficial.

## Pendientes que impiden declarar una réplica 98–100 %
1. **Blog:** el archivo consultado muestra cinco páginas de resultados. Esta versión conserva los diez títulos y fechas de la primera página; no están incorporados todos los artículos ni las páginas 2–5. Los textos completos de las publicaciones no se reconstruyeron a partir de resúmenes.
2. **Páginas internas:** faltan respaldos completos y verificables para varias opciones institucionales (por ejemplo, Nuestra Trayectoria, Calidad, Teleconsulta, Investigación y Formación, Seguros públicos y Podcast). Las rutas están presentes, pero algunas siguen identificadas como pendientes.
3. **Imágenes:** por la restricción indicada, no se incorporaron fotografías de personas. Tampoco se sustituyeron por imágenes de stock o generadas. La réplica visual no puede considerarse indistinguible mientras falten las imágenes originales autorizadas.
4. **Formularios:** el formulario de contacto usa FormSubmit. La activación inicial del destinatario `callcenter1@ieced.ec` y la recepción real deben probarse por el responsable de IECED. GitHub Pages no procesa formularios por sí solo.
5. **Redes sociales:** los enlaces fueron extraídos de la captura HTML oficial y los cinco iconos ahora se sirven desde archivos SVG locales. La disponibilidad futura de los perfiles externos depende de cada plataforma.
6. **Prueba visual:** Chromium no terminó de abrir el documento en este entorno. Se verificó sintaxis JavaScript, estructura de archivos, existencia de iconos y enlaces internos de los nuevos componentes, pero no se certifica una revisión visual completa ni ausencia total de errores de consola.
7. **Mapa:** el mapa se centra en una búsqueda de Google Maps con la dirección oficial. La confirmación visual del pin exacto debe realizarse en navegador con conexión y compararse con la ubicación institucional.

## Publicación en GitHub Pages
1. Descomprime el ZIP.
2. Sube el contenido completo a la raíz del repositorio, incluidos `index.html`, `app.js`, `data.js`, `styles.css`, `.nojekyll` y `assets/`.
3. En GitHub abre **Settings → Pages** y selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.

## Archivos principales
- `index.html`: estructura, encabezado, pie de página, enlaces sociales y favicon.
- `styles.css`: paleta, tipografías, navegación, responsive y transiciones.
- `app.js`: renderizado, menú jerárquico, idiomas, navegación, blog y formulario.
- `data.js`: navegación y contenido institucional recuperado.
- `assets/logo-ieced.svg`, `assets/favicon.svg`: marca y favicon.
- `assets/facebook.svg`, `instagram.svg`, `x.svg`, `youtube.svg`, `linkedin.svg`: iconos sociales locales.
- `assets/whatsapp.svg`: logotipo vectorial utilizado por el botón flotante de WhatsApp.
- `.nojekyll`: evita el procesamiento de Jekyll.
- `QA-ANTES-DE-PUBLICAR.md`: comprobaciones pendientes antes de publicar.


## Ajuste puntual — Scroll reveal e iconografía (17 de noviembre de 2026)
- Se incorporó `IntersectionObserver` para revelar títulos, subtítulos, párrafos, imágenes y tarjetas individuales al entrar en el viewport, con fade-up suave de aproximadamente 680 ms y retrasos escalonados moderados.
- Los elementos visibles al abrir una página se muestran inmediatamente. Los que aparecen más abajo se animan una sola vez y permanecen visibles al volver a desplazarse hacia arriba.
- No se aplica opacidad ni transformación a secciones completas, fondos, encabezado, pie de página ni al contenedor `#app`. Se retiró la transición global de página.
- Se respeta `prefers-reduced-motion`.
- Se mantienen los SVG blancos locales de Facebook, Instagram, X, YouTube y LinkedIn en la franja superior y el pie de página.
- El botón flotante de WhatsApp ahora utiliza `assets/whatsapp.svg`; se conservaron el enlace `https://wa.me/593986637750`, el tamaño/ubicación responsive y el comportamiento.
- No se modificaron textos, estructura de secciones, paleta institucional ni distribución del contenido.
- La captura visual de referencia de los iconos no apareció entre los archivos accesibles de esta edición; se conservó la presentación circular y alineada que ya tenía el encabezado. La comparación exacta de espaciado/tamaño queda como validación visual pendiente.

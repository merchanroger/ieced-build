# IECED — réplica estática para GitHub Pages

## Actualización de reconstrucción — 16 de noviembre de 2026

Se continuó sobre el proyecto existente `IECED-segunda-fase-actualizado.zip`. No se inició una plantilla nueva.

### Cambios aplicados en esta fase
- Se contrastó la navegación del proyecto con la estructura del menú de la página oficial y la captura HTML facilitada.
- Se reconstruyó la jerarquía del menú: **Nosotros** con Nuestra Trayectoria, Calidad, Teleconsulta, Premios y reconocimientos e Investigación y Formación; **Servicios** con Atención, Convenios y Beneficios; además de Inicio, Podcast IECED, Blog y Contacto.
- Los desplegables ahora presentan cada categoría como una fila horizontal con sus enlaces. En móvil se apilan para facilitar la navegación táctil.
- Se corrigió la paleta a los valores observados en los estilos de la web oficial: naranja principal `#ff6400` y naranja secundario `#ff7011`. También se ajustaron tipografías a Montserrat y Source Sans Pro, según la captura de estilos.
- Se incorporaron enlaces a Facebook, Instagram, X, YouTube y LinkedIn en la franja superior y el pie de página. Las direcciones se extrajeron de los enlaces sociales de la captura HTML oficial facilitada.
- Se amplió la portada con los bloques de reconocimiento, inteligencia artificial, APP IECED, consultas, obesidad, staff, centros avalados y beneficios, usando contenido institucional recuperado.
- Se amplió el contenido disponible de Nosotros, ¿Por qué IECED?, Centros avalados, Procesos de Calidad, APP IECED, Consultas médicas, No más obesidad, Preparaciones y Premios IECED.
- Las rutas sin contenido recuperado ya no devuelven silenciosamente a Inicio: muestran el nombre de la sección y una advertencia de contenido fuente pendiente.
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
5. **Redes sociales:** los enlaces fueron extraídos de la captura HTML oficial. Los iconos vectoriales de marca se sirven desde Simple Icons CDN; requieren conexión a internet.
6. **Prueba visual:** la prueba automatizada de navegador no pudo completarse en este entorno porque Chromium no terminó de abrir el documento. Se verificó sintaxis JavaScript y estructura del ZIP, pero no se certifica una revisión visual completa ni ausencia total de errores de consola.

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
- `.nojekyll`: evita el procesamiento de Jekyll.
- `QA-ANTES-DE-PUBLICAR.md`: comprobaciones pendientes antes de publicar.

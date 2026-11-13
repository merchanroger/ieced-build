# IECED — réplica estática para GitHub Pages

## Actualización: segunda fase (13 de noviembre de 2026)

Se trabajó sobre el proyecto base existente. Se conserva su estructura, paleta, logotipo, rutas y funcionalidades existentes.

### Cambios incluidos
- Menús desplegables: se eliminó el espacio entre el disparador y el panel para evitar que desaparezca al mover el cursor; se mantiene apertura por clic, teclado y toque. Los menús se cierran al hacer clic fuera o pulsar Escape.
- Navegación: transición breve entre vistas y respeto a `prefers-reduced-motion`.
- Blog: archivo con diez títulos y fechas recuperados del archivo institucional disponible y fichas internas para cada publicación.
- Contacto: formulario con nombres, apellidos, correo, teléfono, asunto, mensaje y consentimiento; validación HTML, campo honeypot y envío mediante FormSubmit a `callcenter1@ieced.ec`.
- Dirección de Guayaquil ampliada con las ubicaciones de Torre Médica I y Torre Médica II, según la información institucional consultada.
- Accesibilidad: región principal anunciada a tecnologías de asistencia y estados `aria-expanded` en los menús.
- Se conserva el selector ES/EN y las 34 rutas existentes.

### Configuración externa necesaria
1. En el primer envío, FormSubmit puede enviar un correo de activación a `callcenter1@ieced.ec`. El responsable de IECED debe confirmar esa activación para que el formulario empiece a recibir solicitudes.
2. El formulario depende de un proveedor externo; GitHub Pages por sí solo no procesa datos. La política de privacidad y autorización del responsable del tratamiento deben validarse antes de publicar el formulario.
3. Solo se mantiene el perfil de LinkedIn institucional cuya URL pudo verificarse. No se añadieron enlaces de Facebook, X, Instagram o YouTube sin confirmar sus perfiles oficiales.

### Límites del material fuente
- El ZIP base contiene 34 rutas de navegación y contenido parcial. La captura HTML y sus recursos no equivalen a un respaldo completo de todas las páginas internas.
- El archivo del blog permitió recuperar títulos y fechas de diez entradas, pero no el texto completo de cada artículo. Las fichas indican expresamente esta ausencia; no se inventaron cuerpos de texto.
- Las páginas internas marcadas como pendientes siguen identificadas como tales cuando no existe texto fuente suficiente.
- No se añadieron fotografías de médicos, colaboradores, pacientes, instalaciones ni imágenes de stock. Se conservan los espacios neutros para añadir después las fotografías autorizadas.

## Publicación en GitHub Pages
1. Descomprime el ZIP.
2. Sube el contenido completo a la raíz del repositorio (incluidos `index.html`, `app.js`, `data.js`, `styles.css`, `.nojekyll` y `assets/`).
3. En GitHub abre **Settings → Pages** y selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.

## Archivos
- `index.html`: estructura principal, cabecera, pie y favicon.
- `styles.css`: identidad visual, responsive, navegación y transiciones.
- `app.js`: renderizado, navegación, idiomas, blog y formulario.
- `data.js`: menú y contenido institucional disponible.
- `assets/logo-ieced.svg`, `assets/favicon.svg`: recursos de marca.
- `.nojekyll`: evita el procesamiento de Jekyll.

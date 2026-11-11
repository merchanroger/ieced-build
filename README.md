# IECED — réplica estática para GitHub Pages

Proyecto HTML, CSS y JavaScript puro. No requiere Jekyll, Node ni proceso de compilación.

## Publicación
1. Descomprime el ZIP.
2. Sube el contenido de la carpeta `ieced-site` (incluidos `index.html`, `app.js`, `data.js`, `styles.css`, `.nojekyll` y `assets/`) a la raíz del repositorio de GitHub.
3. En GitHub abre **Settings → Pages** y selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.

## Archivos
- `index.html`: estructura principal, cabecera, pie de página y favicon.
- `styles.css`: estilos, responsive y animaciones discretas.
- `app.js`: navegación, selector de idioma, renderizado y componentes interactivos.
- `data.js`: menú y contenido institucional recuperado para las páginas internas.
- `assets/logo-ieced.svg`: logotipo oficial disponible en el respaldo.
- `assets/favicon.svg`: favicon basado en el logotipo.
- `.nojekyll`: evita el procesamiento de Jekyll en GitHub Pages.

## Imágenes
Se retiraron las fotografías de médicos, colaboradores, pacientes, personal, instalaciones y procedimientos, según la instrucción del proyecto. No se incorporaron fotografías de stock ni imágenes generadas. Las áreas visuales de portada, equipo médico y aplicación quedan como espacios neutros de marca para añadir las imágenes autorizadas más adelante.

## Navegación e idioma
Se conservaron las 34 entradas del menú del proyecto de referencia y se implementó navegación interna mediante `?page=...`, con menús desplegables y menú móvil. El selector ES/EN mantiene el idioma durante la navegación. Las traducciones inglesas se han incorporado a los apartados cuyo texto se pudo reconstruir con el material disponible; en páginas sin texto fuente se muestra una nota de contenido pendiente, sin inventar información.

## Alcance y contenido pendiente
El respaldo original disponible corresponde principalmente a una captura de la página principal y recursos asociados; no contiene una copia íntegra de las 34 páginas internas ni todos sus documentos descargables. Por ello se preservan todas las rutas del menú y se incluyen los textos recuperados, pero algunos apartados quedan identificados como pendientes de incorporar/validar cuando se facilite su contenido original. No se debe considerar esta entrega una copia exhaustiva de cada página de WordPress hasta completar ese material.

## Nota de contacto
El formulario de contacto no se ha simulado como si enviara datos a un servidor: el proyecto es estático y no dispone de backend. Los botones de teléfono, correo y WhatsApp enlazan a sus destinos correspondientes.

# IECED — rediseño estático para GitHub Pages

Sitio estático desarrollado con HTML, CSS y JavaScript puro. No requiere Jekyll, Node, frameworks ni proceso de compilación.

## Archivos
- `index.html`: estructura del sitio, navegación y contenido recuperado.
- `styles.css`: diseño adaptable a escritorio, tabletas y móviles.
- `app.js`: navegación entre secciones y renderizado del contenido.
- `assets/logo-ieced.svg`: logo oficial de IECED.
- `.nojekyll`: indica a GitHub Pages que no procese el sitio con Jekyll.

## Imágenes y privacidad
Se retiraron las fotografías de médicos, colaboradores, personal, instalaciones y procedimientos. No se utilizaron fotografías de stock ni imágenes generadas. El único archivo de imagen del proyecto es el logo oficial de IECED en formato SVG.

## Alcance y fidelidad del contenido
El material de origen disponible incluye una captura HTML de la página principal y recursos descargados, pero no un respaldo completo de todas las páginas internas. Se conservaron los textos y apartados identificables en el material disponible. Las secciones cuyo contenido íntegro no pudo verificarse muestran una nota de contenido pendiente; no se inventaron nombres, datos médicos, precios, coberturas ni instrucciones clínicas.

Antes de utilizar este proyecto como reemplazo definitivo del sitio institucional, IECED debe revisar los textos, confirmar los datos de contacto y completar las secciones pendientes con su contenido oficial vigente.

## Publicar en GitHub Pages
1. Descarga y descomprime el ZIP.
2. Sube **todos** los archivos y carpetas de esta carpeta a la raíz del repositorio de GitHub.
3. Abre `Settings → Pages` en el repositorio.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub Pages publique el sitio.

No configures un workflow de Jekyll ni agregues `Gemfile`. El sitio se publica directamente desde los archivos estáticos.

## Validación realizada
- Se validó la sintaxis JavaScript con Node.js.
- Se verificó que las rutas internas usan `?page=` y no redirigen a páginas internas del dominio oficial.
- Se comprobó que el único recurso de imagen incluido es `assets/logo-ieced.svg`.
- No se ha realizado una prueba visual automatizada en todos los navegadores ni una auditoría institucional del contenido; estas revisiones deben hacerse antes de producción.

# Lista de control — IECED

## Validaciones técnicas realizadas en esta entrega

- [x] `app.js` pasa `node --check`.
- [x] `data.js` pasa `node --check`.
- [x] Las rutas internas principales renderizan contenido mediante prueba con DOM simulado.
- [x] Las secciones de FAQ, enfermedades, staff, centros, aseguradoras y descargas producen HTML.
- [x] Los enlaces de agendamiento conservan el destino de WhatsApp publicado.
- [x] Los enlaces externos de Pentax Center y Fundasen se conservan como externos.
- [x] Los documentos de preparación y formularios enlazan a los PDF publicados por IECED.
- [x] Los iconos sociales y WhatsApp se sirven como SVG locales.
- [x] El ZIP se debe verificar con `unzip -t` antes de subirlo.

## Pendiente antes de considerar el proyecto final

- [ ] Incorporar las imágenes originales autorizadas.
- [ ] Completar y cotejar todas las páginas y subpáginas, incluidos artículos y paginación del blog.
- [ ] Reproducir tienda, carrito, productos y checkout de WooCommerce.
- [ ] Completar traducciones EN de todas las páginas.
- [ ] Revisar la ruta oficial de Seguros públicos, que devuelve 404 al momento de la consulta.
- [ ] Probar envío real del formulario y recepción del correo.
- [ ] Comparar visualmente cada página con la web oficial en escritorio, tablet y móvil.
- [ ] Validar las animaciones originales y los estados interactivos de cada apartado.

**No declarar fidelidad 100% hasta cerrar todos los puntos pendientes.**

## Ajustes de navegación y redes sociales — 18 nov 2026
- [x] Transición de salida/entrada al cambiar de página desde los menús y enlaces internos.
- [x] Transición también al cambiar idioma y al navegar con atrás/adelante del navegador.
- [x] Respeta `prefers-reduced-motion`.
- [x] Barra social superior turquesa, iconos blancos SVG sin círculos, con espaciado y proporciones inspirados en la captura de referencia.
- [x] Encabezado muestra Facebook, Instagram, YouTube y LinkedIn como en la referencia; X permanece disponible en el pie de página.
- [x] Se mantienen los destinos oficiales existentes.
- [ ] Prueba visual manual en navegador de escritorio y móvil pendiente.

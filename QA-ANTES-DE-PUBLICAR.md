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


## Corrección de color de barra superior — 18 nov 2026
- [x] Restaurado el fondo institucional IECED naranja (#ff6400), sin cambiar la paleta de marca.
- [x] Se conserva únicamente el estilo de los iconos de referencia: SVG blancos, sin círculos, proporciones diferenciadas y espaciado horizontal.
- [x] Altura de barra restablecida a la escala compacta del encabezado anterior.
- [ ] Revisión visual manual en navegador real pendiente.


## Ampliación de servicios — 19 nov 2026
- [x] Se añadieron rutas para Endoscopía Digestiva, Consulta Médica, Colonoscopia, Ecoendoscopía, Balón Gástrico, Manometría, POEM y CPRE.
- [x] Las nuevas rutas están vinculadas desde el grupo Atención del menú Servicios.
- [x] Se añadieron etiquetas de navegación en inglés para las nuevas rutas.
- [x] Se conservó la paleta institucional en la barra superior; solo cambia la apariencia de los logotipos.
- [ ] La igualdad visual del 100% sigue pendiente de cotejo página por página y de validar las funciones dinámicas de WooCommerce y el blog.


## Ajustes visuales — 24 noviembre 2026
- Iconos sociales superiores: Facebook, Instagram, YouTube, LinkedIn y X en SVG vectorial, color institucional naranja IECED (#FF6400), sin filtros CSS.
- Barra superior conservada en gris claro; no se modificó su fondo.
- Favicon simplificado al isotipo IECED (sin el texto “IECED”), conservando los tonos naranja y azul institucionales del símbolo.
- Tipografía del menú principal ampliada y adaptada a escritorio, tablet y móvil.
- Animación de aparición al desplazarse añadida a los paneles gráficos y espacios reservados para fotografías de la página de inicio.
- Verificación técnica: `node --check app.js` y validación XML de los SVG. La revisión visual en navegador debe realizarse después de publicar.


## Integración de recursos oficiales (24-11-2026)
- Se incorporaron 38 imágenes rasterizadas del ZIP proporcionado, organizadas en `assets/images/`.
- Se mapearon fotografías del equipo médico, servicios/procedimientos, centros avalados y aplicación en las secciones correspondientes de la portada.
- Las imágenes conservan sus dimensiones originales; se aplican `object-fit`, carga diferida (`loading=lazy`) y tamaños fluidos para evitar deformaciones en móvil.
- Se añadieron transiciones de escala al pasar sobre las fotografías y entrada progresiva al desplazarse.
- El ZIP de recursos no contiene GIF, videos ni archivos Lottie. Incluye dos SVG de indicadores circulares; por tanto, las animaciones visuales aplicadas son CSS y no reproducciones de animaciones originales.
- Pendiente: cotejo visual de cada ruta y sección interna en navegador frente a la web oficial; este entorno no certifica una comparación píxel a píxel.

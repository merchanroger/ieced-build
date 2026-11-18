# IECED — reconstrucción estática para GitHub Pages

**Actualización de trabajo: 18 de noviembre de 2026**

Este proyecto continúa la versión anterior y conserva su estructura estática (`index.html`, `styles.css`, `data.js`, `app.js`), el logotipo, favicon, iconos sociales locales y el comportamiento responsive. No utiliza Jekyll y conserva `.nojekyll` para publicarse en GitHub Pages.

## Navegación reconstruida

Se contrastó la jerarquía con el menú visible de https://ieced.com.ec/. El menú incluye Inicio, Nosotros, Servicios, Podcast IECED, Blog y Contacto. Los desplegables se organizaron según sus categorías y destinos publicados:

- **Nosotros:** Nuestra Trayectoria (¿Por qué IECED?, Centros avalados y Staff Médico), Calidad (Procesos de Calidad), Teleconsulta (APP IECED), Premios y reconocimientos (Premios IECED), e Investigación y Formación (enlaces externos a Pentax Center).
- **Servicios:** Atención (Consultas médicas, No más obesidad, Procedimientos endoscópicos, Preparaciones, Preguntas frecuentes y Enfermedades gastrointestinales), Convenios (Seguros particulares, Formularios de seguro particulares y Seguros públicos) y Beneficios (Plan de Suscripción, Beneficios Supermaxi y enlace externo a Fundasen).
- **Enlaces superiores:** Podcast IECED, Blog y Contacto.

Los enlaces de agendamiento usan el destino de WhatsApp publicado por IECED. Los enlaces de Pentax Center, Fundasen, tiendas de aplicaciones, aseguradoras y documentos PDF conservan destinos externos oficiales.

## Contenido y componentes incorporados

- Textos institucionales de Nosotros, ¿Por qué IECED?, Centros avalados, Calidad, APP IECED, Premios, Consultas, Obesidad y Procedimientos, basados en las páginas oficiales consultadas.
- Bloques estructurados para equipo médico y centros avalados.
- Preguntas frecuentes en acordeones desplegables.
- Listado de enfermedades organizado por región del aparato digestivo.
- Directorio de aseguradoras con enlaces a sus sitios oficiales.
- Catálogo de formularios de seguros y documentos de preparación con enlaces a los PDF publicados por IECED.
- Sección de beneficios Supermaxi y podcast.
- Animaciones de aparición al desplazarse en elementos individuales, con soporte para `prefers-reduced-motion`.
- Selector ES/EN, botones sociales en SVG locales y WhatsApp vectorial.

## Imágenes

Se mantienen los espacios de contenido visual sin añadir fotografías de médicos, colaboradores ni pacientes. Las imágenes originales quedan pendientes de incorporación, según la indicación del proyecto.

## Publicación en GitHub Pages

1. Descomprime el ZIP.
2. Sube el contenido de esta carpeta a la raíz del repositorio.
3. En GitHub, abre **Settings → Pages**.
4. Selecciona **Deploy from a branch**, la rama principal y la carpeta `/ (root)`.
5. Guarda los cambios y espera la publicación.

No es necesario ejecutar Jekyll ni crear un workflow de Jekyll.

## Estado real de fidelidad y pendientes

Esta entrega amplía la navegación y el contenido, pero **no debe presentarse como una réplica 100% terminada**. La consulta pública permite confirmar menús y varias páginas, pero no entrega todos los componentes dinámicos ni el contenido completo de cada ruta.

Pendientes que requieren captura o validación adicional:

1. **Imágenes originales:** pendientes por decisión del usuario.
2. **Blog:** se dispone de títulos/fechas de parte del archivo; faltan artículos completos, paginación completa y revisión de todos los posts. No se han inventado textos faltantes.
3. **Tienda WooCommerce:** la web oficial expone carrito, productos, fichas y proceso de compra. La cesta, pagos y checkout de WooCommerce no están reproducidos en esta versión estática.
4. **Idiomas:** el selector funciona, pero no todas las páginas tienen traducción inglesa completa.
5. **Enlaces públicos:** el destino de Seguros públicos consultado devuelve 404; se conserva el apartado y se documenta el estado observado.
6. **Formularios:** el formulario estático conserva el envío configurado mediante FormSubmit; falta confirmar activación y recepción real en el correo institucional. Los formularios propios de otras páginas aún requieren comprobación.
7. **Animaciones y efectos:** están implementados los efectos de scroll y transiciones locales; faltan capturas comparativas de todas las animaciones originales de la web oficial.
8. **Prueba visual:** el entorno no permitió completar una sesión de navegador headless. La validación visual final en escritorio y móvil debe hacerse después de publicar una vista previa.

Los apartados que la web oficial envía a dominios externos conservan el enlace externo, no se duplican como páginas internas.

### Ajustes de navegación y barra social (18 nov 2026)
La navegación interna ahora realiza una transición breve de salida y entrada del contenido principal al cambiar de apartado. Los desplegables mantienen su animación propia y la animación respeta la preferencia `prefers-reduced-motion`. La barra superior usa fondo turquesa e iconos vectoriales blancos sin contenedores circulares, siguiendo la captura de referencia. En la barra superior se muestran Facebook, Instagram, YouTube y LinkedIn; X se conserva en el pie de página.

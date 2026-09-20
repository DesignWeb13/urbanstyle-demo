# Urban Style DEMO

Copia estática e independiente de la tienda. No se modificaron IIS, el frontend operativo ni el backend.

## Abrir

Abre `index.html` con doble clic en Chrome o Edge. No necesitas SQL, Python, IIS, Mercado Pago ni instalar paquetes. También funciona bajo una subcarpeta de un sitio estático.

## Qué contiene

- Diseño, CSS y fotografías locales de la tienda actual.
- 20 productos de ejemplo, filtros, búsqueda, galería, tallas y cantidades.
- Carrito local con clave exclusiva `urbanstyle.demo.carrito.v1`.
- Pantalla de envío con datos ficticios y pago ilustrativo: aprobado, pendiente y rechazado.
- Confirmación del pendiente y reinicio de la demostración sin bloquear la sesión.
- Formularios y WhatsApp simulados: no envían correos, mensajes, pedidos, reservas ni cobros.

El backend estaba apagado al preparar esta copia. Los nombres se prepararon a partir de las fotografías disponibles; los precios, descripciones y existencias son ejemplos, no una exportación actual de SQL. No incluye datos de clientes, credenciales ni historial de pedidos.

La portada conserva la imagen remota de Unsplash del diseño original y necesita Internet para esa imagen. Las fotografías del catálogo son locales. Puedes reemplazar su URL en `css/sections/home.css` por una fotografía propia.

## Publicar

Sube el CONTENIDO de DEMO a la raíz de un repositorio destinado a la demostración. Conserva `index.html`, `assets/`, `css/`, `js/`, `components/` y `.nojekyll`. Activa alojamiento estático, por ejemplo GitHub Pages; subir los archivos al repositorio no publica por sí solo la página. Esta entrega no creó un repositorio ni publicó archivos.

No subas Backend, Frontend operativo, `.env`, copias de SQL ni carpetas de respaldos. Esta DEMO no necesita ninguno de esos archivos.

## Editar

- Catálogo: `js/data/products.js`.
- Estilos: `css/`.
- Secciones principales: `index.html`.
- Cabecera, carrito, modal y checkout: `components/`.
- Comportamiento: módulos bajo `js/`.

Después de editar módulos JavaScript o componentes HTML, ejecuta `node build.mjs` desde DEMO para actualizar `js/demo.bundle.js` y los componentes incrustados en `index.html`. Node solo es necesario para reconstruir; para visitar la demo basta el navegador. No requiere npm install.

## Validación

Se revisaron sintaxis JavaScript, rutas locales, aislamiento respecto de la API y lógica del carrito con pruebas locales. La vista previa file:// en el navegador integrado fue bloqueada por su política de seguridad; queda pendiente la revisión visual en tu navegador.

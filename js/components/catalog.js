import { obtenerProductos } from "../services/productsApi.js";
import { formatearPrecio } from "../utils/currency.js";

let productos = [];

export async function iniciarCatalogo() {
    const contenedor = document.getElementById("contenedorProductos");
    const buscador = document.getElementById("buscador");
    const filtroCategoria = document.getElementById("filtroCategoria");
    const filtroPrecio = document.getElementById("filtroPrecio");
    const sinProductos = document.getElementById("mensajeSinProductos");

    if (!contenedor) {
        console.error("No se encontró #contenedorProductos");
        return;
    }

    function mostrar(lista) {
        contenedor.innerHTML = "";

        if (sinProductos) {
            sinProductos.style.display = lista.length ? "none" : "block";
        }

        lista.forEach((producto) => {
            const tarjeta = document.createElement("article");
            tarjeta.className = "tarjeta-producto";

            const imagen = producto.imagenPrincipal || "";
            const tieneOferta =
                producto.precioOferta !== null &&
                producto.precioOferta !== undefined;

            tarjeta.innerHTML = `
                <div class="contenedor-imagen">
                    ${producto.etiqueta ? `<span class="etiqueta">${producto.etiqueta}</span>` : ""}
                    <img src="${imagen}" alt="${producto.nombre}" loading="lazy">
                </div>
                <div class="informacion-producto">
                    <p class="categoria">${producto.categoria}</p>
                    <h3>${producto.nombre}</h3>
                    ${
                        tieneOferta
                            ? `<p class="precio-anterior">${formatearPrecio(producto.precio)}</p>
                               <p class="precio">${formatearPrecio(producto.precioOferta)}</p>`
                            : `<p class="precio">${formatearPrecio(producto.precio)}</p>`
                    }
                    <button class="agregar-carrito" type="button">Ver producto</button>
                </div>
            `;

            const abrirProducto = () => {
                window.dispatchEvent(
                    new CustomEvent("product:open", {
                        detail: { id: producto.id }
                    })
                );
            };

            tarjeta.addEventListener("click", (evento) => {
                if (evento.target.closest(".agregar-carrito")) return;
                abrirProducto();
            });

            tarjeta
                .querySelector(".agregar-carrito")
                .addEventListener("click", (evento) => {
                    evento.stopPropagation();
                    abrirProducto();
                });

            contenedor.appendChild(tarjeta);
        });
    }

    function filtrar() {
        const texto = buscador?.value.toLowerCase().trim() || "";
        const categoria = filtroCategoria?.value || "todos";
        const precio = filtroPrecio?.value || "todos";

        const filtrados = productos.filter((producto) => {
            const coincideTexto = producto.nombre.toLowerCase().includes(texto);
            const coincideCategoria =
                categoria === "todos" || producto.categoria === categoria;
            const precioProducto = producto.precioOferta ?? producto.precio;
            const coincidePrecio =
                precio === "todos" || precioProducto <= Number(precio);

            return coincideTexto && coincideCategoria && coincidePrecio;
        });

        mostrar(filtrados);
    }

    buscador?.addEventListener("input", filtrar);
    filtroCategoria?.addEventListener("change", filtrar);
    filtroPrecio?.addEventListener("change", filtrar);

    try {
        contenedor.innerHTML = '<p class="cargando-productos">Cargando productos...</p>';
        productos = await obtenerProductos();
        mostrar(productos);
    } catch (error) {
        console.error("Error al cargar productos:", error);
        contenedor.innerHTML = `
            <p class="error-productos">
                No fue posible cargar los productos. ${error.message}
            </p>
        `;
    }
}

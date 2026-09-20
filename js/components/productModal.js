import { obtenerProductoPorId } from "../services/productsApi.js";
import { formatearPrecio } from "../utils/currency.js";
import { agregarProducto } from "../store/cartStore.js";
import { renderizarGaleria } from "../ui/productGallery.js";
import {
    renderizarVariantes,
    obtenerVarianteSeleccionada
} from "../ui/productVariants.js";

export function iniciarProductoModal() {
    const modal = document.getElementById("modalProducto");
    const cerrar = document.getElementById("cerrarModalProducto");
    const categoria = document.getElementById("modalCategoria");
    const nombre = document.getElementById("modalNombre");
    const precio = document.getElementById("modalPrecio");
    const descripcion = document.getElementById("modalDescripcion");
    const cantidad = document.getElementById("modalCantidad");
    const agregar = document.getElementById("agregarDesdeModal");

    if (!modal || !cerrar || !precio || !cantidad || !agregar) {
        console.error("El componente product-modal.html está incompleto.");
        return;
    }

    let productoSeleccionado = null;

    function actualizarPrecio(variante = null) {
        if (!productoSeleccionado) return;

        const precioBase = variante?.precio ?? productoSeleccionado.precio;
        const precioOferta =
            variante?.precioOferta ?? productoSeleccionado.precioOferta;

        precio.textContent = formatearPrecio(precioOferta ?? precioBase);
    }

    async function abrir(idProducto) {
        try {
            agregar.disabled = true;
            agregar.textContent = "Cargando...";

            productoSeleccionado = await obtenerProductoPorId(idProducto);

            if (categoria) categoria.textContent = productoSeleccionado.categoria;
            if (nombre) nombre.textContent = productoSeleccionado.nombre;
            if (descripcion) {
                descripcion.textContent = productoSeleccionado.descripcion || "";
            }

            cantidad.value = "1";

            renderizarGaleria(productoSeleccionado);
            renderizarVariantes(productoSeleccionado, actualizarPrecio);
            actualizarPrecio(obtenerVarianteSeleccionada());

            agregar.textContent = "Agregar al carrito";
            agregar.disabled = !obtenerVarianteSeleccionada();
            modal.classList.add("visible");
        } catch (error) {
            productoSeleccionado = null;
            agregar.textContent = "Agregar al carrito";
            agregar.disabled = false;
            console.error("Error cargando producto:", error);
            alert("No fue posible cargar el producto.");
        }
    }

    function ocultar() {
        modal.classList.remove("visible");
        productoSeleccionado = null;
    }

    agregar.addEventListener("click", async () => {
        if (!productoSeleccionado) return;

        const variante = obtenerVarianteSeleccionada();
        if (!variante) {
            alert("Selecciona una variante disponible.");
            return;
        }

        const cantidadSeleccionada = Number(cantidad.value);

        if (!Number.isInteger(cantidadSeleccionada) || cantidadSeleccionada <= 0) {
            alert("Selecciona una cantidad válida.");
            return;
        }

        if (cantidadSeleccionada > variante.stockDisponible) {
            alert(`Solo hay ${variante.stockDisponible} unidades disponibles.`);
            return;
        }

        const imagenPrincipal =
            productoSeleccionado.imagenes?.find((item) => item.esPrincipal)?.ruta ||
            productoSeleccionado.imagenes?.[0]?.ruta ||
            "";

        const productoCarrito = {
            id: productoSeleccionado.id,
            idVariante: variante.idVariante,
            sku: variante.sku,
            nombre: productoSeleccionado.nombre,
            categoria: productoSeleccionado.categoria,
            imagen: imagenPrincipal,
            color: variante.color,
            precio: variante.precioOferta ?? variante.precio,
            stockDisponible: variante.stockDisponible
        };

        agregar.disabled = true;
        agregar.textContent = "Reservando...";

        const agregado = await agregarProducto(
            productoCarrito,
            variante.talla,
            cantidadSeleccionada
        );

        agregar.disabled = false;
        agregar.textContent = "Agregar al carrito";

        if (agregado) {
            ocultar();
            window.dispatchEvent(new CustomEvent("cart:open"));
        }
    });

    window.addEventListener("product:open", (evento) => {
        abrir(evento.detail.id);
    });

    cerrar.addEventListener("click", ocultar);

    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) ocultar();
    });

    window.addEventListener("ui:escape", ocultar);
}

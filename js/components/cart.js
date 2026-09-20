import {
    suscribirCarrito,
    eliminarProducto,
    aumentarCantidad,
    disminuirCantidad
} from "../store/cartStore.js";
import { formatearPrecio } from "../utils/currency.js";

export function iniciarCarrito() {
    const panel = document.getElementById("panelCarrito");
    const fondo = document.getElementById("fondoOscuro");
    const cerrar = document.getElementById("cerrarCarrito");
    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("totalCarrito");
    const finalizar = document.getElementById("finalizarCompra");
    const whatsappBtn = document.querySelector(".whatsapp-btn");

    if (!panel || !fondo || !cerrar || !lista || !total || !finalizar) return;

    let bloqueado = false;
    window.addEventListener("checkout:lock", evento => {
        bloqueado = Boolean(evento.detail.bloqueado);
        finalizar.textContent = bloqueado ? "Consultar pago" : "Finalizar compra";
        lista.querySelectorAll(".producto-carrito-controles button").forEach(b => b.disabled = bloqueado);
    });

    function abrir() {
        panel.classList.add("abierto");
        fondo.classList.add("visible");
        if (whatsappBtn) whatsappBtn.classList.add("oculto");
    }

    function ocultar() {
        panel.classList.remove("abierto");
        fondo.classList.remove("visible");
        if (whatsappBtn) whatsappBtn.classList.add("oculto");
    }

    function renderizar(carrito) {
        lista.innerHTML = "";

        if (!carrito.length) {
            lista.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
            total.textContent = formatearPrecio(0);
            return;
        }

        carrito.forEach((producto) => {
            const subtotal = producto.precio * producto.cantidad;
            const elemento = document.createElement("div");
            elemento.className = "producto-carrito";

            const color = producto.color
                ? `<p class="producto-carrito-color">Color: ${producto.color}</p>`
                : "";

            elemento.innerHTML = `
                <div class="producto-carrito-imagen">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="producto-carrito-info">
                    <h4>${producto.nombre}</h4>
                    <p class="producto-carrito-talla">Talla: ${producto.talla}</p>
                    ${color}
                    <p class="producto-carrito-precio">${formatearPrecio(producto.precio)}</p>
                    <div class="producto-carrito-controles">
                        <div class="control-cantidad">
                            <button class="boton-restar" type="button">−</button>
                            <span>${producto.cantidad}</span>
                            <button class="boton-sumar" type="button">+</button>
                        </div>
                        <button class="boton-eliminar-carrito" type="button">Eliminar</button>
                    </div>
                    <p class="subtotal-producto">Subtotal: ${formatearPrecio(subtotal)}</p>
                </div>
            `;

            elemento
                .querySelector(".boton-sumar")
                .addEventListener("click", async (evento) => {
                    const boton = evento.currentTarget;
                    boton.disabled = true;
                    try { await aumentarCantidad(producto.claveCarrito); }
                    finally { boton.disabled = bloqueado; }
                });

            elemento
                .querySelector(".boton-restar")
                .addEventListener("click", async (evento) => {
                    const boton = evento.currentTarget;
                    boton.disabled = true;
                    try { await disminuirCantidad(producto.claveCarrito); }
                    finally { boton.disabled = bloqueado; }
                });

            elemento
                .querySelector(".boton-eliminar-carrito")
                .addEventListener("click", async (evento) => {
                    const boton = evento.currentTarget;
                    boton.disabled = true;
                    try { await eliminarProducto(producto.claveCarrito); }
                    finally { boton.disabled = bloqueado; }
                });

            elemento.querySelectorAll(".producto-carrito-controles button").forEach(b => b.disabled = bloqueado);
            lista.appendChild(elemento);
        });

        const totalCompra = carrito.reduce(
            (acumulado, producto) => acumulado + producto.precio * producto.cantidad,
            0
        );

        total.textContent = formatearPrecio(totalCompra);
    }

    window.addEventListener("cart:open", abrir);
    window.addEventListener("cart:close", ocultar);
    window.addEventListener("ui:escape", ocultar);
    cerrar.addEventListener("click", ocultar);
    fondo.addEventListener("click", ocultar);

    finalizar.addEventListener("click", () => {
        ocultar();
        window.dispatchEvent(new CustomEvent("checkout:open"));
    });

    suscribirCarrito(renderizar);
}

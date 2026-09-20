import { suscribirCarrito } from "../store/cartStore.js";

export function iniciarHeader() {
    const botonMenu = document.getElementById("botonMenu");
    const menu = document.getElementById("menu");
    const botonCarrito = document.getElementById("botonCarrito");
    const contadorCarrito = document.getElementById("contadorCarrito");

    botonMenu?.addEventListener("click", () => {
        menu?.classList.toggle("visible");
    });

    menu?.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => menu.classList.remove("visible"));
    });

    botonCarrito?.addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent("cart:open"));
    });

    suscribirCarrito((carrito) => {
        const cantidad = carrito.reduce((total, item) => total + item.cantidad, 0);
        if (contadorCarrito) contadorCarrito.textContent = cantidad;
    });
}

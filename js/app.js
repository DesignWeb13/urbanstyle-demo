import { iniciarHeader } from "./components/header.js";
import { iniciarCatalogo } from "./components/catalog.js";
import { iniciarProductoModal } from "./components/productModal.js";
import { iniciarCarrito } from "./components/cart.js";
import { iniciarCheckout } from "./components/checkout.js";
import { iniciarNewsletter } from "./components/newsletter.js";
iniciarHeader(); iniciarProductoModal(); iniciarCarrito(); iniciarCheckout(); iniciarNewsletter(); iniciarCatalogo();
document.addEventListener("keydown",e=>{if(e.key==="Escape")window.dispatchEvent(new CustomEvent("ui:escape"));});
document.querySelector(".whatsapp-btn")?.addEventListener("click",e=>{e.preventDefault();alert("Demostración: aquí se abriría el WhatsApp de la tienda.");});

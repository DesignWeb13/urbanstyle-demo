import { obtenerCarrito,obtenerSubtotal,vaciarCarrito } from "../store/cartStore.js";
import { formatearPrecio } from "../utils/currency.js";
export function iniciarCheckout(){
 const $=id=>document.getElementById(id),checkout=$("checkout"),form=$("formularioCheckout"),pago=$("checkoutPagoTarjeta"),msg=$("pagoMensaje");
 const fixture={nombre:"Cliente",apellidos:"Demostración",correoCheckout:"cliente@example.com",telefono:"0000000000",calle:"Calle de ejemplo",numero:"123",codigoPostal:"00000",colonia:"Centro",ciudad:"Ciudad de ejemplo",estado:"Estado de ejemplo"};
 function resumen(){
  $("checkoutProductos").replaceChildren();
  for(const p of obtenerCarrito()){
   const row=document.createElement("div");row.className="checkout-producto";
   const img=document.createElement("img");img.src=p.imagen;img.alt=p.nombre;
   const info=document.createElement("div");info.className="checkout-producto-info";
   const h=document.createElement("h4");h.textContent=p.nombre;const t=document.createElement("p");t.textContent=`Talla: ${p.talla} · Color: ${p.color} · Cantidad: ${p.cantidad}`;
   const amount=document.createElement("strong");amount.textContent=formatearPrecio(p.precio*p.cantidad);info.append(h,t);row.append(img,info,amount);$("checkoutProductos").append(row);
  }
  const envio=Number(document.querySelector('input[name="envio"]:checked')?.value||99);
  $("checkoutSubtotal").textContent=formatearPrecio(obtenerSubtotal());$("checkoutEnvio").textContent=formatearPrecio(envio);$("checkoutTotal").textContent=formatearPrecio(obtenerSubtotal()+envio);
 }
 function cerrar(){checkout.classList.remove("visible");document.body.style.overflow="";}
 function abrir(){
  if(!obtenerCarrito().length){alert("Agrega un producto para probar la demo.");return;}
  for(const [id,value] of Object.entries(fixture))$(id).value=value;
  form.style.display="";pago.hidden=true;resumen();checkout.classList.add("visible");document.body.style.overflow="hidden";
 }
 form.addEventListener("submit",e=>{e.preventDefault();form.style.display="none";pago.hidden=false;msg.textContent="Pedido DEMO · No se enviará información ni se realizará un cobro.";$("cardPaymentBrick_container").hidden=false;$("demoEditar").hidden=false;$("demoConsultar").hidden=true;$("demoReiniciar").hidden=true;});
 function aprobado(){msg.textContent="Simulación: pago aprobado. Tu pedido de ejemplo está confirmado. No se realizó ningún cobro.";$("cardPaymentBrick_container").hidden=true;$("demoConsultar").hidden=true;$("demoEditar").hidden=true;$("demoReiniciar").hidden=false;vaciarCarrito();}
 $("demoPagar").addEventListener("click",()=>{
  const result=$("demoResultado").value;
  if(result==="approved")aprobado();
  else if(result==="pending"){msg.textContent="Simulación: pago pendiente. Puedes simular su confirmación o volver al carrito.";$("cardPaymentBrick_container").hidden=true;$("demoConsultar").hidden=false;}
  else msg.textContent="Simulación: pago rechazado. Puedes seleccionar otro resultado y repetir la demostración.";
 });
 $("demoConsultar").addEventListener("click",aprobado);
 $("demoEditar").addEventListener("click",()=>{cerrar();window.dispatchEvent(new CustomEvent("cart:open"));});
 $("demoReiniciar").addEventListener("click",()=>{cerrar();form.reset();window.location.hash="productos";});
 $("cerrarCheckout").addEventListener("click",cerrar);window.addEventListener("ui:escape",cerrar);window.addEventListener("checkout:open",abrir);
 document.querySelectorAll('input[name="envio"]').forEach(r=>r.addEventListener("change",resumen));
}

export function iniciarNewsletter() {
 document.getElementById("formularioSuscripcion")?.addEventListener("submit",e=>{
  e.preventDefault(); document.getElementById("mensajeFormulario").textContent="Demostración: no se envió ni guardó tu correo."; e.target.reset();
 });
}

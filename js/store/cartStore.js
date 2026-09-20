import { productos } from "../data/products.js";
const KEY="urbanstyle.demo.carrito.v1";
let carrito=[];const subs=new Set();
try { const data=JSON.parse(localStorage.getItem(KEY)||"[]"); if(Array.isArray(data)) carrito=data.filter(x=>productos.some(p=>p.variantes.some(v=>v.idVariante===x.idVariante))&&Number.isInteger(x.cantidad)&&x.cantidad>0); } catch (_) {}
function notificar(){try{localStorage.setItem(KEY,JSON.stringify(carrito));}catch(_){} subs.forEach(fn=>fn(obtenerCarrito()));}
export function obtenerCarrito(){return structuredClone(carrito);}
export function obtenerSubtotal(){return carrito.reduce((s,p)=>s+p.precio*p.cantidad,0);}
export function suscribirCarrito(fn){subs.add(fn);fn(obtenerCarrito());return ()=>subs.delete(fn);}
export async function agregarProducto(producto,talla,cantidad=1){
 const base=productos.find(p=>p.variantes.some(v=>v.idVariante===producto.idVariante));
 const v=base?.variantes.find(v=>v.idVariante===producto.idVariante);const item=carrito.find(p=>p.idVariante===producto.idVariante);
 if(!v || !Number.isInteger(cantidad)||cantidad<1||(item?.cantidad||0)+cantidad>v.stockDisponible){alert("No hay más existencias de ejemplo para esa talla.");notificar();return false;}
 if(item)item.cantidad+=cantidad;
 else carrito.push({id:base.id,idVariante:v.idVariante,claveCarrito:`variante:${v.idVariante}`,nombre:base.nombre,imagen:base.imagenPrincipal,color:v.color,talla:v.talla,precio:v.precioOferta??v.precio,cantidad});
 notificar();return true;
}
export async function aumentarCantidad(clave){const p=carrito.find(p=>p.claveCarrito===clave);return p?agregarProducto(p,p.talla,1):false;}
export async function disminuirCantidad(clave){const p=carrito.find(p=>p.claveCarrito===clave);if(p){p.cantidad--;if(!p.cantidad)carrito=carrito.filter(x=>x!==p);}notificar();return true;}
export async function eliminarProducto(clave){carrito=carrito.filter(p=>p.claveCarrito!==clave);notificar();return true;}
export function vaciarCarrito(){carrito=[];notificar();}

import { productos } from "../data/products.js";
export async function obtenerProductos() { return structuredClone(productos); }
export async function obtenerProductoPorId(id) {
    const p=productos.find(p=>p.id===Number(id)); if(!p) throw new Error("Producto no encontrado");
    return structuredClone(p);
}

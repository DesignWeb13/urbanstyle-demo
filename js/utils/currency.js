export function formatearPrecio(precio) {
    return precio.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN"
    });
}

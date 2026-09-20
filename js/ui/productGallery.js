function obtenerContenedorMiniaturas() {
    let contenedor = document.getElementById("modalMiniaturas");

    if (contenedor) return contenedor;

    const bloqueImagen = document.querySelector("#modalProducto .modal-imagen");
    if (!bloqueImagen) return null;

    let galeria = bloqueImagen.closest(".galeria-producto");

    if (!galeria) {
        galeria = document.createElement("div");
        galeria.className = "galeria-producto";
        bloqueImagen.parentNode.insertBefore(galeria, bloqueImagen);
        galeria.appendChild(bloqueImagen);
    }

    contenedor = document.createElement("div");
    contenedor.id = "modalMiniaturas";
    contenedor.className = "miniaturas-producto";
    galeria.appendChild(contenedor);

    return contenedor;
}

export function renderizarGaleria(producto) {
    const imagenPrincipal = document.getElementById("modalImagen");
    const miniaturas = obtenerContenedorMiniaturas();

    if (!imagenPrincipal) return;

    const imagenes = Array.isArray(producto?.imagenes) ? producto.imagenes : [];

    if (miniaturas) miniaturas.innerHTML = "";

    if (!imagenes.length) {
        imagenPrincipal.removeAttribute("src");
        imagenPrincipal.alt = producto?.nombre || "Producto sin imagen";
        return;
    }

    const principal = imagenes.find((item) => item.esPrincipal) || imagenes[0];

    imagenPrincipal.src = principal.ruta;
    imagenPrincipal.alt = producto.nombre;

    if (!miniaturas) return;

    imagenes.forEach((item) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "miniatura-producto";
        boton.setAttribute("aria-label", `Ver imagen de ${producto.nombre}`);

        if (item.idImagen === principal.idImagen) {
            boton.classList.add("activa");
        }

        const miniatura = document.createElement("img");
        miniatura.src = item.ruta;
        miniatura.alt = producto.nombre;
        miniatura.loading = "lazy";

        boton.appendChild(miniatura);

        boton.addEventListener("click", () => {
            imagenPrincipal.src = item.ruta;

            miniaturas
                .querySelectorAll(".miniatura-producto")
                .forEach((elemento) => elemento.classList.remove("activa"));

            boton.classList.add("activa");
        });

        miniaturas.appendChild(boton);
    });
}

let varianteSeleccionada = null;

function obtenerElementoStock() {
    let stock = document.getElementById("modalStock");
    if (stock) return stock;

    const selector = document.getElementById("modalTalla")?.closest(".selector-producto");
    if (!selector) return null;

    stock = document.createElement("p");
    stock.id = "modalStock";
    stock.className = "stock-variante";
    selector.appendChild(stock);

    return stock;
}

function actualizarDisponibilidad(variante) {
    const stock = obtenerElementoStock();
    const cantidad = document.getElementById("modalCantidad");
    const agregar = document.getElementById("agregarDesdeModal");

    if (!variante) {
        if (stock) stock.textContent = "Producto agotado";
        if (agregar) agregar.disabled = true;
        if (cantidad) cantidad.removeAttribute("max");
        return;
    }

    if (stock) {
        stock.textContent = `Disponibles: ${variante.stockDisponible}`;
    }

    if (cantidad) {
        cantidad.max = String(variante.stockDisponible);

        if (
            Number(cantidad.value) > variante.stockDisponible ||
            Number(cantidad.value) <= 0
        ) {
            cantidad.value = "1";
        }
    }

    if (agregar) {
        agregar.disabled = variante.stockDisponible <= 0;
    }
}

export function renderizarVariantes(producto, onChange = null) {
    const select = document.getElementById("modalTalla");
    const agregar = document.getElementById("agregarDesdeModal");

    varianteSeleccionada = null;

    if (!select) return;

    select.innerHTML = "";

    const variantes = Array.isArray(producto?.variantes)
        ? producto.variantes
        : [];

    if (!variantes.length) {
        const opcion = document.createElement("option");
        opcion.textContent = "Sin disponibilidad";
        opcion.value = "";
        opcion.disabled = true;
        opcion.selected = true;
        select.appendChild(opcion);
        actualizarDisponibilidad(null);
        return;
    }

    variantes.forEach((variante) => {
        const opcion = document.createElement("option");
        opcion.value = String(variante.idVariante);
        opcion.textContent = variante.color
            ? `${variante.talla} - ${variante.color}`
            : variante.talla;

        if (variante.stockDisponible <= 0) {
            opcion.disabled = true;
            opcion.textContent += " - Agotado";
        }

        select.appendChild(opcion);
    });

    const primeraDisponible = variantes.find(
        (variante) => variante.stockDisponible > 0
    );

    if (!primeraDisponible) {
        select.selectedIndex = -1;
        actualizarDisponibilidad(null);
        return;
    }

    varianteSeleccionada = primeraDisponible;
    select.value = String(primeraDisponible.idVariante);
    actualizarDisponibilidad(primeraDisponible);
    if (agregar) agregar.disabled = false;

    onChange?.(primeraDisponible);

    select.onchange = () => {
        varianteSeleccionada =
            variantes.find(
                (variante) => variante.idVariante === Number(select.value)
            ) || null;

        actualizarDisponibilidad(varianteSeleccionada);
        onChange?.(varianteSeleccionada);
    };
}

export function obtenerVarianteSeleccionada() {
    return varianteSeleccionada;
}

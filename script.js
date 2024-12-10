// Selección del botón y los inputs
const moverBtn = document.getElementById("mover");
const origenInput = document.getElementById("origen");
const destinoInput = document.getElementById("destino");

// Función para mover una pieza
function moverPieza() {
    // Obtener valores de origen y destino
    const origenId = origenInput.value.toUpperCase();
    const destinoId = destinoInput.value.toUpperCase();

    // Validar que ambos campos estén llenos
    if (!origenId || !destinoId) {
        alert("Por favor, completa ambas casillas.");
        return;
    }

    // Seleccionar las celdas de origen y destino
    const origenCelda = document.getElementById(origenId);
    const destinoCelda = document.getElementById(destinoId);

    // Validar que las celdas existan
    if (!origenCelda || !destinoCelda) {
        alert("La casilla ingresada no es válida.");
        return;
    }

    // Validar que haya una pieza en la casilla de origen
    const pieza = origenCelda.querySelector("img");
    if (!pieza) {
        alert("No hay ninguna pieza en la casilla de origen.");
        return;
    }

    // Mover la pieza
    destinoCelda.innerHTML = origenCelda.innerHTML; // Copiar imagen al destino
    origenCelda.innerHTML = ""; // Vaciar la celda de origen
}

// Evento para el botón de mover
moverBtn.addEventListener("click", moverPieza);

"use strict";
var _a;
const cardContainer = document.getElementById('cardContainer');
// Función para mostrar el nombre en una tarjeta (ion-card)
function displayName(message) {
    // Si el mensaje es nulo, indefinido o vacío, lo dejamos vacío
    if (!message)
        message = "";
    // Crear la tarjeta (ion-card) y el contenido (ion-card-content)
    const card = document.createElement("ion-card");
    const cardContent = document.createElement("ion-card-content");
    // Añadir el mensaje al contenido de la tarjeta
    cardContent.textContent = message;
    card.appendChild(cardContent);
    // Añadir la tarjeta al contenedor (cardContainer)
    cardContainer === null || cardContainer === void 0 ? void 0 : cardContainer.appendChild(card);
}
// Función que recoge el valor del input y llama a displayName
function addName() {
    // Obtener el valor del ion-input
    const ionInput = document.getElementById("messageInput");
    // Llamar a displayName con el valor del input
    displayName(ionInput.value);
    // Limpiar el campo de entrada después de agregar la tarjeta
    ionInput.value = "";
}
// Añadir el evento de click al botón de enviar
(_a = document.getElementById("submitButton")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addName);

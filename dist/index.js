"use strict";
// import axios from "axios";
// import { Observable } from "rxjs";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
function showCard(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (input.trim()) {
                    resolve(`${input}`);
                }
                else {
                    reject(console.error("Petardazo"));
                }
            }, 2000);
        });
    });
}
const cardContainer = document.getElementById('cardContainer');
// Función para mostrar el nombre en una tarjeta (ion-card)
function displayName(message) {
    if (!message)
        message = ""; // Si el mensaje es nulo, indefinido o vacío, lo dejamos vacío
    // Crear la tarjeta (ion-card) y el contenido (ion-card-content)
    const card = document.createElement("ion-card");
    const cardTitle = document.createElement("ion-card-title");
    const cardContent = document.createElement("ion-card-content");
    // Añadir el mensaje al contenido de la tarjeta
    cardTitle.textContent = message;
    cardContent.textContent = "message";
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    cardContainer === null || cardContainer === void 0 ? void 0 : cardContainer.appendChild(card); // Añadir la tarjeta a cardContainer
}
// Función que recoge el valor del input y llama a displayName
function addName() {
    const ionInput = document.getElementById("messageInput"); // Obtener el valor del ion-input
    // Llamar a displayName con el valor del input
    showCard(ionInput.value).
        then((respuesta) => {
        displayName(respuesta);
    })
        .catch((error) => {
        console.error(error);
    });
    ionInput.value = ""; // Limpiar el campo de entrada después de agregar la tarjeta
}
// Añadir el evento de click al botón de enviar
(_a = document.getElementById("submitButton")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addName);

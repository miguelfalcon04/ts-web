// import { Observable } from "rxjs";

async function showCard(input: string): Promise<string>{
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(input.trim()){
        resolve(`${input}`);
      }else{
        reject(console.error("Petardazo"));
      }
    }, 2000);
  });
}

async function fetchImage() {
  try {
    const response = await fetch("https://picsum.photos/200/300");

    console.log(response);
    const img = new Image();
    img.onload
    return response;
    
  } catch (error) {
    console.error("Error al generar imagen");
  }
 
}

const cardContainer = document.getElementById('cardContainer');

// Función para mostrar el nombre en una tarjeta (ion-card)
function displayName(message: string | null | undefined): void {
  if (!message) message = ""; // Si el mensaje es nulo, indefinido o vacío, lo dejamos vacío

  // Crear la tarjeta (ion-card) y el contenido (ion-card-content)
  const card = document.createElement("ion-card");
  const cardTitle = document.createElement("ion-card-title");
  const cardContent = document.createElement("ion-card-content");
  
  // Añadir el mensaje al contenido de la tarjeta
  cardTitle.textContent = message;
  cardContent.textContent = "message";
  card.appendChild(cardTitle);
  card.appendChild(cardContent);

  cardContainer?.appendChild(card);   // Añadir la tarjeta a cardContainer
}

// Función que recoge el valor del input y llama a displayName
function addName() {
  const ionInput = (document.getElementById("messageInput") as HTMLInputElement);   // Obtener el valor del ion-input

  // Llamar a displayName con el valor del input
  showCard(ionInput.value).
    then((respuesta) => {
      displayName(respuesta);
    })
    .catch((error) =>{
      console.error(error)
    });   

  ionInput.value = "";  // Limpiar el campo de entrada después de agregar la tarjeta
}

// Añadir el evento de click al botón de enviar
document.getElementById("submitButton")?.addEventListener('click', addName);

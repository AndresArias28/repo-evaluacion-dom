// Genera 5 botones dinámicamente y usa forEach para asignarles un evento de clic que muestre su índice en la consola.

const contenedorBotones = document.querySelector('#bottones');
document.body.appendChild(contenedorBotones);

let botones = [];

for (let i = 0; i < 5; i++) {
    const button = document.createElement('button');
    button.textContent = `boton ${i + 1}`;
    contenedorBotones.appendChild(button);
    botones.push(button);
  }

  botones.forEach((button, index) => {
    button.addEventListener('click', () => {
      console.log(`Índice del botón: ${index + 1}`);	
    });
  });


//Selecciona todas las imágenes de una página y usa forEach para cambiar sus atributos alt a "Nueva descripción".
imagenes = document.querySelectorAll('img');
imagenes.forEach(imagen => {
    imagen.alt = ' imagen de Goku';
});
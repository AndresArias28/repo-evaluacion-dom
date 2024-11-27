//Consuma    api de ricck and mortyy y muéstreme mediante una lista o tabla ordenada
// Solution
fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(datos => {
        let elementoLista = document.createElement('ol');//crear elemento lista ordenada
        datos.results.forEach(personaje => {
            const item = document.createElement('li');
            item.textContent = personaje.name;
            elementoLista.appendChild(item);
        });
        document.body.appendChild(elementoLista);
    });
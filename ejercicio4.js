
// Solution
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(respuesta => respuesta.json())
    .then(datos => {
        let elementoLista = document.createElement('ul');
        datos.forEach(post => {
            const item = document.createElement('li');
            item.textContent = post.title;
            elementoLista.appendChild(item);
        });
        document.body.appendChild(elementoLista);
    });
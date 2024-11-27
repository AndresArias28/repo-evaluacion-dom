//Dado un array de objetos con propiedades como nombre y descripción, usa map para crear tarjetas (divs con contenido) y agregarlas al DOM.
const productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del Producto 1' },
    { nombre: 'Producto 2', descripcion: 'Descripción del Producto 2' },
    { nombre: 'Producto 3', descripcion: 'Descripción del Producto 3' },
    { nombre: 'Producto 4', descripcion: 'Descripción del Producto 4' },
];

productos.map((producto) => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    const nombre = document.createElement('h2');
    nombre.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(descripcion);

    document.body.appendChild(tarjeta);
});
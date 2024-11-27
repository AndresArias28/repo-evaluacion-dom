//Dado un array de tareas, utiliza map para generar una lista interactiva en el DOM con un botón "Eliminar" para cada tarea.

let tareas = [
    { id: 1, nombre: 'Tarea 1' },
    { id: 2, nombre: 'Tarea 2' },
    { id: 3, nombre: 'Tarea 3' },
    { id: 4, nombre: 'Tarea 4' },
    { id: 5, nombre: 'Tarea 5' },
]

tareas.map((tarea) => {
    const item = document.createElement('li');
    const buton = document.createElement('button');
    buton.textContent = 'Eliminar';
    buton.addEventListener('click', () => {
        item.remove();
    });
    item.textContent = tarea.nombre;
    item.appendChild(buton);
    document.querySelector('#lista').appendChild(item);
});
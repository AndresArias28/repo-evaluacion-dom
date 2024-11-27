/* Dado un array de objetos con datos de usuarios (nombre, edad, email), usa map para generar filas de una tabla en el DOM/*/

const usuarios = [
    { nombre: 'Ricardo', edad: 30, email: 'Mz9mO@example.com' },
    { nombre: 'Luis', edad: 40, email: '0nSxu@example.com' },
    { nombre: 'Monica', edad: 25, email: 'jVgkA@example.com' },
    { nombre: 'Eustacio', edad: 50, email: 'wL5oJ@example.com' },
    ];

    usuarios.map((usuario) => {
        const fila = document.createElement('tr');
        const celdaNombreN = document.createElement('td');
        const celdaEdadN = document.createElement('td');
        const celdaEmailN = document.createElement('td');

        celdaNombreN.textContent = usuario.nombre;
        celdaEdadN.textContent = usuario.edad;
        celdaEmailN.textContent = usuario.email;

        fila.appendChild(celdaNombreN);
        fila.appendChild(celdaEdadN);
        fila.appendChild(celdaEmailN);

        document.querySelector('#miTabla').appendChild(fila);
    });
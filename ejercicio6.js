// Consume una API pública y muestra solo los datos que cumplen con una condición (por ejemplo, usuarios con id menor a 5) en una tabla generada dinámicamente

fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(datos => {
        //crear elementos
        let tabla = document.createElement('table');
        let encabezado = document.createElement('tr');
        let encabezadoId = document.createElement('th');
        let nombre = document.createElement('th');
        //asignar valores a las columnas
        encabezadoId.textContent = 'Id';
        nombre.textContent = 'Name';
        //agregar elemento a la tabla
        encabezado.appendChild(encabezadoId);
        encabezado.appendChild(nombre);
        //agregar tabla al body
        tabla.appendChild(encabezado);
        //utlizar fultrar para fultrar los ids menores a 5
        datos.filter(user => user.id < 5).forEach(user => {
            let fila = document.createElement('tr');
            let celdaId = document.createElement('td');
            let celdaNombre = document.createElement('td');
   
            celdaId.textContent = user.id;  
            celdaNombre.textContent = user.name;
          
            fila.appendChild(celdaId);
            fila.appendChild(celdaNombre);
 
            tabla.appendChild(fila);
        });
        document.body.appendChild(tabla);
    })
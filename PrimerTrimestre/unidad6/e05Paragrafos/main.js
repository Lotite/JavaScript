document.addEventListener('DOMContentLoaded', function() {
    const textoParrafo = document.getElementById('textoParrafo');
    const colorFondo = document.getElementById('colorFondo');
    const botonCrear = document.getElementById('crearParrafo');
    const mensajeError = document.getElementById('mensajeError');
    const contenedorParrafos = document.getElementById('contenedorParrafos');

    botonCrear.addEventListener('click', function() {
        const texto = textoParrafo.value.trim();
        const color = colorFondo.value;

        if (texto === '') {
            mensajeError.textContent = 'Error: El texto no puede estar vacío.';
            return;
        }

        mensajeError.textContent = ''; // Limpiar mensaje de error previo

        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = texto;
        nuevoParrafo.style.backgroundColor = color;
        contenedorParrafos.appendChild(nuevoParrafo);

        // Limpiar el textarea después de crear el párrafo
        textoParrafo.value = '';
    });
});
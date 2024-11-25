function crearInput(tipo) {
    const nombre = prompt(`Ingrese el nombre para el input de ${tipo}:`);
    if (!nombre) return;

    let valor = '';
    if (tipo === 'checkbox' || tipo === 'radio') {
        valor = prompt(`Ingrese el valor para el input de ${tipo}:`) || '';
    }

    const contenedor = document.createElement('div');
    contenedor.className = 'form-group';

    const input = document.createElement('input');
    input.type = tipo;
    input.name = nombre;
    input.value = valor;
    input.id = `${tipo}-${Date.now()}`; // ID único para asociar con el label
    input.className = 'form-input';

    contenedor.appendChild(input);

    if (tipo === 'checkbox' || tipo === 'radio') {
        const label = document.createElement('label');
        label.setAttribute('for', input.id);
        label.className = 'inline-label';

        const span = document.createElement('span');
        span.textContent = valor;
        
        label.appendChild(span);
        contenedor.appendChild(label);
    }

    agregarElemento(contenedor);
    confirm(`Se ha creado un input de ${tipo} con nombre: ${nombre}${valor ? ` y valor: ${valor}` : ''}`);
}

function crearTextarea() {
    const nombre = prompt('Ingrese el nombre para el textarea:');
    if (!nombre) return;

    const textarea = document.createElement('textarea');
    textarea.name = nombre;
    textarea.cols = 40;
    textarea.rows = 5;
    textarea.className = 'form-textarea';

    agregarElemento(textarea);
    confirm(`Se ha creado un textarea con nombre: ${nombre}`);
}

function crearLabel() {
    const forAttr = prompt('Ingrese el nombre del input al que se refiere esta etiqueta:');
    if (!forAttr) return;

    const label = document.createElement('label');
    label.setAttribute('for', forAttr);
    label.textContent = `Etiqueta para ${forAttr}:`;

    agregarElemento(label);
    confirm(`Se ha creado una etiqueta para el input: ${forAttr}`);
}

function crearImagen() {
    const src = prompt('Ingrese la ruta de la imagen (URL):');
    if (!src) return;

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Imagen del Formulario';

    agregarElemento(img);
    confirm(`Se ha creado una imagen con ruta: ${src}`);
}

function crearSubmit() {
    const nombre = prompt('Ingrese el nombre para el botón de envío:');
    const valor = prompt('Ingrese el valor (texto) para el botón de envío:');
    if (!nombre || !valor) return;

    const boton = document.createElement('button');
    boton.type = 'submit';
    boton.name = nombre;
    boton.textContent = valor;
    boton.className = 'form-submit';

    agregarElemento(boton);
    confirm(`Se ha creado un botón de envío con nombre: ${nombre} y valor: ${valor}`);
}

function agregarElemento(elemento) {
    document.getElementById('formularioDinamico').appendChild(elemento);
}

document.getElementById('btnTexto').addEventListener('click', () => crearInput('text'));
document.getElementById('btnPassword').addEventListener('click', () => crearInput('password'));
document.getElementById('btnTextarea').addEventListener('click', crearTextarea);
document.getElementById('btnLabel').addEventListener('click', crearLabel);
document.getElementById('btnImagen').addEventListener('click', crearImagen);
document.getElementById('btnCheckbox').addEventListener('click', () => crearInput('checkbox'));
document.getElementById('btnRadio').addEventListener('click', () => crearInput('radio'));
document.getElementById('btnSubmit').addEventListener('click', crearSubmit);
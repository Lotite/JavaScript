document.addEventListener('DOMContentLoaded', function() {
    const botonAnalizar = document.getElementById('analizarPagina');
    const resultadoAnalisis = document.getElementById('resultadoAnalisis');
    const fileInput = document.getElementById('fileInput');
    const iframe = document.getElementById('paginaCargada');
    const botonAnalizarCargada = document.getElementById('analizarCargada');

    function analizarPagina(doc) {
        const parrafos = doc.getElementsByTagName('p');
        const enlaces = doc.getElementsByTagName('a');
        const enlacesMunicipio = Array.from(enlaces).filter(a => a.href.includes('/wiki/Municipio'));
        const parrafo1Enlaces = parrafos[0] ? parrafos[0].getElementsByTagName('a').length : 0;

        let resultado = `
            <p>Número de párrafos: ${parrafos.length}</p>
            <p>Texto del segundo párrafo: ${parrafos[1] ? parrafos[1].textContent : 'No existe'}</p>
            <p>Número de enlaces: ${enlaces.length}</p>
            <p>Dirección del primer enlace: ${enlaces[0] ? enlaces[0].href : 'No existe'}</p>
            <p>Dirección del penúltimo enlace: ${enlaces.length > 1 ? enlaces[enlaces.length - 2].href : 'No existe'}</p>
            <p>Número de enlaces que apuntan a /wiki/Municipio: ${enlacesMunicipio.length}</p>
            <p>Número de enlaces del primer párrafo: ${parrafo1Enlaces}</p>
        `;

        resultadoAnalisis.innerHTML = resultado;

        // Mostrar el texto de todos los elementos <p> en la consola
        Array.from(parrafos).forEach(p => console.log(p.textContent));
    }

    botonAnalizar.addEventListener('click', function() {
        analizarPagina(document);
    });

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                iframe.srcdoc = e.target.result;
                iframe.style.display = 'block';
                botonAnalizarCargada.disabled = false;
            };
            reader.readAsText(file);
        }
    });

    botonAnalizarCargada.addEventListener('click', function() {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        analizarPagina(iframeDoc);
    });
});
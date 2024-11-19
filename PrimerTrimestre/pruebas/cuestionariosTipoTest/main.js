const json = localStorage.getItem("examenes")
const examenes = [{
    "titulo": "Examen de Diseño Web",
    "preguntas": [
    {
    "enunciado": "¿Qué elemento de una página web se utiliza para la identificación del sitio y para dotarlo de una imagen distintiva?",
    "respuesta": "Cabecera o header",
    "opciones": ["Cabecera o header", "Pie de página o footer", "Sistemas de navegación", "Cuerpo"]
    },
    {
    "enunciado": "¿En qué zona de una interfaz web se encuentran las áreas de texto, imágenes y vídeos?",
    "respuesta": "Zona de contenido e interacción",
    "opciones": ["Zona de contenido e interacción", "Zona de navegación", "Cabecera", "Pie de página"]
    },
    {
    "enunciado": "¿Qué elemento de una página web muestra el nombre de todas las páginas que componen el sitio?",
    "respuesta": "Sistemas de navegación",
    "opciones": ["Sistemas de navegación", "Cabecera o header", "Pie de página o footer", "Cuerpo"]
    },
    {
    "enunciado": "¿Dónde se suele ubicar la información sobre los créditos, la licencia y el enlace a formularios de contacto?",
    "respuesta": "Pie de página o footer",
    "opciones": ["Pie de página o footer", "Cabecera o header", "Sistemas de navegación", "Cuerpo"]
    },
    {
    "enunciado": "¿Cuál de estos elementos NO es un elemento conceptual en el diseño?",
    "respuesta": "Color",
    "opciones": ["Color", "Punto", "Línea", "Plano"]
    },
    {
    "enunciado": "¿Qué son los formularios en un sitio web?",
    "respuesta": "Documentos interactivos utilizados para recoger información",
    "opciones": ["Documentos interactivos utilizados para recoger información", "Fuentes tipográficas", "Guías de estilo", "Lenguaje de programación"]
    },
    {
    "enunciado": "¿Qué son las fuentes seguras?",
    "respuesta": "Fuentes tipográficas que los usuarios tenían instaladas por defecto en su dispositivo",
    "opciones": ["Fuentes tipográficas que los usuarios tenían instaladas por defecto en su dispositivo", "Fuentes de diseño moderno", "Fuentes con licencia libre", "Fuentes descargables"]
    },
    {
    "enunciado": "¿Qué son las guías de estilo?",
    "respuesta": "Documentos con directrices que permiten la normalización de estilos",
    "opciones": ["Documentos con directrices que permiten la normalización de estilos", "Herramientas de diseño", "Lenguajes de programación", "Plantillas predefinidas"]
    },
    {
    "enunciado": "¿Qué es HTML?",
    "respuesta": "Lenguaje de marcado de hipertexto utilizado en las páginas web",
    "opciones": ["Lenguaje de marcado de hipertexto utilizado en las páginas web", "Lenguaje de programación orientado a objetos", "Sistema de gestión de bases de datos", "Protocolo de comunicación"]
    },
    {
    "enunciado": "¿Qué es HTML5?",
    "respuesta": "Última versión del lenguaje para la programación de páginas web HTML",
    "opciones": ["Última versión del lenguaje para la programación de páginas web HTML", "Herramienta de diseño gráfico", "Software de edición de vídeo", "Gestor de contenidos"]
    },
    {
    "enunciado": "¿Qué es la legibilidad en tipografía?",
    "respuesta": "Facilidad de lectura de una letra",
    "opciones": ["Facilidad de lectura de una letra", "Tamaño de la fuente", "Estilo de la fuente", "Color de la fuente"]
    },
    {
    "enunciado": "¿Qué son los marcos en diseño web?",
    "respuesta": "Ventanas independientes incorporadas dentro de la página general",
    "opciones": ["Ventanas independientes incorporadas dentro de la página general", "Elementos de diseño gráfico", "Herramientas de navegación", "Estilos de formato"]
    },
    {
    "enunciado": "¿Qué es la tipografía?",
    "respuesta": "Tipo de letra que se escoge para un determinado diseño",
    "opciones": ["Tipo de letra que se escoge para un determinado diseño", "Tamaño de la letra", "Color de la letra", "Espacio entre letras"]
    },
    {
    "enunciado": "¿Cuál es una característica principal del lenguaje HTML?",
    "respuesta": "Sencillez",
    "opciones": ["Sencillez", "Complejidad", "Obscurecimiento", "Dificultad"]
    },
    {
    "enunciado": "¿Qué significa que HTML no se compila?",
    "respuesta": "Se interpreta por el propio navegador",
    "opciones": ["Se interpreta por el propio navegador", "Se traduce a lenguaje máquina", "Se ejecuta en un servidor", "Se almacena en una base de datos"]
    },
    {
    "enunciado": "¿Cómo se llaman las instrucciones en HTML?",
    "respuesta": "Etiquetas",
    "opciones": ["Etiquetas", "Comandos", "Funciones", "Procedimientos"]
    },
    {
    "enunciado": "¿Qué permite HTML?",
    "respuesta": "Escribir hipertexto",
    "opciones": ["Escribir hipertexto", "Crear animaciones", "Diseñar gráficos 3D", "Gestionar bases de datos"]
    },
    {
    "enunciado": "¿Qué son los elementos semánticos en HTML5?",
    "respuesta": "Generan divisiones en el documento y describen al navegador su propósito",
    "opciones": ["Generan divisiones en el documento y describen al navegador su propósito", "Estilos visuales para el contenido", "Scripts para la interacción del usuario", "Animaciones y efectos especiales"]
    },
    {
    "enunciado": "¿Para qué se utiliza la etiqueta <article>?",
    "respuesta": "Describir las unidades de contenido",
    "opciones": ["Describir las unidades de contenido", "Crear un menú de navegación", "Definir la barra lateral", "Mostrar el pie de página"]
    },
    {
    "enunciado": "¿Qué define la etiqueta <aside>?",
    "respuesta": "Barra lateral de una página web",
    "opciones": ["Barra lateral de una página web", "Contenido principal del documento", "Cabecera del sitio web", "Pie de página del sitio web"]
    },
    {
    "enunciado": "¿Qué representa la etiqueta <footer>?",
    "respuesta": "Pie de página",
    "opciones": ["Pie de página", "Cabecera del sitio", "Menú de navegación", "Contenido principal"]
    },
    {
    "enunciado": "¿Qué define la etiqueta <header>?",
    "respuesta": "Parte superior de la página web",
    "opciones": ["Parte superior de la página web", "Pie de página del sitio", "Barra lateral de la página", "Cuerpo del documento"]
    },
    {
    "enunciado": "¿Qué representa la etiqueta <main>?",
    "respuesta": "Contenido principal del 'body' de un documento",
    "opciones": ["Contenido principal del 'body' de un documento", "Cabecera del sitio web", "Pie de página del sitio web", "Barra lateral de la página"]
    },
    {
    "enunciado": "¿Qué crea la etiqueta <nav>?",
    "respuesta": "Menú de navegación",
    "opciones": ["Menú de navegación", "Cabecera del sitio", "Pie de página del sitio", "Contenido principal"]
    },
    {
    "enunciado": "¿Para qué se utiliza la etiqueta <section>?",
    "respuesta": "Crear diferentes secciones dentro de una misma página web",
    "opciones": ["Crear diferentes secciones dentro de una misma página web", "Definir la estructura del documento", "Insertar imágenes y vídeos", "Crear formularios interactivos"]
    },
    {
    "enunciado": "¿Qué representa la etiqueta <time>?",
    "respuesta": "Hora y fecha en una página web",
    "opciones": ["Hora y fecha en una página web", "Duración de un evento", "Periodo de validez", "Fecha límite"]
    },
    {
    "enunciado": "¿Qué función tiene la etiqueta <email> en los formularios de HTML5?",
    "respuesta": "Crea un campo para introducir el correo electrónico y realiza una validación automática",
    "opciones": ["Crea un campo para introducir el correo electrónico y realiza una validación automática", "Envía un correo electrónico al servidor", "Valida la dirección IP del usuario", "Cifra la información del formulario"]
    },
    {
    "enunciado": "¿Para qué se utiliza la etiqueta <mark>?",
    "respuesta": "Representar un texto resaltado o subrayado",
    "opciones": ["Representar un texto resaltado o subrayado", "Cambiar el color del texto", "Aumentar el tamaño del texto", "Insertar un enlace en el texto"]
    },
    {
    "enunciado": "¿Qué representa la etiqueta <figure>?",
    "respuesta": "Contenido de carácter visual como imágenes, ilustraciones, diagramas, etc.",
    "opciones": ["Contenido de carácter visual como imágenes, ilustraciones, diagramas, etc.", "Texto con formato especial", "Código fuente de un programa", "Datos numéricos y estadísticos"]
    },
    {
    "enunciado": "¿Qué función tiene la etiqueta <figcaption>?",
    "respuesta": "Añade un título a una figura",
    "opciones": ["Añade un título a una figura", "Inserta una imagen en la página", "Crea un enlace a un archivo multimedia", "Define el tamaño de la figura"]
    },
    {
    "enunciado": "¿Cuál es la finalidad de la etiqueta <details>?",
    "respuesta": "Mostrar información adicional de algún elemento de la página web",
    "opciones": ["Mostrar información adicional de algún elemento de la página web", "Ocultar contenido irrelevante", "Mejorar la estética del sitio", "Reducir el tiempo de carga"]
    },
    {
    "enunciado": "¿Qué incorpora la etiqueta <summary>?",
    "respuesta": "Un sumario de la etiqueta <details>",
    "opciones": ["Un sumario de la etiqueta <details>", "Una descripción detallada del contenido", "Un enlace a una fuente externa", "Una lista de opciones"]
    }
    ]
    }];
const preguntas = []
let posicion = 0;
let maxPos = 0
//examenes.push({ titulo: "Diseño web", preguntas: preguntas })
//let examen = { titulo: "", preguntas: "" }
//let pregunta = { enunciado: "", respuesta: "", opciones: [] }



//<div class="examen"><p>Segundo Examen de Diseño web</p><button class="btn btn-eliminar btn-outline-dark btn-light">Eliminar</button></div>


function render() {
    document.querySelector("#examenes").innerHTML = "";
    examenes.forEach((examen, index) => {
        const div = document.createElement("div");
        div.classList.add("examen")
        div.innerHTML = `<p>${examen.titulo}</p><button class="btn btn-eliminar btn-outline-dark btn-light">Eliminar</button>`
        const btn = div.querySelector("button")
        btn.addEventListener("click", () => {
            div.remove();
            examenes.splice(index, 1);
        })
        const p = div.querySelector("p")
        p.addEventListener("click", () => {
            imprimirPreguntas(index)
        })
        document.querySelector("#examenes").appendChild(div)
    });
}



function imprimirPreguntas(index) {
    preguntas.push(...examenes[index].preguntas);
    maxPos = preguntas.length
    document.querySelector("#menu").style.display = "none"
    document.querySelector("#preguntas").style.display = "flex"
    preguntas.sort(() => Math.random() > 0.5 ? 1 : -1)
    imprimirPregunta()
    document.querySelector("#siguiente").addEventListener("click", () => { cambiarPregunta(1) })
    document.querySelector("#anterior").addEventListener("click", () => { cambiarPregunta(-1) })
}



function cambiarPregunta(num) {
    if (posicion + num >= 0 && num + posicion < maxPos) {
        posicion += num
        imprimirPregunta()
    }
}


function imprimirPregunta() {
    let enunciado = document.querySelector("#preguntas").querySelector("h3")
    const pregunta = preguntas[posicion]
    enunciado.textContent = `${pregunta.enunciado}  posicion: ${posicion+1} de 50`;
    pregunta.opciones.sort(() => Math.random() > 0.5 ? 1 : -1)
    imprimirOpciones(pregunta.opciones, pregunta.respuesta)
}
//<div class="opcion"><label><input type="radio" name="pregunta1"><span>Respuesta1</span></label></div>
function imprimirOpciones(opciones, respuesta) {
    const padre = document.querySelector("#preguntas").querySelector("#opciones")
    padre.innerHTML = "";
    opciones.forEach(opcion => {
        const div = document.createElement("div")
        div.classList.add("opcion");
        div.innerHTML = `<label><input type="radio" name="pregunta1"><span></span></label>`
        const span = div.querySelector("span")
        span.textContent = opcion
        const check = div.querySelector("input")
        check.addEventListener("click", () => {
            alert(opcion == respuesta)
        })
        padre.appendChild(div)
    });

}


function cargarExamen(examen) {
    let examenesGuardados = JSON.parse(localStorage.getItem("examenes")) || [];
    if (examenesGuardados) {
        localStorage.setItem("examenes", JSON.stringify([...examenesGuardados, examen]))
    }
}

render()


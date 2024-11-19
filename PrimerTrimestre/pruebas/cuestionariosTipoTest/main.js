const json = localStorage.getItem("examenes")
const examenes = [
    {
      "titulo": "Desarrollo Web",
      "preguntas": [
        {
          "enunciado": "¿Cuál de los siguientes NO es un componente principal de una interfaz web?",
          "respuesta": "Zona de desarrollo",
          "opciones": [
            "Zona de navegación",
            "Zona de contenido e interacción",
            "Zona de desarrollo",
            "Cabecera"
          ]
        },
        {
          "enunciado": "¿Cuál es el propósito principal de la zona de navegación en una interfaz web?",
          "respuesta": "Permitir a los usuarios acceder a todos los contenidos del sitio web",
          "opciones": [
            "Mostrar el contenido principal del sitio web",
            "Permitir a los usuarios acceder a todos los contenidos del sitio web",
            "Mostrar información de contacto y derechos de autor",
            "Resaltar el logotipo y la marca del sitio web"
          ]
        },
        {
          "enunciado": "¿Qué dos elementos son esenciales para una navegación efectiva en un sitio web, según el texto?",
          "respuesta": "Indicación de la ubicación actual del usuario e índice de contenidos globales",
          "opciones": [
            "Un mapa del sitio y una barra de búsqueda",
            "Indicación de la ubicación actual del usuario e índice de contenidos globales",
            "Botones de redes sociales y un formulario de contacto",
            "Animaciones y efectos visuales atractivos"
          ]
        },
        {
          "enunciado": "¿Dónde se ubica típicamente el contenido principal de un sitio web?",
          "respuesta": "En la zona de contenido e interacción",
          "opciones": [
            "En la cabecera",
            "En el pie de página",
            "En la zona de navegación",
            "En la zona de contenido e interacción"
          ]
        },
        {
          "enunciado": "¿Cuál es el propósito principal de la cabecera en una página web?",
          "respuesta": "Identificar el sitio web y darle una imagen distintiva",
          "opciones": [
            "Mostrar la información de contacto",
            "Proporcionar un menú de navegación",
            "Identificar el sitio web y darle una imagen distintiva",
            "Mostrar el contenido principal de la página"
          ]
        },
        {
          "enunciado": "¿Es obligatorio incluir una cabecera en todas las páginas de un sitio web?",
          "respuesta": "No, pero es recomendable.",
          "opciones": [
            "Sí, siempre.",
            "No, pero es recomendable.",
            "Solo es obligatoria en la página de inicio.",
            "Solo es obligatoria si se incluye un pie de página."
          ]
        },
        {
          "enunciado": "¿Dónde se suele ubicar el sistema de navegación en una página web?",
          "respuesta": "Debajo de la cabecera o en la parte izquierda",
          "opciones": [
            "Debajo de la cabecera o en la parte izquierda",
            "En la parte superior derecha",
            "En el pie de página",
            "Solo en la página de inicio"
          ]
        },
        {
          "enunciado": "¿Qué información se suele incluir en el pie de página de una página web?",
          "respuesta": "Créditos, licencia, enlace a formularios de contacto",
          "opciones": [
            "El logotipo y el nombre del sitio web",
            "El menú principal de navegación",
            "Créditos, licencia, enlace a formularios de contacto",
            "El contenido principal de la página"
          ]
        },
        {
          "enunciado": "¿Qué es el \"cuerpo\" de una página web?",
          "respuesta": "La parte central donde se muestra la información principal",
          "opciones": [
            "La cabecera de la página",
            "La parte central donde se muestra la información principal",
            "El pie de página",
            "La zona de navegación"
          ]
        },
        {
          "enunciado": "¿Qué se recomienda en cuanto al diseño de los elementos del \"cuerpo\" de una página web?",
          "respuesta": "Que todos los elementos tengan un diseño uniforme y similar entre las páginas",
          "opciones": [
            "Que cada página tenga un diseño único y diferente",
            "Que todos los elementos tengan un diseño uniforme y similar entre las páginas",
            "Que se utilicen colores brillantes y llamativos en cada elemento",
            "Que se evite el uso de imágenes y elementos multimedia"
          ]
        },
        {
          "enunciado": "¿Qué son los elementos conceptuales en el diseño web?",
          "respuesta": "Elementos que no son visibles, como el punto, la línea, el plano y el volumen",
          "opciones": [
            "Elementos visuales como imágenes y colores",
            "Elementos que no son visibles, como el punto, la línea, el plano y el volumen",
            "Elementos interactivos, como botones y formularios",
            "Elementos de navegación, como menús y enlaces"
          ]
        },
        {
          "enunciado": "¿Cuál de los siguientes NO es un elemento conceptual en el diseño web?",
          "respuesta": "Color",
          "opciones": [
            "Punto",
            "Línea",
            "Color",
            "Plano"
          ]
        },
        {
          "enunciado": "¿Qué son los formularios en un sitio web?",
          "respuesta": "Documentos interactivos para recoger información del usuario",
          "opciones": [
            "Elementos visuales para mejorar el diseño",
            "Documentos interactivos para recoger información del usuario",
            "Scripts que añaden funciones avanzadas a la página",
            "Animaciones para hacer la página más atractiva"
          ]
        },
        {
          "enunciado": "¿Qué son las \"fuentes seguras\" en el diseño web?",
          "respuesta": "Fuentes tipográficas que los usuarios tenían instaladas por defecto en su dispositivo",
          "opciones": [
            "Fuentes descargadas de sitios web confiables",
            "Fuentes que evitan problemas de seguridad en la página",
            "Fuentes tipográficas que los usuarios tenían instaladas por defecto en su dispositivo",
            "Fuentes que usan cifrado para proteger la información"
          ]
        },
        {
          "enunciado": "¿Cuál es el propósito de las \"guías de estilo\" en el desarrollo web?",
          "respuesta": "Normalizar los estilos y ofrecer una apariencia uniforme al sitio web",
          "opciones": [
            "Proporcionar instrucciones para la creación de animaciones",
            "Definir la estructura de la base de datos del sitio web",
            "Normalizar los estilos y ofrecer una apariencia uniforme al sitio web",
            "Enseñar a los usuarios cómo navegar por el sitio web"
          ]
        },
        {
          "enunciado": "¿Qué significa HTML?",
          "respuesta": "HyperText Markup Language",
          "opciones": [
            "HyperText Markup Language",
            "High Technology Modern Language",
            "Home Tool for Managing Links",
            "Hyperlink and Text Management Language"
          ]
        },
        {
          "enunciado": "¿Cuál es la principal diferencia entre HTML y HTML5?",
          "respuesta": "HTML5 es la última versión del lenguaje HTML e incorpora nuevas etiquetas y funcionalidades",
          "opciones": [
            "HTML5 es más antiguo y ya no se utiliza",
            "HTML5 es la última versión del lenguaje HTML e incorpora nuevas etiquetas y funcionalidades",
            "HTML5 solo se utiliza para crear sitios web móviles",
            "HTML5 no permite el uso de elementos multimedia"
          ]
        },
        {
          "enunciado": "¿Cuál de las siguientes NO es una característica principal de HTML?",
          "respuesta": "Se compila antes de ejecutarse",
          "opciones": [
            "Sencillez",
            "No hay variables",
            "Se compila antes de ejecutarse",
            "Se interpreta por el propio navegador"
          ]
        },
        {
          "enunciado": "¿Cómo se llaman las instrucciones en HTML?",
          "respuesta": "Etiquetas",
          "opciones": [
            "Comandos",
            "Funciones",
            "Etiquetas",
            "Variables"
          ]
        },
        {
          "enunciado": "¿Qué es el hipertexto en el contexto de HTML?",
          "respuesta": "Texto que incluye enlaces a otros documentos o recursos",
          "opciones": [
            "Texto con formato especial, como negrita o cursiva",
            "Texto que incluye enlaces a otros documentos o recursos",
            "Texto escrito en un lenguaje de programación",
            "Texto que se muestra en una ventana emergente"
          ]
        },
        {
          "enunciado": "¿Qué son los elementos semánticos en HTML5?",
          "respuesta": "Etiquetas que describen al navegador el propósito del contenido",
          "opciones": [
            "Etiquetas que definen la apariencia visual de la página",
            "Etiquetas que describen al navegador el propósito del contenido",
            "Etiquetas que añaden animaciones y efectos especiales",
            "Etiquetas que permiten la interacción con bases de datos"
          ]
        },
        {
          "enunciado": "¿Para qué se utiliza la etiqueta <article> en HTML5?",
          "respuesta": "Para describir las unidades de contenido de una página",
          "opciones": [
            "Para definir la barra lateral de una página web",
            "Para describir las unidades de contenido de una página",
            "Para crear el pie de página de un sitio web",
            "Para definir el menú principal de navegación"
          ]
        },
        {
          "enunciado": "¿Qué tipo de contenido suele incluirse en la etiqueta <aside>?",
          "respuesta": "Elementos que enlazan a otros sitios web o redes sociales",
          "opciones": [
            "El contenido principal de la página",
            "Elementos que enlazan a otros sitios web o redes sociales",
            "Información de contacto y derechos de autor",
            "El menú principal de navegación"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta se utiliza para crear el pie de página de un sitio web?",
          "respuesta": "<footer>",
          "opciones": [
            "<footer>",
            "<header>",
            "<section>",
            "<nav>"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta representa el contenido principal del cuerpo de un documento HTML5?",
          "respuesta": "<main>",
          "opciones": [
            "<main>",
            "<article>",
            "<section>",
            "<div>"
          ]
        },
        {
          "enunciado": "¿Para qué se utiliza la etiqueta <nav>?",
          "respuesta": "Para crear un menú de navegación",
          "opciones": [
            "Para crear un menú de navegación",
            "Para definir una sección de contenido",
            "Para insertar una imagen",
            "Para crear un formulario"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta se utiliza para crear diferentes secciones dentro de una misma página web?",
          "respuesta": "<section>",
          "opciones": [
            "<section>",
            "<article>",
            "<header>",
            "<footer>"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta se utiliza para representar la hora y la fecha en una página web?",
          "respuesta": "<time>",
          "opciones": [
            "<date>",
            "<time>",
            "<calendar>",
            "<clock>"
          ]
        },
        {
          "enunciado": "¿Qué nueva etiqueta en HTML5 facilita la introducción y validación del correo electrónico en formularios?",
          "respuesta": "<input type=\"email\">",
          "opciones": [
            "<email>",
            "<input type=\"email\">",
            "<mail>",
            "<address>"
          ]
        },
        {
          "enunciado": "¿Para qué se utiliza la etiqueta <mark>?",
          "respuesta": "Para resaltar un texto subrayándolo",
          "opciones": [
            "Para crear una lista numerada",
            "Para insertar un salto de línea",
            "Para resaltar un texto subrayándolo",
            "Para crear un enlace a otro documento"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta representa contenido visual como imágenes, ilustraciones y diagramas?",
          "respuesta": "<figure>",
          "opciones": [
            "<img>",
            "<picture>",
            "<figure>",
            "<visual>"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta se utiliza para añadir un título a una figura?",
          "respuesta": "<figcaption>",
          "opciones": [
            "<figcaption>",
            "<figuretitle>",
            "<imgtitle>",
            "<title>"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta permite mostrar información adicional de un elemento de la página web, similar a un menú acordeón?",
          "respuesta": "<details>",
          "opciones": [
            "<details>",
            "<summary>",
            "<accordion>",
            "<extra>"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta añade un sumario a la información mostrada con la etiqueta <details>?",
          "respuesta": "<summary>",
          "opciones": [
            "<summary>",
            "<detailsummary>",
            "<description>",
            "<info>"
          ]
        },
        {
          "enunciado": "¿Cuál es la importancia de la legibilidad en una familia tipográfica?",
          "respuesta": "Que sea fácil de leer y comprender",
          "opciones": [
            "Que sea visualmente atractiva y moderna",
            "Que sea fácil de leer y comprender",
            "Que sea compatible con todos los navegadores",
            "Que tenga una gran variedad de estilos y pesos"
          ]
        },
        {
          "enunciado": "¿Qué son los marcos (\"frames\") en el diseño web?",
          "respuesta": "Ventanas independientes dentro de la página general (obsoleto en HTML5)",
          "opciones": [
            "Bordes decorativos alrededor de las imágenes",
            "Ventanas independientes dentro de la página general (obsoleto en HTML5)",
            "Estructuras que dividen la página en columnas",
            "Animaciones que crean un efecto de movimiento"
          ]
        },
        {
          "enunciado": "¿Qué significa \"tipografía\" en el contexto del diseño web?",
          "respuesta": "El tipo de letra que se escoge para un diseño",
          "opciones": [
            "El tamaño de la fuente del texto",
            "El color del texto",
            "El tipo de letra que se escoge para un diseño",
            "La alineación del texto (izquierda, derecha, centrado)"
          ]
        },
        {
          "enunciado": "¿Cuál de las siguientes opciones describe mejor la relación entre <div> y <section> en HTML5?",
          "respuesta": "<section> se utiliza para crear secciones con un propósito específico, mientras que <div> es una división genérica",
          "opciones": [
            "<section> ha reemplazado por completo a <div>, que ya no se utiliza",
            "<section> se utiliza para crear secciones con un propósito específico, mientras que <div> es una división genérica",
            "<div> solo se utiliza para crear la estructura básica de la página, mientras que <section> se utiliza para el contenido",
            "<div> y <section> son etiquetas intercambiables que se pueden usar indistintamente"
          ]
        },
        {
          "enunciado": "¿Cuál es la ventaja de utilizar elementos semánticos en HTML5?",
          "respuesta": "Facilitan la comprensión del código por parte de los desarrolladores y los motores de búsqueda",
          "opciones": [
            "Mejoran la velocidad de carga de la página",
            "Facilitan la comprensión del código por parte de los desarrolladores y los motores de búsqueda",
            "Permiten crear diseños más complejos y visualmente atractivos",
            "Reducen el tamaño del archivo HTML"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta NO es un elemento semántico en HTML5?",
          "respuesta": "<div>",
          "opciones": [
            "<article>",
            "<nav>",
            "<div>",
            "<footer>"
          ]
        },
        {
          "enunciado": "Si deseas crear una página web con una barra lateral para mostrar enlaces a redes sociales, ¿qué etiqueta HTML5 utilizarías?",
          "respuesta": "<aside>",
          "opciones": [
            "<article>",
            "<aside>",
            "<nav>",
            "<footer>"
          ]
        },
        {
          "enunciado": "Quieres destacar una frase importante en un párrafo de texto. ¿Qué etiqueta HTML5 utilizarías?",
          "respuesta": "<mark>",
          "opciones": [
            "<strong>",
            "<mark>",
            "<important>",
            "<b>"
          ]
        },
        {
          "enunciado": "Estás creando una página web con un artículo que incluye una imagen con una leyenda. ¿Qué etiquetas HTML5 utilizarías para estructurar este contenido?",
          "respuesta": "<article>, <figure>, <figcaption>",
          "opciones": [
            "<article>, <img>, <figcaption>",
            "<section>, <figure>, <img>",
            "<article>, <figure>, <figcaption>",
            "<div>, <img>, <p>"
          ]
        },
        {
          "enunciado": "Necesitas agregar un formulario de contacto en el pie de página de tu sitio web. ¿Qué etiqueta HTML5 te permite hacerlo?",
          "respuesta": "<form>",
          "opciones": [
            "<footer>",
            "<contact>",
            "<form>",
            "<section>"
          ]
        },
        {
          "enunciado": "Quieres crear un menú de navegación con enlaces a las diferentes secciones de tu sitio web. ¿Qué etiqueta HTML5 es la más adecuada?",
          "respuesta": "<nav>",
          "opciones": [
            "<nav>",
            "<menu>",
            "<ul>",
            "<links>"
          ]
        },
        {
          "enunciado": "¿Cómo se crea un enlace a una página web externa en HTML?",
          "respuesta": "<a href=\"URL\">Texto del enlace</a>",
          "opciones": [
            "<a href=\"URL\">Texto del enlace</a>",
            "<link href=\"URL\">",
            "<href=\"URL\">Texto del enlace</href>",
            "<url=\"URL\">Texto del enlace</url>"
          ]
        },
        {
          "enunciado": "¿Qué atributo se utiliza para especificar la URL de una imagen en HTML?",
          "respuesta": "src",
          "opciones": [
            "src",
            "href",
            "alt",
            "url"
          ]
        },
        {
          "enunciado": "¿Qué atributo se utiliza para proporcionar una descripción alternativa de una imagen en HTML?",
          "respuesta": "alt",
          "opciones": [
            "alt",
            "title",
            "desc",
            "text"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta HTML5 se utiliza para insertar un salto de línea?",
          "respuesta": "<br>",
          "opciones": [
            "<br>",
            "<newline>",
            "<p>",
            "<linebreak>"
          ]
        },
        {
          "enunciado": "¿Qué etiqueta HTML5 se utiliza para crear un encabezado de nivel 1?",
          "respuesta": "<h1>",
          "opciones": [
            "<h1>",
            "<header>",
            "<head>",
            "<h2>"
          ]
        }
      ]
    }
  ];
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
    enunciado.textContent = `${pregunta.enunciado}  posicion: ${posicion + 1} de 50`;
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
            const alert = document.querySelector(".alert")
            alert.classList.add(opcion == respuesta ? "alert-success" : "alert-danger")
            alert.querySelector("strong").textContent = opcion == respuesta ? "Bien hecho" : "Incorrecto"
            setTimeout(() => {
                alert.classList.remove("alert-success", "alert-danger")
                alert.querySelector("strong").textContent = ""
            }, 500)
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


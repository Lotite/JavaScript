//Variables globales
const json = localStorage.getItem("examenes")
const examenes = json ? JSON.parse(json) : []
let preguntas = []
let respuestas = [];
let posicion = 0;
let maxPos = 0
let selecionado = false;

//examenes.push({ titulo: "Diseño web", preguntas: preguntas })
//let examen = { titulo: "", preguntas: "" }
//let pregunta = { enunciado: "", respuesta: "", opciones: [] }



//<div class="examen"><p>Segundo Examen de Diseño web</p><button class="btn btn-eliminar btn-outline-dark btn-light">Eliminar</button></div>

//Eventos
addEventListener("contextmenu", e => {
    e.preventDefault()
})
addEventListener("mousedown", () => {
    document.querySelector("#context-menu").style.display = "none"
    selecionado = false
})

document.querySelector("#abrir").addEventListener("mousedown", (e) => {
    if (selecionado !== false) {
        imprimirPreguntas(selecionado)
    }
})


document.querySelector("#imprimir").addEventListener("mousedown", (e) => {
    if (selecionado !== false) {
        imprimirPDF()
        print()
        render()
    }
})




document.querySelector("#eliminar").addEventListener("mousedown", (e) => {
    if (e.button === 0 && selecionado !== false) {
        examenes.splice(selecionado, 1)
        localStorage.setItem("examenes", JSON.stringify(examenes))
        render()
    }
})
document.querySelector("#codificar").addEventListener("mousedown", (e) => {
    if (e.button === 0 && selecionado !== false) {
        let jso = JSON.stringify(examenes[selecionado])
        navigator.clipboard.writeText(jso)
    }
})

document.querySelector("#addPregunta").addEventListener("click", () => {
    let json = JSON.parse(prompt("Ingresa Tu examen en json aqui"))
    examenes.push(json)
    localStorage.setItem("examenes", JSON.stringify(examenes))
    render()
});

document.querySelector("#editar").addEventListener("mousedown", (e) => {
    if (e.button === 0 && selecionado !== false) {
        editarExamen(selecionado);
    }
})


document.querySelector("#makePregunta").addEventListener("click", () => {
    crear()
})

document.querySelector("#addCrearPregunta").addEventListener("click", () => {
    agregarElemento("pregunta")
});

document.querySelector("#bCrearExamen").addEventListener("click", () => {
    guardarExamen()
});

document.querySelector("#cancelarCrearExamen").addEventListener("click", () => {
    render()
})
document.querySelector("#cancelarHacerExamen").addEventListener("click", () => {
    render()
})


//////Funciones

function cargarExamen(examen) {
    let examenesGuardados = JSON.parse(localStorage.getItem("examenes")) || []
    examenesGuardados.push(examen)
    if (examenesGuardados.length > 0) {
        localStorage.setItem("examenes", JSON.stringify(examenesGuardados))
    }
}

function ocultrarTodo() {
    document.querySelectorAll("main > *").forEach(div => {
        div.style.display = "none"
    })
}


//Fucion de renderizar el menu principal
function render() {
    ocultrarTodo()
    document.querySelector("#menu").style.display = "block"
    document.querySelector("#examenes").innerHTML = "";
    examenes.forEach((examen, index) => {
        const div = document.createElement("div");
        div.classList.add("examen")
        try {
            div.innerHTML = `<p>${examen.titulo}</p>`
        } catch (error) {
            examenes.splice(index, 1)
            localStorage.setItem("examenes", JSON.stringify(examenes))
            return;
        }
        div.addEventListener("click", (e) => {
            let mover = document.querySelector("#context-menu")
            mover.style.left = e.clientX + 5 + "px"
            mover.style.top = e.clientY + 5 + "px";
            mover.style.display = "block"
            selecionado = index
        })
        document.querySelector("#examenes").appendChild(div)
    });
}


//Funcion de renderizar las preguntas que se realizaran en el navegador
function imprimirPreguntas(index) {
    try {
        preguntas = []
        respuestas = [];
        posicion = 0
        preguntas.push(...examenes[index].preguntas);
        maxPos = preguntas.length
        ocultrarTodo()
        document.querySelector("#preguntas").style.display = "block"
        preguntas.sort(() => Math.random() > 0.5 ? 1 : -1)
        imprimirPregunta()
        document.querySelector("#siguiente").addEventListener("click", () => { cambiarPregunta(1) })
        document.querySelector("#anterior").addEventListener("click", () => { cambiarPregunta(-1) })
    } catch (error) {
        examenes.splice(index, 1)
        localStorage.setItem("examenes", JSON.stringify(examenes))
        render()
    }
}



function cambiarPregunta(num) {
    if(num + posicion >=maxPos){
        darNota()
    }
    if (posicion + num >= 0 && num + posicion < maxPos) {
        posicion += num
        imprimirPregunta()
    }
}


function imprimirPregunta() {
    let enunciado = document.querySelector("#preguntas").querySelector("h3")
    const pregunta = preguntas[posicion]
    enunciado.textContent = `${pregunta.enunciado}  posicion: ${posicion + 1} de ${preguntas.length}`;
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
            respuestas[posicion] = opcion === respuesta ? 1 :-1
        })
        padre.appendChild(div)
    });
}


function darNota(){
    let suma = 0;
    respuestas.forEach(num=>{
        suma += num===1 ? 1 : -0.25;
    })
    alert(`${suma} de ${maxPos}`)
}



//Crear un exmaen

function crear(titulo = true) {
    ocultrarTodo()
    document.querySelector("#crearExamen").style.display = "block"
    document.querySelector("#crearExamen #contenedor").innerHTML = "";
    if (titulo) agregarElemento("titulo")

}

function agregarElemento(tipo, contenido = "", num) {
    const contenedor = document.querySelector("#crearExamen #contenedor")
    let divTemporal;
    let temNum
    switch (tipo) {
        case ("titulo"):
            contenedor.innerHTML += `<p class="crearTitulo"><strong>Titulo:</strong>  <br> <input type="text"></p>`
            setValueInput(contenedor, contenido)
            break;
        case "pregunta":
            divTemporal = document.createElement("div")
            divTemporal.classList.add("crearPregunta")
            temNum = (Math.random() * 1000).toFixed(0);
            divTemporal.setAttribute("id", "p" + temNum)
            divTemporal.innerHTML = `<p class="enunciado">enunciado: <br> <input type="text"></p><div class="crearOpciones"><br/></div>`
            divTemporal.innerHTML += `<div class="button-group"><button class="bOpcion btn btn-success bg-gradient btn-max-content">Agregar Opcion</button><button class="btn-max-content bEliminarPregunta btn btn-danger bg-gradient">Eliminar pregunta</button></div>`
            contenedor.appendChild(divTemporal)
            contenedor.querySelector(".crearPregunta:last-child .bOpcion").addEventListener("click", () => agregarElemento("opcion", null, temNum))
            contenedor.querySelector(".crearPregunta:last-child .bEliminarPregunta").addEventListener("click", () => eliminarElemento(divTemporal))
            setValueInput(divTemporal, contenido);
            if (contenido === "") agregarElemento("opcion", null, temNum)
            return temNum;
            break;
        case "opcion":
            temNum = contenedor.querySelector(`#p${num} .crearOpciones`).querySelectorAll(".opcion").length;
            divTemporal = document.createElement("div")
            divTemporal.classList.add("opcion")
            divTemporal.innerHTML = `<span>Opcion</span>: <br/> <input type="radio" name="pregunta${num}"  ${temNum === 0 ? "checked" : ""}><input type="text">`
            divTemporal.innerHTML += "<button class='btn-max-content  btn btn-danger bg-gradient'>Eliminar</button>"
            divTemporal.querySelector("button").addEventListener("click", () => eliminarElemento(divTemporal))
            contenedor.querySelector(`#p${num} .crearOpciones`).append(divTemporal)
            setValueInput(divTemporal, contenido);
            break;
        default:
            console.ernror("No se permite " + tipo);
            alert("Error")
    }
}

function eliminarElemento(elemento) {
    elemento.remove()
}

function guardarExamen() {
    const contenedor = document.querySelector("#crearExamen")
    if (verficiarFormulario()) {
        const examen = { titulo: contenedor.querySelector(".crearTitulo input").value, preguntas: [] }
        document.querySelectorAll(".crearPregunta").forEach(pregunta => {
            const temObj = { enunciado: "", opciones: [], respuesta: "" }
            temObj.enunciado = pregunta.querySelector(".enunciado input").value
            pregunta.querySelectorAll(".crearOpciones .opcion input[type='text']").forEach(opcion => {
                console.log(opcion.value)
                temObj.opciones.push(opcion.value)
            })
            temObj.respuesta = pregunta.querySelector(".crearOpciones input:checked + input[type='text']").value
            examen.preguntas.push(temObj)
        })
        examenes.push(examen)
        localStorage.setItem("examenes", JSON.stringify(examenes))
        render()
    } else {
        alert("Error en el formulario")
    }
}

function verficiarFormulario() {
    return ![...document.querySelector("#crearExamen").querySelectorAll("input[type='text']")].some(input => input.value === "");
}

function setValueInput(padre, valor) {
    padre.querySelector("input[type='text']").value = valor
}

function editarExamen(num) {
    crear(false)
    const examen = examenes[num];
    agregarElemento("titulo", examen.titulo)
    examen.preguntas.forEach((pregunta, pIndex) => {
        let temNum = agregarElemento("pregunta", pregunta.enunciado)
        pregunta.opciones.forEach((opcion, oIndex) => {
            agregarElemento("opcion", opcion, temNum)
            if (opcion === pregunta.respuesta){
                document.querySelectorAll("#crearExamen #contenedor .crearPregunta")[pIndex].querySelectorAll(".crearOpciones input[type='radio']")[oIndex].checked = true
            }
        })
    })
}


//Fucion imprimirPDF
function imprimirPDF() {
    ocultrarTodo()
    document.querySelector("#imprimirPDF").style.display = "block"
    const pdf = document.querySelector("#imprimirPDF")
    pdf.innerHTML = "";
    const exm = examenes[selecionado]
    pdf.innerHTML = `<h1>${exm.titulo}</h1>`
    addPregntasPDF(exm.preguntas, pdf)
    document.querySelector("main").appendChild(pdf)
}

function addPregntasPDF(preguntas, pdf) {
    preguntas.forEach(pregunta => {
        const pre = document.createElement("div")
        pre.appendChild(document.createElement("h4"))
        pre.querySelector("h4").textContent = pregunta.enunciado
        pregunta.opciones.forEach(opcion => {
            pre.innerHTML += `<p><input type="radio"><span></span></p>`
            pre.querySelector("p:last-child span").textContent += opcion
        });
        pdf.appendChild(pre)
    });
}


render()


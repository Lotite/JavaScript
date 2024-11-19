const json = localStorage.getItem("examenes")
const examenes = json ? JSON.parse(json) : []
const preguntas = []
let posicion = 0;
let maxPos = 0
let selecionado = false;
//examenes.push({ titulo: "Diseño web", preguntas: preguntas })
//let examen = { titulo: "", preguntas: "" }
//let pregunta = { enunciado: "", respuesta: "", opciones: [] }



//<div class="examen"><p>Segundo Examen de Diseño web</p><button class="btn btn-eliminar btn-outline-dark btn-light">Eliminar</button></div>


addEventListener("contextmenu", e => {
    e.preventDefault()
})
addEventListener("mousedown", () => {
    document.querySelector("#context-menu").style.display = "none"
    selecionado = false
})



document.querySelector("#eliminar").addEventListener("mousedown",(e)=>{
    if( e.button===0 && selecionado!==false){
       
        examenes.splice(selecionado,1)
        localStorage.setItem("examenes",JSON.stringify(examenes))
        render()
    }
})
document.querySelector("#codificar").addEventListener("mousedown",(e)=>{
    if(e.button===0 && selecionado!==false){
        let jso = JSON.stringify(examenes[selecionado])
        navigator.clipboard.writeText(jso)
    }
})

function render() {
    document.querySelector("#examenes").innerHTML = "";
    examenes.forEach((examen, index) => {
        const div = document.createElement("div");
        div.classList.add("examen")
        div.innerHTML = `<p>${examen.titulo}</p>`
        const p = div.querySelector("p")
        p.addEventListener("click", () => {
            imprimirPreguntas(index)
        })
        document.querySelector("#examenes").appendChild(div)
    });



    document.querySelectorAll("p").forEach((p , index) => {
        p.addEventListener("mousedown", (e) => {
            if (e.button === 2) {
                e.stopImmediatePropagation()
                let mover = document.querySelector("#context-menu")
                mover.style.left = e.clientX + 5 + "px"
                mover.style.top = e.clientY + 5 + "px";
                mover.style.display = "block"
                selecionado = index
            }
        })
    })


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
    let examenesGuardados = JSON.parse(localStorage.getItem("examenes")) || []
    examenesGuardados.push(examen)
    if (examenesGuardados.length > 0) {
        localStorage.setItem("examenes", JSON.stringify(examenesGuardados))
    }
}


document.querySelector("#addPregunta").addEventListener("click", () => {
    let json = JSON.parse(prompt("Ingresa Tu examen en json aqui"))
    examenes.push(json)
    localStorage.setItem("examenes", JSON.stringify(examenes))
    render()
});

render()


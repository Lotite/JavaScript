// El número de párrafos de la página.
// El texto del segundo párrafo.
// El número de enlaces de la página.
// La dirección del primer enlace.
// La dirección del penúltimo enlace.
// El número de enlaces que apuntan a /wiki/Municipio
// El número de enlaces del primer párrafo.
// En consola se mostrará el texto de todos los elementos que sean <p>


//Eventos

document.querySelector("#analizarPagina").addEventListener("click", ()=>analazarWeb())
document.querySelector("#fileInput").addEventListener("change",(e)=>{
    const archivo = e.target.files[0];
    if(archivo){
        document.querySelector("#analizarCargada").removeAttribute("disabled")
        document.querySelector("#paginaCargada").src = URL.createObjectURL(archivo)
        document.querySelector("#paginaCargada").style.display = "block"
        document.querySelector("#analizarCargada").addEventListener("click", ()=>analazarWeb(document.querySelector("#paginaCargada").contentWindow.documentzzz))
    }
})






///Funciones
function analazarWeb(doc = document.querySelector("#contenidoEjemplo")){
    document.querySelector("#resultadoAnalisis").innerHTML = "";
    const parrafos = doc.querySelectorAll("p");
    const enlaces = doc.querySelectorAll("a");
    const enlacesWiki = [...enlaces].filter(enlace=> enlace.href.includes("/wiki/Municipio"))
    const parrafosA = doc.querySelectorAll("p:first-child a");
    imprimirDato(`Numero de párrafos: ${parrafos.length}`)
    imprimirDato(`Texto del segundo párrafo: ${parrafos[1]?.textContent || "No existe"}`)
    imprimirDato(`Número de enlaces: ${enlaces.length}`)
    imprimirDato(`Dirección del primer enlace: ${enlaces[0]?.href || "No existe"}`)
    imprimirDato(`Dirección del penúltimo enlace: ${enlaces[enlaces.length - 2]?.href || "No existe"}`)
    imprimirDato(`Número de enlaces que apuntan a /wiki/Municipio: ${enlacesWiki.length}`)
    imprimirDato(`Número de enlaces del primer párrafo: ${parrafosA.length}`)
    parrafos.forEach(parrafo => console.log(parrafo.textContent))
}

function imprimirDato(text){
    let temp = document.createElement("p")
    temp.textContent = text;
    document.querySelector("#resultadoAnalisis").append(temp)
}
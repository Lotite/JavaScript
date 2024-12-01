let objSelect = null //document.createElement();

document.addEventListener("mousemove", (e) => {
    if (objSelect) {
        seguir(e)
    }
})

document.addEventListener("mouseup", () => {
    if(objSelect){
        objSelect.style.display = "none"
        objSelect.classList.remove("selected")
        setTimeout(mover,100)
    }
})



document.querySelectorAll(".obj").forEach(obj => {
    obj.addEventListener("mousedown", (e) => {
        objSelect = obj;
        obj.classList.add("selected")
        seguir(e)
        obj.style.position = "absolute"
    })
})


function seguir(e){
    objSelect.style.left = e.clientX + "px";
    objSelect.style.top = e.clientY + "px";
}

function mover(){
    const temObje = objSelect
    objSelect = null
    const ranura = document.querySelector(".ranura:hover , .ranura:active")
    temObje.style.display = "block"
    temObje.style.transition = " left 100ms ease-in-out , top 100ms ease-in-out";
    if(ranura){
        ranura.appendChild(temObje)
    }
    desplazar(temObje)
    setTimeout(()=>{
        temObje.style.position = "static"
        temObje.style.transition = "none";
    },100)
}

function desplazar(obj){
    const padreInfo = obj.parentElement.getBoundingClientRect();
    obj.style.left = padreInfo.left + "px"
    obj.style.top = padreInfo.top + "px"
}


function detectarColision(obj){
    document.querySelectorAll(".ranura").forEach(ranura=>{
        const { left: rLeft, top: rTop, right: rRight, bottom: rBottom } = ranura.getBoundingClientRect();
        const { left: oLeft, top: oTop, right: oRight, bottom: oBottom } = obj.getBoundingClientRect();
    })
}

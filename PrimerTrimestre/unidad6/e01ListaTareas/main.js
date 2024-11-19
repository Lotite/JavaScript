let lista = JSON.parse(localStorage.getItem("lista")) || [];
if (lista.length) {
    lista.forEach((tarea , index)=> {
        const li = document.createElement("li");
        li.innerHTML = tarea;
        añadirEventos(li,index);
        document.querySelector("#listaTarea").appendChild(li);
    });
}

document.querySelector("#addTarea").addEventListener("click", () => {
    const text = document.querySelector("#inputTarea").value;
    if(text){
        const li = document.createElement("li");
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type","checkbox")
        const span = document.createElement("span")
        span.textContent = text;
        li.appendChild(checkbox)
        li.appendChild(span)
        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
        li.appendChild(eliminar);
        añadirEventos(li);
        document.querySelector("#listaTarea").appendChild(li);
        lista.push(li.innerHTML);
        localStorage.setItem("lista", JSON.stringify(lista));
    }else{
        alert("No se pudo agregar la tarea")
    }
});

function añadirEventos(elementoPadre,index) {
    const button = elementoPadre.querySelector("button");
    const checkbox = elementoPadre.querySelector("input[type='checkbox']")
    checkbox.addEventListener("click",()=>{
          elementoPadre.querySelector("span").style.textDecoration = checkbox.checked ? "line-through" : "none"
          elementoPadre.querySelector("span").style.color = checkbox.checked ? "red" : "black"
    })
    if (button) {
        button.addEventListener("click", () => {
            elementoPadre.remove();
            lista.splice(index,1)
            localStorage.setItem("lista", JSON.stringify(lista));
        });
    }
}

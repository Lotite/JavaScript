let lista = JSON.parse(localStorage.getItem("lista")) || [];
// {texto:"", checked:true}
//<li><input type="checkbox"><span>asd</span><button>Eliminar</button></li>
if (lista.length) {
    lista.forEach((tarea , index)=> {
        const li = document.createElement("li");
        li.innerHTML = tarea.txt;
        añadirEventos(li,index,tarea.checked);
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
        añadirEventos(li,lista.length);
        document.querySelector("#listaTarea").appendChild(li);
        lista.push({txt:li.innerHTML,checked : false});
        localStorage.setItem("lista", JSON.stringify(lista));
    }else{
        alert("No se pudo agregar la tarea")
    }
});

function añadirEventos(elementoPadre,index,checked = false) {
    const button = elementoPadre.querySelector("button");
    const checkbox = elementoPadre.querySelector("input[type='checkbox']")
    checkbox.checked = checked;
    checkbox.addEventListener("click",()=>{
        lista[index].checked = checkbox.checked
        marcar(elementoPadre,checkbox.checked)
        localStorage.setItem("lista", JSON.stringify(lista));
    })
    if (button) {
        button.addEventListener("click", () => {
            elementoPadre.remove();
            lista.splice(index,1)
            localStorage.setItem("lista", JSON.stringify(lista));
        });
        marcar(elementoPadre,checked)
    }
}

function marcar(elementoPadre,checked){
    elementoPadre.querySelector("span").style.textDecoration = checked ? "line-through" : "none"
    elementoPadre.querySelector("span").style.color = checked ? "red" : "black"
}

document.querySelector("#addInput").addEventListener("click",()=>{
    const input = document.createElement("input")
    input.setAttribute("type","text")
    const form = document.createElement("form")
    form.appendChild(input)
    document.querySelector("#inputs").appendChild(form)
})

document.querySelector("#focus").addEventListener("click",()=>{
    [...document.querySelectorAll("form:last-child input[type='text']")].pop().focus()
   //document.getElementsByTagName("input")[document.getElementsByTagName("input").length-1].focus()
})
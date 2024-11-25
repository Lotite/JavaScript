document.querySelector("#addInput").addEventListener("click",()=>{
    const input = document.createElement("input")
    input.setAttribute("type","text")
    const form = document.createElement("form")
    form.appendChild(input)
    document.querySelector("#inputs").appendChild(form)
})

document.querySelector("#focus").addEventListener("click",()=>{
    document.querySelector("form:last-child input[type='text']:last-of-type").focus()
   //document.getElementsByTagName("input")[document.getElementsByTagName("input").length-1].focus()
})
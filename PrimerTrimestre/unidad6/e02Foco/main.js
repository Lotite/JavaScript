document.querySelector("#addInput").addEventListener("click",()=>{
    const input = document.createElement("input")
    document.querySelector("#inputs").appendChild(input)
})

document.querySelector("#focus").addEventListener("click",()=>{
    //document.querySelector("input:last-child").focus()
    document.querySelector("#inputs").lastChild.focus()
})
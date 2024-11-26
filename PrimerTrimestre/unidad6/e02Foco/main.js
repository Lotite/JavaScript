document.querySelector("#addInput").addEventListener("click",()=>{
    const input = document.createElement("input")
    input.setAttribute("type","text")
    const form = document.createElement("form")
    form.appendChild(input)
    document.querySelector("#inputs").appendChild(form)
})

document.querySelector("#focus").addEventListener("click",()=>{
<<<<<<< HEAD
    [...document.querySelectorAll("form:last-child input[type='text']")].pop().focus()
=======
    document.querySelector("form:last-child input[type='text']:last-of-type").focus()
>>>>>>> c5d808e78ccee50d9d8a853d5fe958794ee70925
   //document.getElementsByTagName("input")[document.getElementsByTagName("input").length-1].focus()
})
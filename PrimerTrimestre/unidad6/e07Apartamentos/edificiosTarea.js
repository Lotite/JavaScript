import { Edificio } from "./edificios.js";
import {crearPiso} from "./funciones.js";
const edificio1 = new Edificio("calle curro",10,1000)

document.addEventListener("click",()=>{
    const calle = document.querySelector("#inputCalle").value;
    const numero = document.querySelector("#inputNumero").value;
    const cp = document.querySelector("#inputCP").value;
    const Plantas = document.querySelector("#inputPlantas").value;
    const puertas = document.querySelector("#inputPuertas").value;
    crearPiso(calle,numero,cp,Plantas,puertas);
})




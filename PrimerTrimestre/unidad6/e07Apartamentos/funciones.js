import { Edificio } from "./edificios.js";
const tablas = []


export function crearPiso(calle,numero,cp , Plantas = 0, puertas = 0){
    const edificio = new Edificio(calle,numero,cp)
    if(Plantas && puertas){
        edificio.agregarPlantasYPuertas(Plantas,puertas)
    }
    tablas.push(edificio)
}


function render(){
    
}
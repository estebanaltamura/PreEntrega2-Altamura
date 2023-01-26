import {OrdenDelDIaDatos} from "./OrdenDelDiaArray.js"
import {mostrarElementos} from "./visualizacion.js"


export const nuevoEnvio = (numeroOrdenInput, rangoHorarioInput, numeroRemitoInput, prioridadInput)=>{
    OrdenDelDIaDatos.push({
        "numeroOrden": numeroOrdenInput,
        "rangoHorario": rangoHorarioInput,
        "numeroRemito": numeroRemitoInput,
        "prioridad": prioridadInput
    })
    mostrarElementos(OrdenDelDIaDatos, 1)
    
}


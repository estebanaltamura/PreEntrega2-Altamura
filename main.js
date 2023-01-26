import { mostrarElementos } from "./visualizacion.js"
import {OrdenDelDIaDatos} from "./OrdenDelDiaArray.js"

mostrarElementos(OrdenDelDIaDatos, 1)

const botonEnvio = document.getElementById("nuevoEnvioButton")
const ordenarSelect = document.getElementById("select")

botonEnvio.addEventListener("click", ()=>{
  const checkInputs = [] 
  checkInputs.push(validarRangoHorario())
  checkInputs.push(validarNumeroRemito())
  checkInputs.push(validarPrioridad())

  controlaryEmpujar(checkInputs)

  mostrarElementos(OrdenDelDIaDatos, 1)

  alert("Nuevo envio registrado!")
})


ordenarSelect.addEventListener("click",()=>{
  ordenarSelect.value !== "" && sortBy(ordenarSelect.value)
})



function sortBy(value){
  const OrdenDelDIaDatosDuplicado = [...OrdenDelDIaDatos]
  const adaptedPropertyValue = (value)=>{
    if (value == "Rango horario") return "rangoHorario"
    else if (value == "Numero de remito") return "numeroRemito"
    else if (value == "Prioridad") return "prioridad"
  }

 
  OrdenDelDIaDatosDuplicado.sort((a, b)=>{
    console.log(a, b)
    if (b[adaptedPropertyValue(value)] < a[adaptedPropertyValue(value)]) return -1
    if (b[adaptedPropertyValue(value)] > a[adaptedPropertyValue(value)]) return 1
    if (b[adaptedPropertyValue(value)] == a[adaptedPropertyValue(value)]) return 0
  })
  mostrarElementos(OrdenDelDIaDatosDuplicado, 1)
}

function validarRangoHorario(){ 
  const respuesta = prompt("ingresar rango horario para la entrega (pre apertura | mañana | tarde): ")
  if (respuesta == "pre apertura" || respuesta =="mañana" || respuesta =="tarde") return respuesta
  else{
    alert("ingrese un rango horario valido (pre apertura | mañana | tarde)");
    return validarRangoHorario()
  } 
}

function validarNumeroRemito(){
  const respuesta = prompt("ingresar un numero de remito valido (tiene que ser mayor al ultimo emitido): ")
  const OrdenDelDIaDatosDuplicado = [...OrdenDelDIaDatos]
  const maximoNumeroRemito = OrdenDelDIaDatosDuplicado.sort((a, b)=>b.numeroRemito-a.numeroRemito)[0].numeroRemito
  if (respuesta > maximoNumeroRemito) return respuesta
  else{
    alert("ingresar un numero de remito valido");
    return validarNumeroRemito()
  } 
}

function validarPrioridad(){
  const respuesta = prompt("ingresar prioridad para la entrega (baja | media | urgente): ")
  if (respuesta == "baja" || respuesta =="media" || respuesta =="urgente") return respuesta
  else{
    alert("ingrese una prioridad valida");
    return validarPrioridad()
  } 
}

function controlaryEmpujar(checkInputs){
  if (checkInputs.every(element=>element !== "")){
    const nuevoEnvio = {
      "numeroOrden":OrdenDelDIaDatos[OrdenDelDIaDatos.length-1].numeroOrden + 1,
      "rangoHorario": checkInputs[0],
      "numeroRemito": checkInputs[1],
      "prioridad": checkInputs[2]
    }

    OrdenDelDIaDatos.push(nuevoEnvio)
 }
}

























//import {nuevoEnvio} from "./nuevosEnvios.js"

//DECLARACION DE VARIABLES DE FORMULARIO
// const botonEnviarInformacion = document.getElementById("BotonEnviarInformacion")
// const numeroOrdenInput = document.getElementById("numeroOrdenInput")
// const rangoHorarioInput = document.getElementById("rangoHorarioInput")
// const numeroRemitoInput = document.getElementById("numeroRemitoInput")
// const prioridadInput = document.getElementById("prioridadInput")





//-------------------------------------------------------------------------------

//ASIGNACIONES Y EVENT LISTENER FORMULARIO
// botonEnviarInformacion.addEventListener("click",(e)=>{
//   e.preventDefault();
//   if (numeroOrdenInput.value !== "" && rangoHorarioInput.value !== "" && numeroRemitoInput.value !== "" && prioridadInput.value !== ""){
//     nuevoEnvio(numeroOrdenInput.value, rangoHorarioInput.value, numeroRemitoInput.value, prioridadInput.value)
//     paginaActual = 1
//     paginaActualElement.textContent = paginaActual; 
//     mostrarElementos(OrdenDelDIaDatos, paginaActual)
//   }
  


// })

// rangoHorarioInput.value= "";
// prioridadInput.value="";



//VISUALIZACION INICIAL (FILTRADO POR DEFECTO)







/*

1objeto declarado o json solicitado
2filtrado manifiesto o por default. Por ejemplo ordenado por numero de orden
3visualizacion y paginado del array paso 2


-entrada informacion completa
-filtrado o no
-mostrar 10 resultados consumiendo de un array de elementos html
-paginado
-blanco si no hay resultados o blanco en las filas que no hay resultados



*/
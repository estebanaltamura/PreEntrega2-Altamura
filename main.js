import ordenDelDiaDatosyMetodos from "./OrdenDelDiaArray.js"
import {mostrarElementos} from "./visualizacion.js"
import {nuevoEnvio} from "./nuevosEnvios.js"


//DECLARACION DE VARIABLES DE FORMULARIO
const botonEnviarInformacion = document.getElementById("BotonEnviarInformacion")
const numeroOrdenInput = document.getElementById("numeroOrdenInput")
const rangoHorarioInput = document.getElementById("rangoHorarioInput")
const numeroRemitoInput = document.getElementById("numeroRemitoInput")
const prioridadInput = document.getElementById("prioridadInput")




//DECLARACION VARIABLES DE NAVEGACION ---------------------------------------------------------------
let paginaActual = 1
let paginasTotales = 0;
const flechaAtras = document.getElementById("flechaAtras")
const flechaAdelante = document.getElementById("flechaAdelante")
const paginaActualElement = document.getElementById("paginaActual")
const paginasTotalesElement = document.getElementById("paginasTotales")


//ASIGNACIONES Y EVENT LISTENER NAVEGACION------------------------------------------------------------
if (ordenDelDiaDatosyMetodos.OrdenDelDIaDatos.length<11) paginasTotales = 1
else paginasTotales = Math.ceil(ordenDelDiaDatosyMetodos.OrdenDelDIaDatos.length/10)
paginaActualElement.textContent = paginaActual;
paginasTotalesElement.textContent = paginasTotales;


flechaAtras.addEventListener("click", ()=>{
  if (paginaActual == 1){}
  else{
    paginaActual--
    paginaActualElement.textContent = paginaActual;
    mostrarElementos(ordenDelDiaDatosyMetodos.OrdenDelDIaDatos, paginaActual)
  } 
})

flechaAdelante.addEventListener("click", ()=>{
  if (paginaActual == paginasTotales){}
  else{
    paginaActual++
    paginaActualElement.textContent = paginaActual; 
    mostrarElementos(ordenDelDiaDatosyMetodos.OrdenDelDIaDatos, paginaActual)
  } 
})
//-------------------------------------------------------------------------------

//ASIGNACIONES Y EVENT LISTENER FORMULARIO
botonEnviarInformacion.addEventListener("click",(e)=>{
  e.preventDefault();
  if (numeroOrdenInput.value !== "" && rangoHorarioInput.value !== "" && numeroRemitoInput.value !== "" && prioridadInput.value !== ""){
    nuevoEnvio(numeroOrdenInput.value, rangoHorarioInput.value, numeroRemitoInput.value, prioridadInput.value)
    paginaActual = 1
    paginaActualElement.textContent = paginaActual; 
    mostrarElementos(ordenDelDiaDatosyMetodos.OrdenDelDIaDatos, paginaActual)
  }
  


})

rangoHorarioInput.value= "";
prioridadInput.value="";



//VISUALIZACION INICIAL (FILTRADO POR DEFECTO)
mostrarElementos(ordenDelDiaDatosyMetodos.OrdenDelDIaDatos, paginaActual)






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
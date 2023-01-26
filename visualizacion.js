/*
OBJETIVOS DEL MODULO:
-Modulo visualizacion se encarga de pintar una grilla de elementos SPAN con el contenido de un array de objetos.
-Cada fila es un objeto del array y cada columna representa una propiedad de ese objeto
-En cada elelemnto SPAN se muestra como contenido el valor de la propiedad del objeto donde fila define al objeto y columna a la propiedad
-El modulo permite definir en el llamado a la funcion que cantidad de objetos por pagina se va a mostrar 

-MODO DE USO:
  -Agregar al proyecto el archivo visualizacion.js, visualizacion.css y las imagenes correspondientes en la carpeta /imagenes
  -Establecer un elemento con id moduloPintarTablaaPartirdeObjetos
  -Tener un array de objetos en el proyecto o traerlo por peticion. Tienen que ser todos objetos con las mismas propiedades. maximo 8 propiedades
  

-INPUTS:
  -Un array de objetos (importarlo o realizar la peticion)



*/
import {OrdenDelDIaDatos} from "./OrdenDelDiaArray.js"

//CONFIGURACIONES FUNCION mostrarElementos
const mostrarElementosSetup = {
  "objetosPorPagina":10
}


//INICIALIZACION DE VARIABLES
let paginaActual = 1 //NAVEGACION
let paginasTotales = 0; //NAVEGACION

//CAPTURA ELEMENTOS NECESARIOS DEL DOM
const flechaAtras = document.getElementById("flechaAtras")
const flechaAdelante = document.getElementById("flechaAdelante")
const paginaActualElement = document.getElementById("paginaActual")
const paginasTotalesElement = document.getElementById("paginasTotales")


//DEFINICION DE VARIABLE PAGINAS TOTALES Y PINTADO DE PAG ACTUAL Y PAG TOTALES EN LOS ELEMENTOS HTML
if (OrdenDelDIaDatos.length<=mostrarElementosSetup.objetosPorPagina) paginasTotales = 1
else paginasTotales = Math.ceil(OrdenDelDIaDatos.length/mostrarElementosSetup.objetosPorPagina)
paginaActualElement.textContent = paginaActual;
paginasTotalesElement.textContent = paginasTotales;


//EVENT LISTENES NAVEGACION. SETEA EL NUEVO VALOR DE PAGINA ACTUAL Y LLAMA A LA FUNCION
flechaAtras.addEventListener("click", ()=>{
  if (paginaActual == 1){}
  else{
    paginaActual--
    paginaActualElement.textContent = paginaActual;
    mostrarElementos(OrdenDelDIaDatos, paginaActual, undefined, "hola")
  } 
})

flechaAdelante.addEventListener("click", ()=>{
  if (paginaActual == paginasTotales){}
  else{
    paginaActual++
    paginaActualElement.textContent = paginaActual; 
    mostrarElementos(OrdenDelDIaDatos, paginaActual, undefined, "hola")
  } 
})




// muestra los resultados del array en la cantidad de resultados por hoja definido
export const mostrarElementos = (arrayObjetosFiltrados, pagina, elementosPorPagina = mostrarElementosSetup.objetosPorPagina, hola)=>{
  const table = document.getElementById("moduloPintarTablaaPartirdeObjetos"); //captura el div padre
  const fragmentTable = document.createDocumentFragment(); //crea un fragmento para generar un fragmento con la tabla completa y empujarla como hijo del div padre
  const claves = Object.keys(arrayObjetosFiltrados[0]); //array con las propiedades del objeto
  
  const elementosaPintar = []
  const elementosaMostrar = []
  const iterador = []
  table.innerHTML=""

  
  if (pagina==1) {
    iterador.push(0)
    iterador.push(elementosPorPagina-1)
  }
  else{
    iterador.push(((pagina-1)*elementosPorPagina))
    iterador.push(((pagina-1)*elementosPorPagina)+elementosPorPagina-1)
  }

  for (let i = iterador[0]; i <= iterador[1]; i++){
    if(arrayObjetosFiltrados[i]) elementosaMostrar.push(arrayObjetosFiltrados[i])
  }
    
  table.style.gridTemplateColumns=`repeat(${claves.length}, 170px)`
  table.style.gridTemplateRows=`repeat(${elementosaMostrar.length}, 50px)`
  
  elementosaMostrar.forEach((element,index)=>{
    
    for (let j = 0; j < claves.length; j++){
      let span = document.createElement("span");
        if (element[claves[j]] != "" || element[claves[j]] == 0){
        span.textContent=element[claves[j]]
        }
      span.classList=`item ${index}-${j}`
      span.id=`item ${index}-${j}`
      elementosaPintar.push(span)
    }
  })
 
  elementosaPintar.forEach((ele)=>{
  fragmentTable.appendChild(ele)
  })

  table.appendChild(fragmentTable)
}

mostrarElementos(OrdenDelDIaDatos, paginaActual, undefined,"hola")


//iterar array de 10 elementos a mostrar con for each, appendChild en cada iteracion a unn fragmento, insertar el fragmento como hijo del padre html
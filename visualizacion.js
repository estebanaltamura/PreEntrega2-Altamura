import ordenDelDiaDatosyMetodos from "./OrdenDelDiaArray.js"


const table = document.getElementById("moduloPintarTablaaPartirdeObjetos");
const fragmentTable = document.createDocumentFragment();
const claves = Object.keys(ordenDelDiaDatosyMetodos.OrdenDelDIaDatos[0]);

// muestra los primeros 10 resultados del array filtrado
export const mostrarElementos = (arrayObjetosFiltrados, pagina)=>{
  const elementosaPintar = []
  const elementosaMostrar = []
  const iterador = []
  table.innerHTML=""

  
  if (pagina==1) {
    iterador.push(0)
    iterador.push(9)
  }
  else{
    iterador.push(((pagina-1)*10))
    iterador.push(((pagina-1)*10)+9)
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



//iterar array de 10 elementos a mostrar con for each, appendChild en cada iteracion a unn fragmento, insertar el fragmento como hijo del padre html
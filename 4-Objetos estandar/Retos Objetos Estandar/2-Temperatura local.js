
/**************************************************************************
 * DESCRIPCION
En la ciudad de Cancún se llevó a cabo un registro de la temperatura alcanzada 
en verano cada hora durante un día. 

Las temperaturas fueron ingresadas de manera ordenada, siendo la primera 
correspondiente a las 00:00hrs y la última a las 23:00hrs

Encuentra la temperatura promedio registrada, así como la temperatura máxima 
y la temperatura mínima con el horario en el cual se registraron.

Adicional a estos datos, se requiere obtener la varianza y la desviación 
estándar de las temperaturas.

Consideraciones:
 * Se debe visualizar en una tabla el registro de todas las temperaturas ingresadas.
 * El contenido de la tabla debe actualizarse con cada temperatura registrada
 * Los valores de promedio, temperatura máxima, temperatura mínima, varianza y 
   desviación estándar deben irse actualizando constantemente con cada nueva 
   temperatura ingresada y deben ser visualizadas a partir de la segunda temperatura 
   registrada.
**************************************************************************/

// Obtiene la temperatura minima y el index en el que se encuentra
const calculaMinima = (temperaturas) => {
    let minima = Math.min(...temperaturas) // Encuentra el valor mínimo
    let index = temperaturas.indexOf(minima) // Obtiene el index de ese valor
    return [minima, index]
}

// Obtiene la temperatura maxima y el index en el que se encuentra
const calculaMaxima = (temperaturas) => {
    let maxima = Math.max(...temperaturas) // Encuentra el valor maximo
    let index = temperaturas.indexOf(maxima) // Obtiene el index de ese valor
    return [maxima, index]
}
    
// Retorna el promedio de una lista de temperaturas
const calculaPromedio = (temperaturas) => {
    // Esta funcion de JS nos ayuda a sumar todas las temperaturas
    let suma = temperaturas.reduce((acumulador, temperatura) => acumulador + parseFloat(temperatura), 0)
    let promedio = suma / temperaturas.length
    return promedio.toFixed(2)
}

// Obtiene la varianza de las temperaturas
const calculaVarianza = (temperaturas) => {
  let promedio = calculaPromedio(temperaturas) // Saca el promedio
  // Se acumula la diferencia al cuadrado de cada temperatura restandole el promedio
  const sumaCuadrados = temperaturas.reduce((acum, temp) => acum + Math.pow(temp - promedio, 2), 0)
  return sumaCuadrados / (temperaturas.length)
}

// Calcula la desviación estándar de una lista de temperaturas
function calculaDesviacionEstandarVarianza(temperaturas) {
  let varianza = calculaVarianza(temperaturas)
  let desviacion = Math.sqrt(varianza)
  return {
    varianza: parseFloat(varianza.toFixed(2)),
    desviacion: parseFloat(desviacion.toFixed(2))
  }
}

// Imprime en pantalla la tabla que muestra las temperaturas registradas
function imprimeTablaTemperaturas (temperaturas) {
  const tbody = document.querySelector('table tbody')
  // Se agrega la temperatura a la tabla
  if (temperaturas.length === 0) {
    return
  }
  let index = temperaturas.length - 1
  let temperatura = temperaturas[index]
  let fila = document.createElement('tr')
  fila.innerHTML = `<td>${index}:00</td><td>${temperatura}°C</td>`
  tbody.appendChild(fila)
}

// Imprime en pantalla los metadatos de las temperaturas
function imprimeDatosTemperaturas (temperaturas) {
  // Imprime el promedio de temperaturas
  const promedioParrafo = document.getElementById('promedio')
  promedioParrafo.innerHTML = `Promedio: ${calculaPromedio(temperaturas)}`
  promedioParrafo.style.display = 'block'
  // La minima temperatura
  const minParrafo = document.getElementById('temp-min')
  let minima = calculaMinima(temperaturas)
  minParrafo.innerHTML = `Minima: ${minima[0]} °C | Hora: ${minima[1]}:00 hrs`
  minParrafo.style.display = 'block'
  // La maxima temperatura
  const maxParrafo = document.getElementById('temp-max')
  let maxima = calculaMaxima(temperaturas)
  maxParrafo.innerHTML = `Maxima: ${maxima[0]} °C | Hora: ${maxima[1]}:00 hrs`
  maxParrafo.style.display = 'block'

  // Varianza y desviacion estandar
  const varianzaDesEstParrafo = document.getElementById('var-des')
  let varianzaDesEst = calculaDesviacionEstandarVarianza(temperaturas)
  varianzaDesEstParrafo.innerHTML = `Varianza: ${varianzaDesEst.varianza} | Desviacion Estandar: ${varianzaDesEst.desviacion}`
  varianzaDesEstParrafo.style.display = 'block'
}

let listaTemperaturas = []

// Guarda la temperatura en la lista
function guardarTemperatura () {
  const temperaturaInput = document.getElementById('temperatura')
  let temperatura = temperaturaInput.value

  if (isNaN(temperatura) || !temperatura){
    alert('Ingrese una temperatura valida')
  }  else  if (listaTemperaturas.length >= 24) {
    alert('Se alcanzo el limite de temperaturaes diarias')
  } else {
    listaTemperaturas.push(parseFloat(temperatura))
    if(listaTemperaturas.length >= 2){
      imprimeDatosTemperaturas(listaTemperaturas)
    }
    imprimeTablaTemperaturas(listaTemperaturas)
    temperaturaInput.value = ''
  }
}

/**************************************************************************
 * DESCRIPCION
En la ciudad de Cancún se llevó a cabo un registro de la temperatura alcanzada 
en verano cada hora durante un día. Encuentra la temperatura promedio registrada, 
así como la temperatura máxima y la temperatura mínima con el horario en el 
cual se registraron.

Temperaturas: Variable de tipo array numérico de 24 elementos que representa 
la temperatura registrada cada hora por espacio de un día. Para determinar 
la hora se considera que, por ejemplo Temperatura[0] representa las 0:00 hrs, 
Temperatura[13] es igual a 13:00hrs, etc.
**************************************************************************/

// Obtiene la temperatura minima y el index en el que se encuentra
const calculaMinima = (temperaturas) => {
    let minima = [1000, -1]
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] <= minima[0]){
            minima[0] = temperaturas[i]
            minima[1] = i
        }
    }
    return minima
}

// Obtiene la temperatura maxima y el index en el que se encuentra
const calculaMaxima = (temperaturas) => {
    let maxima = [-1000, -1]
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] >= maxima[0]){
            maxima[0] = temperaturas[i]
            maxima[1] = i
        }
    }
    return maxima
}
    
// Retorna el promedio de una lista de temperaturas
const calculaPromedio = (temperaturas) => {
    // Esta funcion de JS nos ayuda a sumar todas las temperaturas
    let suma = temperaturas.reduce((acumulador, temperatura) => acumulador + parseFloat(temperatura), 0)
    let promedio = suma / temperaturas.length
    return promedio.toFixed(2)
}

const temperaturas = [
  '15.58', '18.45', '12.75',
  '17.08', '16.09', '21.63',
  '22.93', '19.28', '23.35',
  '17.57', '18.28', '12.07',
  '15.66', '26.13', '22.14',
  '27.86', '12.10', '23.55',
  '12.20', '26.89', '23.61',
  '15.12', '26.76', '22.11'
]

const temperaturaMinima = calculaMinima(temperaturas)
const temperaturaMaxima = calculaMaxima(temperaturas)
const promedioTemperatura = calculaPromedio(temperaturas)
console.log(`El promedio de las temperaturas fue de ${promedioTemperatura}°C`)
console.log(`Minima: ${temperaturaMinima[0]} | a las: ${temperaturaMinima[1]}:00`)
console.log(`Maxima: ${temperaturaMaxima[0]} | a las: ${temperaturaMaxima[1]}:00`)
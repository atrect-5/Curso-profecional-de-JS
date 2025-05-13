
/**************************************************************************
 * DESCRIPCION
Escribe un programa que, al recibir un listado de calificaciones de un grupo 
de alumnos inscritos al curso de Javascript, calcule y escriba el número de 
calificaciones que hay en cada uno de los siguientes rangos.

Rangos
0 a 3.99
4 a 5.99
6 a 7.99
8 a 8.99
9 a 10

El programa debe, además, calcular el promedio de calificación del grupo.
**************************************************************************/

// Retorna el promedio de una lista de calficaciones
const calculaPromedio = (listaCalificaciones) => {
    // Esta funcion de JS nos ayuda a sumar todas las calificaciones
    let suma = listaCalificaciones.reduce((acumulador, calificacion) => acumulador + parseFloat(calificacion), 0)
    let promedio = suma / listaCalificaciones.length
    return promedio.toFixed(2)
}

// Retorna un diccionario con los rangos como key y la cantidad de calificaciones en el rango como valor
const calculaRangos = (listaCalificaciones) => {
    let rangosCalificaciones = {
        // filter crea una lista con los valores que cumplen la sentencia
        '0-3.99' : listaCalificaciones.filter(calificacion => calificacion >=0 && calificacion <= 3.99).length,
        '4-5.99' : listaCalificaciones.filter(calificacion => calificacion >=4 && calificacion <= 5.99).length,
        '6-7.99' : listaCalificaciones.filter(calificacion => calificacion >=6 && calificacion <= 7.99).length,
        '8-8.99' : listaCalificaciones.filter(calificacion => calificacion >=8 && calificacion <= 8.99).length,
        '9-10' : listaCalificaciones.filter(calificacion => calificacion >=9 && calificacion <= 10).length
    }
    return rangosCalificaciones
}

// Imprime el diccionario con el rango de calificaciones
const imprimeRango = (rangosCalificaciones) => {
    for (let rango in rangosCalificaciones) {
        console.log(`${rango} : ${rangosCalificaciones[rango]}`)
    }
}

let listaCalificaciones = [
  '3.40', '9.41', '9.18', '6.69',
  '5.38', '9.26', '6.39', '2.49',
  '4.87', '0.08', '7.24', '3.44',
  '3.79', '1.67', '3.89', '7.27',
  '1.78', '2.30', '4.32', '2.43',
  '7.07', '8.10', '3.65', '4.58',
  '3.09', '8.30', '0.26', '7.17'
]

const promedio = calculaPromedio(listaCalificaciones)
console.log(`El promedio de los alumnos es: ${promedio}`)
const rangosCalificaciones = calculaRangos(listaCalificaciones)
console.log(`Los rangos de las calificaciones son:`)
imprimeRango(rangosCalificaciones)
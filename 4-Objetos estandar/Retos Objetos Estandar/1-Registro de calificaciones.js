
/**************************************************************************
 * DESCRIPCION
Escribe un programa que almacene un listado de calificaciones de un grupo de 
alumnos inscritos al curso de JavaScript. El programa debe ser capaz de poder 
clasificar las calificaciones usando la siguiente tabla.

Rangos
0 a 3.99
4 a 5.99
6 a 7.99
8 a 8.99
9 a 10

El programa debe, además, calcular el promedio de calificación del grupo.

Se debe crear una tabla en pantalla donde podamos visualizar la relación de 
alumnos que han quedado en los diferentes rangos.

Con cada nueva calificación ingresada, la tabla debe actualizarse de manera 
automática, asi como el resultado del promedio grupal. 

Consideraciones:
 * Solo se aceptan calificaciones entre 0 y 10
 * El programa solo puede almacenar como máximo 40 calificaciones
 * Cada calificación se debe ingresar de manera individual, sin perder el 
   registro de las calificaciones ingresadas previamente.
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

// Imprime en pantalla los datos de las calificaciones
const imprimeDatosCalificacion = (calificaciones) => {
  // Imprime el promedio de calificaciones
  const promedioParrafo = document.getElementById('promedio')
  promedioParrafo.innerHTML = `Promedio: ${calculaPromedio(calificaciones)}`
  promedioParrafo.style.display = 'block'

  // Imprime la tabla de rango de calificaciones
  const rangos = calculaRangos(calificaciones)
  // Lista todas las celdas de conteo de la tabla (segunda columna) (table>body>tr> el segun td que encuentre)
  const tabla = document.querySelectorAll('table tbody tr td:nth-child(2)')
  // Actualiza la tabla con la cantiad de calificaciones en cada rango
  tabla[0].textContent = rangos['0-3.99']
  tabla[1].textContent = rangos['4-5.99']
  tabla[2].textContent = rangos['6-7.99']
  tabla[3].textContent = rangos['8-8.99']
  tabla[4].textContent = rangos['9-10']
}

let listaCalificaciones = []

// Guarda la calificacion de un alumno
function guardarCalificacion () {
  const calificacionInput = document.getElementById('calificacion')
  let calificacion = calificacionInput.value

  if (isNaN(calificacion) || !calificacion){
    alert('Ingrese una calificacion valida')
  } else  if (calificacion < 0 || calificacion > 10) {
    alert('Debe ser una calificacion entre 0 y 10')
  } else  if (listaCalificaciones.length >= 40) {
    alert('Se alcanzo el limite de calificaciones')
  } else {
    listaCalificaciones.push(parseFloat(calificacion))
    imprimeDatosCalificacion(listaCalificaciones)
    calificacionInput.value = ''
  }
}
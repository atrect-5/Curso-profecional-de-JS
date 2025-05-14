
let fecha = new Date(2025, 4, 13) // Crea una fecha (Año, Mes, Dia) (13 de mayo del 2025) NOTA: la convierte a Hora centro
let hoy = new Date() // La fecha actual
console.log(fecha) // 2025-05-13T06:00:00.000Z
console.log(hoy) // Depende de cuando se ejecute

// getFullYear() -> obtiene el año de una fecha
let ano = fecha.getFullYear()
console.log(ano) // 2025

// getMonth() -> obtiene el mes de una fecha (index)
console.log(fecha.getMonth()) // 4

// getDate() -> obtiene el dia de una fecha
console.log(fecha.getDate()) // 13

// setDate() -> le suma/resta a una fecha
fecha.setDate(fecha.getDate() + 10) // se agregan 15 dias
console.log(fecha.getDate()) // 23

let fecha1 = new Date(2025, 4, 13, 12, 15) // Crea una fecha (Año, Mes, Dia, hora, minutos)
let fecha2 = new Date(2025, 4, 13, 12, 10) // la misma fecha pero diferente hora
console.log(fecha1) // 2025-05-13T18:15:00.000Z

// getTime() -> Obtiene la fecha en milisegundos (Ayuda para comparaciones)
console.log(fecha1.getTime()) // 1747980000000

if(fecha1.getTime() === fecha2.getTime()){
    console.log('Las fechas son iguales')
}else{
    console.log('Las fechas son diferentes') // Este, ya que son diferentes
}

// setHours() -> Cambia las horas, minutos, segundos, ms de una fecha
fecha1.setHours(0, 0, 0, 0)
fecha2.setHours(0, 0, 0, 0) // Se les asignan las mismas horas

if(fecha1.getTime() === fecha2.getTime()){
    console.log('Las fechas son iguales') // Este, ya que son iguales
}else{
    console.log('Las fechas son diferentes') 
}

let fecha3 = new Date(2025, 4, 15) // la misma fecha pero diferente dia (2 dias despues)

let intervalo = fecha3 - fecha2 // diferencia en ms
console.log(intervalo) // 216600000 
let diasIntervalo = intervalo / (24 * 60 * 60 * 1000) // se transforman los ms a dias
console.log(diasIntervalo) // 2
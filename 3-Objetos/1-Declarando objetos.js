/******************************************* 
    Maneras de declarar objetos en JS
*******************************************/

// Notacion literal
let empleado = {
    nombre: "Alejandro",
    edad: 24,
    // Permite esacios
    'talla camisa': 'M' ,
    // Objetos dentro de objetos
    equipo: {
        SO: 'Windows',
        marca: 'HP'
    }
}
// Accediendo por propiedad
console.log(`Nombre: ${empleado.nombre}, Edad: ${empleado.edad}, Talla: ${empleado['talla camisa']}`) //Nombre: Alejandro, Edad: 24, Talla: M

// Accediendo con variable
let propiedad = 'nombre'
console.log(`Nombre: ${empleado[propiedad]}`) // Nombre: Alejandro

// Acceder a objetos de objetos
console.log(`Sistema operativo: ${empleado.equipo.SO}, Marca: ${empleado.equipo.marca}`) // Sistema operativo: Windows, Marca: HP

// Cambiamos el nombre
empleado.nombre = 'Vicente'
console.log(`Nombre: ${empleado[propiedad]}`) // Nombre: Vicente

// Agregando propiedad
empleado.puesto = 'Programador'
console.log(`Puesto: ${empleado.puesto}`) // Puesto: Programador


console.log(empleado)
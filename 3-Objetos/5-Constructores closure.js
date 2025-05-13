

// Constructor
let constructor = (nombreInicial, edadInicial) => {
    // Al sacarlos del objeto, ya no se puede acceder directamente para cambiar los datos, necesitas get/set
    let nombre = nombreInicial
    let edad = edadInicial

    let objeto = {  
        // Permite esacios
        'talla camisa': 'M' ,
        // Objetos dentro de objetos
        equipo: {
            SO: 'Windows',
            marca: 'HP'
        },
        // Metodo que imprime nombre y edad
        mostrarDatos: function () {
            // Ya no se usa el this
            console.log(`Nombre: ${nombre}\nEdad: ${edad}`)
        },
        // Actualiza el nombre del empleado
        setNombre: function (newNombre) {
            let anterior = nombre
            nombre = newNombre
            return anterior
        }
    }
    return objeto
}

// Creando instancias de clase
let empleado1 = constructor('Empleado 1', 55)
let empleado2 = constructor('Juan Perez', 22)
let empleado3 = constructor('Juana', 85)

empleado1.setNombre('Gabriel')
empleado1.nombre = 'Ninguno' // No modifica la propiedad privada "nombre", pero crea una nueva propiedad publica llamada "nombre"

console.log(empleado1)
/* {
  'talla camisa': 'M',
  equipo: { SO: 'Windows', marca: 'HP' },
  mostrarDatos: [Function: mostrarDatos],
  setNombre: [Function: setNombre],
  nombre: 'Ninguno'
} */
empleado1.mostrarDatos() // Nombre: Gabriel     Edad: 55
empleado2.mostrarDatos() // Nombre: Juan Perez  Edad: 22
empleado3.mostrarDatos() // Nombre: Juana       Edad: 85


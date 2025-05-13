
// Constructor
let constructor = (nombre, edad) => {
    let objeto = {  
        nombre: nombre,
        edad: edad,
        // Permite esacios
        'talla camisa': 'M' ,
        // Objetos dentro de objetos
        equipo: {
            SO: 'Windows',
            marca: 'HP'
        },
        // Metodo que imprime nombre y edad
        mostrarDatos: function () {
            console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}`)
        },
        // Actualiza el nombre del empleado
        setNombre: function (newNombre) {
            let anterior = this.nombre
            this.nombre = newNombre
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

empleado1.mostrarDatos() // Nombre: Gabriel     Edad: 55
empleado2.mostrarDatos() // Nombre: Juan Perez  Edad: 22
empleado3.mostrarDatos() // Nombre: Juana       Edad: 85



// This
let trabajador = {
    nombre: "Alejandro",
    edad: 24,
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


trabajador.mostrarDatos()
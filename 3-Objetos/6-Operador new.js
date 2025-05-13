
// Notacion para poder ser usado por 'new'
function miObjeto(nombre, edad){
    this.nombre = nombre
    this.edad = edad
    this['talla camisa'] = 'M'
    this.equipo = {
        SO: 'Windows',
        marca: 'HP'
    }
    this.mostrarDatos = function () {
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}`)
    }
    this.setNombre = function (newNombre) {
        let anterior = this.nombre
        this.nombre = newNombre
        return anterior
    }
}

let empleado1 = new miObjeto('Alejandro', 24)
let empleado2 = new miObjeto('Edgar', 30)
let empleado3 = new miObjeto('Jose', 85)

empleado1.mostrarDatos()
empleado2.mostrarDatos()
empleado3.mostrarDatos()
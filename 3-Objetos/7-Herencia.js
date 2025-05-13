
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
// Las instancias no contienen este metodo, ya que no esta en la instanciacion del objeto
miObjeto.mostrarEdad = function () {
    console.log(`Edad: ${this.edad}`) 
}

let empleado1 = new miObjeto('Alejandro', 24)
//empleado1.mostrarEdad() // TypeError: empleado1.mostrarEdad is not a function


console.log(empleado1)
/* miObjeto {
    nombre: 'Alejandro',
    edad: 24,
    'talla camisa': 'M',
    equipo: { SO: 'Windows', marca: 'HP' },
    mostrarDatos: [Function (anonymous)],
    setNombre: [Function (anonymous)]
} */

console.log('\n______________________________________________________\n')
/************************** Ejemplo con Object.create **************************/

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

let empleado2 = Object.create(trabajador)
let empleado3 = Object.create(trabajador)

empleado2.setNombre('Vicente')
empleado2.mostrarDatos() // Nombre: Vicente     Edad: 24

empleado3.setNombre('Jose')
empleado3.mostrarDatos() // Nombre: Jose        Edad: 24

// Agregamos un metodo al prototipo para ver la edad, habiendo creado las instancias con Object.create
trabajador.mostrarEdad = function () {
    console.log(`Edad: ${this.edad}`)
}

empleado2.mostrarEdad() // Edad: 24
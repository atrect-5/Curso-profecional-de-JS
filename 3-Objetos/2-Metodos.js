
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
    },
    // Metodo que imprime nombre y edad
    mostrarDatos: () => {
        console.log(`Nombre: ${empleado.nombre}\nEdad: ${empleado.edad}`)
    },
    // Actualiza el nombre del empleado
    setNombre: (newNombre) => {
        let anterior = empleado.nombre
        empleado.nombre = newNombre
        return anterior
    }
}


// Usamos los metodos del objeto
empleado.mostrarDatos() // Nombre: Alejandro    Edad: 24

let anterior = empleado.setNombre('Vicente')
empleado.mostrarDatos() // Nombre: Vicente    Edad: 24
console.log(`El nombre anterior era: ${anterior}`) // El nombre anterior era: Alejandro


console.log('\n______________________________________________________\n')
/************************** Otro Ejemplo de Metodos **************************/
// Crear objeto que modele un triangulo rectangulo
// Las propiedades iniciales son base y altura
// El objeto debe tener metodos para calcular el area y el perimetro del triangulo

const triangulo = {
    base : 0,
    altura : 0,
    // Guarda los datos del triangulo
    inicializar : (base, altura) => {
        triangulo.base = base
        triangulo.altura = altura
    },
    // Imprime los datos del triangulo
    mostrarDatos : () => {
        console.log(`Altura: ${triangulo.altura}  |  Base: ${triangulo.base}`)
    },
    // Calcula el area del triangulo
    area : () => {
        return triangulo.base * triangulo.altura / 2
    },
    // Calcula la hipotenusa
    hipotenusa : () => {
        return Math.sqrt((triangulo.base ** 2) + (triangulo.altura ** 2))
    },
    // Calcula el perimetro
    perimetro : () => {
        return (triangulo.base + triangulo.altura + triangulo.hipotenusa())
    },
}


// Iinicializamos y mostramos los datos
triangulo.inicializar(50, 70)
triangulo.mostrarDatos() // Altura: 70  |  Base: 50

console.log(`El area del triangulo es: ${triangulo.area()} u^2`)
console.log(`El perimetro del triangulo es: ${triangulo.perimetro().toFixed(2)} u`)
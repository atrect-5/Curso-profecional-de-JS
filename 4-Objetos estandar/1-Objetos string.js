
// Se crea un objeto tipo string y se le asigna el valor
//let cadena = new String('Hello world')
let cadena = 'Hello world'

// length -> Devuelve la cantidad de elementos en una lista
    // Debido a que un string es una "lista" de caracteres, tambien se puede usar en string
let mensaje = `Nuestro texto tiene ${cadena.length} caracteres`
console.log(mensaje) // Nuestro texto tiene 11 caracteres
console.log(cadena[0]) // H

// toUpperCase() -> Convierte el string a mayusculas
let mayus = cadena.toUpperCase()
console.log(mayus) // HELLO WORLD

// toLowerCase() -> Convierte el string a minusculas
let minus = cadena.toLowerCase()
console.log(minus) // hello world

// substring() -> Devuelve una parte del string
let subCadena = cadena.substring(6, 11) // Devuelve desde la posicion 6 al 11
console.log(subCadena) // world
console.log(cadena.substring(6)) // world

// slice() -> Devuelve una parte del string, parecido a substring
    // La diferencia es que slice permite usar indices negativos
let subCadena2 = cadena.slice(6, 11) // Devuelve desde la posicion 6 al 11
console.log(subCadena2) // world
console.log(cadena.slice(-3)) // rld

// startsWith() -> Devuelve true si el string empieza con el valor indicado
console.log(cadena.startsWith('Hello')) // true
// endsWith() -> Devuelve true si el string termina con el valor indicado
console.log(cadena.endsWith('world')) // true

// includes() -> Devuelve true si el string contiene el valor indicado
console.log(cadena.includes('o wor')) // true
console.log(cadena.includes('x')) // false

// indexOf() -> Devuelve la posicion de la primera aparicion del valor indicado
console.log(cadena.indexOf('o')) // 4
console.log(cadena.indexOf('o', 5)) // 7
console.log(cadena.indexOf('world')) // 6
console.log(cadena.indexOf('x')) // -1

// replace() -> Reemplaza el valor indicado por otro
let cadena2 = cadena.replace('Hello', 'Hola')
console.log(cadena2) // Hola world
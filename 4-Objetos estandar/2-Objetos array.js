
// Asi JS lo interpreta
//let array = new Array(1, 2, 3, 4, 5)
let array = [1, 100, 2, 3, 4, 5, 15, 8, 12, 5]

/************************** Estos metodos no modifican el array principal **************************/

// length -> Devuelve la cantidad de elementos en una lista
let mensaje = `Nuestro array tiene ${array.length} elementos`
console.log(mensaje) // Nuestro array tiene 10 elementos

// slice() -> Devuelve una parte del array
let subArray = array.slice(2, 5) // Devuelve desde la posicion 2 al 5
console.log(subArray) // [2, 3, 4]
console.log(array.slice(2)) // [2, 3, 4, 5, 15, 8, 12, 5]

// filter() -> Devuelve un nuevo array con los elementos que cumplen la condicion
let arrayFiltrado = array.filter(elemento => elemento % 2 == 0) // Filtra los elementos que son pares
console.log(arrayFiltrado) // [ 100, 2, 4, 8, 12 ]

// join() -> Convierte el array en un string
let cadenaArray = array.join(' - ') // Convierte el array en un string separado por -
console.log(cadenaArray) // 1 - 100 - 2 - 3 - 4 - 5 - 15 - 8 - 12 - 5
// console.log(array.join()) // 1,100,2,3,4,5,15,8,12,5

// indexOf() -> Devuelve la posicion de la primera aparicion del valor indicado
console.log(array.indexOf(100)) // 1
console.log(array.indexOf(100, 2)) // -1

// lastIndexOf() -> Devuelve la posicion de la ultima aparicion del valor indicado
console.log(array.lastIndexOf(5)) // 9

// concat() -> Une dos arrays
let array2 = [1, 2, 3]
let arrayConcatenado = array.concat(array2)
console.log(arrayConcatenado) // [ 1, 100, 2, 3, 4, 5, 15, 8, 12, 5, 1, 2, 3 ]

// every() -> Devuelve true si todos los elementos cumplen la condicion
let todosPares = array.every(elemento => elemento % 2 == 0) // Verifica si todos los elementos son pares
console.log(todosPares) // false

// some() -> Devuelve true si al menos un elemento cumple la condicion
let alMenosUnPar = array.some(elemento => elemento % 2 == 0) // Verifica si al menos un elemento es par
console.log(alMenosUnPar) // true

// forEach() -> Recorre el array y ejecuta la funcion indicada
array.forEach((elemento, indice) => {
    console.log(`Elemento ${indice}: ${elemento}`)
}) // Elemento 0: 1, Elemento 1: 100, Elemento 2: 2, ...

// map() -> Recorre el array y devuelve un nuevo array con los elementos modificados
let arrayMapeado = array.map((elemento, indice) => {
    return elemento * 2 // Multiplica cada elemento por 2
})
console.log(arrayMapeado) // [2, 200,  4,  6,  8, 10,  30, 16, 24, 10]

// reduce() -> Recorre el array y devuelve un solo valor
let suma = array.reduce((acumulador, elemento) => {
    return acumulador + elemento
}, 0)// El segundo argumento '0' es el valor inicial del acumulador
console.log(suma) // 155

/************************** Estos metodos si modifican el array principal **************************/

// splice() -> Elimina elementos del array
    // Devuelve el array eliminado
let arrayEliminado = array.splice(2, 3) // Elimina 3 elementos desde la posicion 2
console.log(arrayEliminado) // [2, 3, 4]
console.log(array) // [1, 100, 5, 15, 8, 12, 5]

// push() -> Agrega un elemento al final del array
array.push(200, 1) // Agrega el elemento 200 y 1 al final del array
console.log(array) // [1, 100, 5, 15, 8, 12, 5, 200, 1]

// unshift() -> Agrega un elemento al principio del array
array.unshift(0) // Agrega el elemento 0 al principio del array
console.log(array) // [0, 1, 100, 5, 15, 8, 12, 5, 200, 1]

// pop() -> Elimina el ultimo elemento del array
let elementoEliminado = array.pop() // Elimina el ultimo elemento del array
console.log(elementoEliminado) // 1
console.log(array) // [0, 1, 100, 5, 15, 8, 12, 5, 200]

// shift() -> Elimina el primer elemento del array
let primerElementoEliminado = array.shift() // Elimina el primer elemento del array
console.log(primerElementoEliminado) // 0
console.log(array) // [1, 100, 5, 15, 8, 12, 5, 200]

// reverse() -> Invierte el orden de los elementos del array
array.reverse() // Invierte el orden de los elementos del array
console.log(array) // [200, 5, 12, 8, 15, 5, 100, 1]

// sort() -> Ordena los elementos del array
    // Por defecto ordena alfabeticamente
array.sort() // Ordena los elementos del array
console.log(array) // [1, 100, 12, 15, 200, 5,  5,  8]
    // Para ordenar de mayor a menor
array.sort((a, b) => b - a) // Ordena los elementos del array de mayor a menor
console.log(array) // [200, 100, 15, 12, 8, 5, 4, 3, 2, 1]

// fill() -> Llena el array con el valor indicado
array.fill(0) // Llena el array con el valor 0
console.log(array) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

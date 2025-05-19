
/***** log *****/
// Imprime un mensaje en la consola
let nombre = 'Alejandro'
console.log('Hello', nombre)

/***** assert *****/
// Nos imprime un mensaje cuando la condicional es falsa, si es verdadera no muestra nada en consola
let numero = 10
console.assert(numero > 100, `${numero} no es mayor que 100`) // Assertion failed: 10 no es mayor que 100
let isOk = false
console.assert(isOk, 'No esta OK') // Assertion failed: No esta OK

/***** clear *****/
// Limpia el contenido de la consola
function limpiarConsola () {
    console.clear() // Console was cleared
}

/***** info *****/
// Similar a log, pero con estilo informativo
console.info('Console info')

/***** warn *****/
// Muestra una advertencia
console.warn('Console warn')

/***** error *****/
// Muestra un mensaje de error
console.error("¡Error!")

/***** debug *****/
// Similar a log, pero puede ocultarse en algunos navegadores
console.debug("Console debug")

/***** table *****/
// Muestra un array u objeto en forma de tabla
const persona = { nombre: "Ana", edad: 28 }
console.table(persona) // Muestra el objeto como tabla

const personas = [
    { nombre: "Ana", edad: 28 },
    { nombre: "Luis", edad: 35 }
]
console.table(personas) // Muestra una tabla con varias filas

/***** time *****/
// Inicia un temporizador
console.time("Console time") // Inicia el temporizador
for (let i = 0; i < 1000000; i++) {} // Simula un proceso
console.timeEnd("Console time") // Muestra cuánto tardó

/***** group *****/
// Agrupa mensajes en la consola
console.group("Grupo 1") // Inicia un grupo
console.log("Mensaje 1")
console.log("Mensaje 2")
console.groupEnd() // Finaliza el grupo

/***** groupCollapsed *****/
// Agrupa mensajes en la consola, pero colapsado
console.groupCollapsed("Grupo 2") // Inicia un grupo colapsado
console.log("Mensaje 3")
console.log("Mensaje 4")
console.groupEnd() // Finaliza el grupo

/***** count *****/
// Cuenta cuántas veces se ha llamado a un mensaje
console.count("Contador") // Contador: 1
console.count("Contador") // Contador: 2

/***** countReset *****/
// Reinicia el contador
console.countReset("Contador")

/***** trace *****/
// Muestra la traza de la pila de llamadas
function funcion1() {
    funcion2()
}
function funcion2() {
    console.trace()
}
funcion1() // Muestra la traza de la pila de llamadas

/***** dir *****/
// Muestra la representación interna de un objeto
const objeto = { a: 1, b: 2, c: 3 }
console.dir(objeto) // Muestra la representación interna del objeto


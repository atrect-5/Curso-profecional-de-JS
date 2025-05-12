
// Summa dos numeros
function sumatoria (a, b){
    let total = a + b
    return total
}

// Summa dos numeros 
    /** Funcion anonima (Funcion sin nombre, se almacena en una variable) **/
let sumatoriaAnonima = function (a, b) {
    let total = a + b
    return total
}

console.log(sumatoria(5, 5)) // 10
console.log(sumatoriaAnonima(5, 5)) // 10


// Ejecuta una funcion y regresa el resultado de la funcion ejecutada
    /*** Recibe una funcion anonima como parametro ***/
let ejecutarFuncion = function (f, valor1, valor2){
    let resultado = f(valor1, valor2)
    return resultado
}

console.log(ejecutarFuncion(sumatoriaAnonima, 5, 5)) // 10


// Summa dos numeros 
    /** Esta funcion se ejecuta con los valores de entrada predeterminados **/
let sumatoriaAnonimaAuto = (function (a, b) {
    let total = a + b
    return total
})(10, 10)

console.log(sumatoriaAnonimaAuto) // 20


// Summa dos numeros 
    /** Se declara con arrow function **/
let sumatoriaAnonimaArrowFunction = (a, b) => {
    let total = a + b
    return total
}

// Summa dos numeros 
    /** Se declara con arrow function pero autoejecutable **/
let sumatoriaAnonimaArrowFunctionAuto = ((a, b) => {
    let total = a + b
    return total
})(15, 15)

console.log(sumatoriaAnonimaArrowFunction(15, 15)) // 30
console.log(sumatoriaAnonimaArrowFunctionAuto) // 30

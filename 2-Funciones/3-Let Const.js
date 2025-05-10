
var ambito = "global"
// Si se modifica la variable en la funcion, se modifica en el ambito global
function miFuncion(){
    ambito = "local"
    console.log(ambito) // local
}
miFuncion()
console.log(ambito) // local


var ambito2 = "global"
// Si se crea la variable en la funcion, no se modifica en el ambito global
function miFuncion2(){
    var ambito2 = "local"
    console.log(ambito2) // local
}
miFuncion2()
console.log(ambito2) // global


// Hoisting 
//      La variable se puede usar al arrancar el programa si es declarada en algun momento (aun despues de usarla), pero su valor es indefinido (hasta que se le asigna algun valor)
//      Si no es declarada, da error.
//console.log(unexistingVariable) // ReferenceError: unexistingVariable is not defined
console.log(notDeclaredYet) // undefined
var notDeclaredYet = "Now has a value"
console.log(notDeclaredYet) // Now has a value


/********* LET (Similar a var, pero no permimte redeclarar variables) ***********/
var variable = 10
var variable = 15
console.log(variable) // 15

let variable2 = 10
//let variable2 = 15 // SyntaxError: Identifier 'variable2' has already been declared
console.log(variable2) // 15


/********* CONST (Similar a let, pero no permimte cambiar el valor) ***********/
const edad = 24
//edad = 25 //TypeError: Assignment to constant variable.
let resultado = edad * 2 

console.log(edad) // 24
console.log(resultado) // 48


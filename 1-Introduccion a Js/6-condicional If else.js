
var variable = 9
var condicional = variable <= 20
var condicional2 = variable >= 10

if (condicional && condicional2){
    alert(`${variable} esta entre 10 y 20`)
} else {
    alert(`${variable} NO esta entre 10 y 20`)
}

var nombre = '' // Vacio es igual a false.
if (nombre){
    alert(`Hello ${nombre}`)
} else {
    alert('There is no name :(')
}
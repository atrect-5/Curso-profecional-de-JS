
var variable = 11
if (variable > 10) {
    alert(`${variable} es mayor que 10`)
}
// <, >, <=, >=, ==, ===, !=, !==
// ! (negacion)
// && (and), || (or)

var condicional = variable > 10 // no incluye el 10
var condicional2 = variable <= 20 // incluye el 20
var condicional3 = variable == 25
if (condicional) {
    alert(`Se cumple la condicional`)
}
if (!condicional) {
    alert(`No se cumple la condicional`)
}

if (condicional && condicional2){
    alert(`${variable} esta entre 10 y 20`)
}

if (condicional2 || condicional3){
    alert(`${variable} es menor que 20 o es 25`)
}

var edad = 20
if (edad){
    alert('Edad existe y es diferente de 0')
}
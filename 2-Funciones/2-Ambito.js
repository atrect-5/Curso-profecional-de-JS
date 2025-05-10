
var variableGlobal = 10

// Imprime los valores de las variables local y global
function miFuncion () {
    var variableLocal = 5
    console.log('***Dentro de la funcion***')
    console.log(`Variable local: ${variableLocal}, variable global: ${variableGlobal}`) // Variable local: 5, variable global: 10
}

miFuncion()
/*
console.log('***Fuera de la funcion***')
console.log(`Variable local: ${variableLocal}, variable global: ${variableGlobal}`) // ReferenceError: variableLocal is not defined
*/

var variableGlobalLocal = 15
// Declaramos dentro de la funcion una variable con el mismo nombre que la de afeura
function copyingName (){
    var variableGlobalLocal = 10
    console.log('***Dentro de la funcion***')
    console.log(`Variable local global: ${variableGlobalLocal}`) // Variable local global: 10
}
copyingName()


/***** Recomendable mandar las variables como parametro, en lugar de modificar variables globales en funciones *****/

var tiempo = 60 
var elementos = 10

// Funion que imprime el valor de dos parametros
function imprimeParametro (valor, valor2){
    console.log(valor) 
    console.log(valor2) 
}

imprimeParametro(tiempo, elementos) // 60 10
imprimeParametro(100, 50) // 100 50



// Funcion que regresa el area de un triangulo
function areaTriangulo(base, altura){
    var area = (base * altura) / 2
    return area
}

var resultado = areaTriangulo(10, 20)
console.log(resultado) // 100



var a = 100
var b = 5

// Regresa el total de la suma de 2 numeros, o 0 si la suma es menor a 100
function comparador (valor, valor2){
    var total = valor + valor2
    if (total > 100){
        return total
    }else{
        return 0
    }
}

var resultado = comparador(a, b)
console.log(resultado) // 105

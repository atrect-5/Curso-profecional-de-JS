
/**************************************************************************
 * DESCRIPCION
Escribe un programa que, al recibir un listado de números enteros positivos, 
obtenga la suma de los números pares y el promedio de los números impares.
**************************************************************************/

var array = [1,2,3,4,5,6,7,8,9,10]

var imparSum = 0
var imparCounter = 0
var parSum = 0

for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (element % 2){
        imparSum += element
        imparCounter++
    } else {
        parSum += element
    }
}

if (!imparCounter){
    imparCounter++ // En caso de que sea 0, lo convertimos a 1 para evitar problemas al dividir entre 0
}

alert(`Suma de pares: ${parSum}, promedio impares: ${imparSum / imparCounter}`)
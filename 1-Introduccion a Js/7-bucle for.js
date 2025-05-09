
var suma = 0
for (let i = 0; i < 5; i++) {
    suma +=10    
}
alert(suma)


var array = [1,2,3,4,5]
var sumaTotal = 0 
for (let i = 0; i < array.length; i++) {
    sumaTotal += array[i]
}
alert(sumaTotal)


var multiArray = [[1,2,3], [4,5,6], [7,8,9]]
sumaTotal = 0
for (let i = 0; i < multiArray.length; i++) {
    for (let j = 0; j < multiArray[i].length; j++) {
        sumaTotal += multiArray[i][j]
    }
}
alert(sumaTotal) // Suma todos los numeros de array multidimensional
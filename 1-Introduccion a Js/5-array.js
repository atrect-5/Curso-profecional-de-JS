
var array = ["rojo", "verde", "azul"]
alert(array) // rojo,verde,azul
alert(array[0]) // rojo

var arrayMix = ["rojo", 100, false]
alert(arrayMix[4]) // undefined

var arrayMix = ["rojo", 100, true, false, null, "Hi"]
alert(arrayMix[4]) // null

var arrayNum = [1, 2, 3]
arrayNum[1] += 10
alert(arrayNum) // 1,12,3

arrayNum = [] // Se vacia
alert(arrayNum) //

// Arrays multidimensional (anidados)
var multiArray = [[1,2,3], ["Hello", "Bye"]]
alert(multiArray) // 1,2,3,Hello,Bye
alert(multiArray[1][0]) // Hello
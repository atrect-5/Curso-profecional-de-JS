

let valor = 123.645
console.log(valor) // 123.645

// Constantes
console.log(Math.PI) // 3.141592653589793
console.log(Math.E) //  2.718281828459045

// redondea hacia arriba
console.log(`Ceil: ${Math.ceil(valor)}`) //124
// redondea hacia abajo
console.log(`Floor: ${Math.floor(valor)}`) //123
// redondea al entero más cercano
console.log(`Round: ${Math.round(valor)}`) //124
// elimina la parte decimal sin importar si el número es positivo o negativo
console.log(`Trunc: ${Math.trunc(valor)}`) //123

// devuelve el valor absoluto
console.log(`Abs: ${Math.abs(-valor)}`) //123.645

// devuelve el valor máximo
console.log(`Max: ${Math.max(1, 2, 3, 4, 5)}`) //5
// devuelve el valor mínimo
console.log(`Min: ${Math.min(1, 2, 3, 4, 5)}`) //1

// devuelve un número aleatorio entre 0 y 1
console.log(`Random: ${Math.random()}`) // <aleatorio>
// devuelve un número aleatorio entre un rango

let limiteMaximo = 10
let limiteMinimo = 1
console.log(`Random: ${Math.floor(Math.random() * (limiteMaximo - limiteMinimo + 1)) + limiteMinimo}`) // <aleatorio>

// devuelve la raíz cuadrada
console.log(`Sqrt: ${Math.sqrt(16)}`) //4
// devuelve la potencia
console.log(`Pow: ${Math.pow(2, 3)}`) //8

// devuelve el seno
console.log(`Sin: ${Math.sin(Math.PI / 2)}`) //1
// devuelve el coseno
console.log(`Cos: ${Math.cos(Math.PI)}`) //-1
// devuelve la tangente
console.log(`Tan: ${Math.tan(Math.PI / 4)}`) //1

// devuelve el logaritmo natural
console.log(`Log: ${Math.log(10)}`) //2.302585092994046
// devuelve el logaritmo en base 10
console.log(`Log10: ${Math.log10(10)}`) //1
// devuelve el logaritmo en base 2
console.log(`Log2: ${Math.log2(10)}`) //3.321928094887362
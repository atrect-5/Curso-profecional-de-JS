
// Funciones que JS nos provee de forma nativa

// isNaN (Devuelve true si el valor no puede ser convertido numero, false si es posible la conversion)

console.log(isNaN('Hello'))  // true
console.log(isNaN(123))      // false
console.log(isNaN('.123'))   // false
console.log(isNaN(NaN))      // true

let variable = '25.15'

if(isNaN(variable)){
    console.log(`${variable} No es un numero`)    // Hola No es un numero
} else {
    // parseInt (Devuelve el texto convertido a numero entero)
    let numero = parseInt(variable)

    // parseFloat (Devuelve el texto convertido a numero decimal)
    let flotante = parseFloat(variable)

    console.log(`${numero} Es un numero entero, ${flotante} Es un numero decimal`) // 25 Es un numero entero, 25.15 Es un numero decimal
}


// encodeURIComponent (se utiliza para codificar un componente de un URI (Uniform Resource Identifier). Esta función reemplaza cada instancia de ciertos caracteres por una, dos, tres o cuatro secuencias de escape UTF-8 que representan el carácter.)
let nombre = "Alejandro Gonzalez@;$%"
let nombreCodificado = encodeURIComponent(nombre)
let url = `http://pagina.com/perfil/${nombreCodificado}`

console.log(url) // http://pagina.com/perfil/Alejandro%20Gonzalez%40%3B%24%25

// decodeURIComponent decodifica los caracteres codificados con encodeURIComponent
let nombreDecodificado = decodeURIComponent(nombreCodificado)
console.log(nombreDecodificado) // Alejandro Gonzalez@;$%

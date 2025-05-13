
/**************************************************************************
 * DESCRIPCION
Escribe un programa que, al recibir un número entero de 4 dígitos, lo imprima de forma inversa. 

Ejemplo:
Numero = 1234 – – – > Inversa= 4321
**************************************************************************/

// Regresa un numero escrito de manera inversa
const volteaNumero = (numero) => {
    let numeroVolteado = numero.toString().split('').reverse().join('')
    return parseInt(numeroVolteado)
}

let numero = 1234
console.log(`Numero: ${numero}, Inverso: ${volteaNumero(numero)}`)
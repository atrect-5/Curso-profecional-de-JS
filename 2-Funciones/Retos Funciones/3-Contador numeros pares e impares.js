
/**************************************************************************
 * DESCRIPCION
Escribe un programa que, al recibir una lista de números enteros, 
determine cuántos de estos números son pares y cuántos son impares
**************************************************************************/

// Regresa un diccionario con la cantidad de numeros pares e impares
const calculaParesImpares = (lista) => {
    const diccionarioParesImpares = {
        "pares" : lista.filter(numero => parseInt(numero) % 2 == 0).length,
        "impares" : lista.filter(numero => parseInt(numero) % 2 == 1).length
    }
    return diccionarioParesImpares
}

const numeros = [
  '59', '50', '9',  '75', '95',
  '81', '59', '55', '3',  '57',
  '55', '89', '64', '72', '57',
  '81', '17', '87', '5',  '52',
  '14', '83', '92', '55', '58',
  '1',  '27', '50', '47', '2'
]

const diccionarioParesImpares = calculaParesImpares(numeros)
console.log(`Cantidad Pares: ${diccionarioParesImpares['pares']}`)
console.log(`Cantidad Impares: ${diccionarioParesImpares['impares']}`)
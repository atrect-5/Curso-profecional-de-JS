
/**************************************************************************
 * DESCRIPCION
Un individuo invierte en un banco un capital específico y quiere saber 
cuánto obtendrá al cabo de cierto tiempo, si el dinero se coloca a una 
determinada tasa de interés mensual. Escribe un programa correspondiente.
**************************************************************************/

// Retorna el total del capital despues de n meses a una tasa x mensual
const calculaCapitalEsperado = (meses, tasa, capital) => {
    // Formula matematica para el interes compuesto
    let total = capital * Math.pow((1 + tasa / 100), meses)
    return total
}

let meses = 24
let tasa = 2.5
let capital = 43000

console.log(`Con un capital inicial de $ ${capital}, a una tasa mensual de % ${tasa}, despues de ${meses} meses`)
console.log(`El total sera de: $ ${calculaCapitalEsperado(meses, tasa, capital).toFixed(2)}`)
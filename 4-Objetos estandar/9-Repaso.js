
// Se define el objeto circulo
class Circulo {
    constructor(r){
        this.r = r
    }
    // Regresa el valor del radio
    radio () {
        return this.r
    }
    // Calcula y regresa el perimetro
    perimetro () {
        return 2 * Math.PI * this.r
    }    
    // Calcula y regresa el area
    area () {
        return Math.PI * (this.r ** 2)
    }
}

// Se calcula el area y perimetro de un circulo
function calcular () {
    const resultados = document.getElementById('resultado')
    let radio = document.getElementById('radio').value

    if (isNaN(radio) || !radio){
        alert('Ingrese un radio valido')
        resultados.style.display = 'none'
    } else {
        radio = parseFloat(radio)
        let circulo = new Circulo(radio)
        let liList = document.querySelectorAll('#resultado > li')

        liList[0].innerHTML = `Radio: ${circulo.radio()} U`
        liList[1].innerHTML = `Perimetro: ${circulo.perimetro()} U`
        liList[2].innerHTML = `Area: ${circulo.area()} U²`

        resultados.style.display = 'block'
    }
}

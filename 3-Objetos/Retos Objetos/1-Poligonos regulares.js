
/**************************************************************************
 * DESCRIPCION
Crea un programa que modele el objeto de un polígono regular. 
Debe calcular el perímetro de la figura, así como el área de la misma.

Area = Perimetro * apotema / 2

NOTA:
Ya que la medida del lado afecta directamente el perimetro y tambien el apotema,
se debe calcular el apotema tambien tomando en cuenta el numero de lados y la 
medida de cada lado.
Esto porque cualquier medida (aleatoria) del lado, numero de lados y medida de apotema no
corresponderia a un poligono regular.

apotema = ( Lado ) / ( 2*tan( π / nLados ) )
**************************************************************************/

class PoligonoRegular {
    constructor(numeroLados, ladoMedida) {
        this.ladosCantidad = numeroLados
        this.ladoMedida = ladoMedida
    }
    // Metodo que calcula el apotema usando el numero de lados y la medida de cada lado
    apotema () {
        if (this.ladosCantidad <= 1){
            console.log(`Tiene muy pocos lados o lados negativos (No se puede calcular)`)
            return 0
        }
        let medidaApotema = (this.ladoMedida) / (2 * Math.tan(Math.PI / this.ladosCantidad))
        return medidaApotema
    }
    // Metodo que calcula el perimetro del poligono
    perimetro () {
        if (this.ladosCantidad <= 1){
            console.log(`Tiene muy pocos lados o lados negativos (No se puede calcular)`)
            return 0
        }
        let perimetro = this.ladoMedida * this.ladosCantidad
        return perimetro
    }
    // Metodo que calcula el area del poligono
    area () {
        if (this.ladosCantidad <= 1){
            console.log(`Tiene muy pocos lados o lados negativos (No se puede calcular)`)
            return 0
        }
        let area = (this.perimetro() * this.apotema()) / 2
        return area
    }
    // Muestra los datos del poligono
    showData () {
        if (this.ladosCantidad <= 1){
            console.log(`Tiene muy pocos lados o lados negativos (No se puede calcular)`)
            return
        }
        console.log(`El poligono de ${this.ladosCantidad} lados, que miden ${this.ladoMedida} u, tiene:`)
        console.log(`Area: ${this.area().toFixed(2).replace(/\.?0+$/, '')} u^2 | Perimetro: ${this.perimetro().toFixed(2).replace(/\.?0+$/, '')} u`)
    }
}

const pentagono = new PoligonoRegular(numeroLados = 5, ladoMedida = 7)
pentagono.showData()
/*
El poligono de 5 lados, que miden 7 u, tiene:
Area: 84.3 u^2 | Perimetro: 35 u
*/

const triangulo = new PoligonoRegular(numeroLados = 3, ladoMedida = 10)
triangulo.showData()
/*
El poligono de 3 lados, que miden 10 u, tiene:
Area: 43.3 u^2 | Perimetro: 30 u
*/

const poligono = new PoligonoRegular(numeroLados = 100, ladoMedida = .3)
poligono.showData()
/*
El poligono de 100 lados, que miden 0.3 u, tiene:
Area: 71.6 u^2 | Perimetro: 30 u
*/

const duoligono = new PoligonoRegular(numeroLados = 2, ladoMedida = 10)
duoligono.showData()
/*
El poligono de 2 lados, que miden 10 u, tiene:
Area: 0 u^2 | Perimetro: 20 u
*/

const linea = new PoligonoRegular(numeroLados = 1, ladoMedida = 10)
linea.showData()
/*
Tiene muy pocos lados o lados negativos (No se puede calcular)
*/
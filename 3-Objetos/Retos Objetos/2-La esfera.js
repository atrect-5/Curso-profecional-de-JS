
/**************************************************************************
 * DESCRIPCION
Crea un programa que modele el objeto esfera. El modelo debe tener un método 
que calcule el volumen de la esfera.

Si una esfera es cortada por la mitad, la base de este nuevo sólido es un 
círculo. Añade métodos que nos permitan calcular el perímetro y el área de este círculo.
**************************************************************************/

class Esfera {
    constructor(radio) {
        this.radio = radio
    }
    // Calcula el perimetro de la circunferencia al partirse la esfera 
    perimetroCirculo () {
        if (this.radio <= 0){
            console.error(`La esfera no tiene radio o es negativo`)
            return 0
        }
        let perimetro = 2 * Math.PI * this.radio
        return perimetro
    }
    // Calcula el area del circulo al partirse la esfera 
    areaCirculo () {
        if (this.radio <= 0){
            console.error(`La esfera no tiene radio o es negativo`)
            return 0
        }
        let area = Math.PI * (this.radio ** 2)
        return area
    }
    // Metodo que calcula el volumen de la esfera
    volumen () {
        if (this.radio <= 0){
            console.error(`La esfera no tiene radio o es negativo`)
            return 0
        }
        let volumen = (4 / 3) * Math.PI * (this.radio ** 3)
        return volumen
    }
    // Muestra los datos del poligono
    showData () {
        if (this.radio <= 0){
            console.error(`La esfera no tiene radio o es negativo`)
            return
        }
        console.log(`El Volumen de la esfera con radio ${this.radio} es: ${this.volumen().toFixed(2).replace(/\.?0+$/, '')} u^3`)
        console.log('Si se parte la esfera en 2, tenemos un circulo con los datos:')
        console.log(`Area: ${this.areaCirculo().toFixed(2).replace(/\.?0+$/, '')} u^2 | Perimetro: ${this.perimetroCirculo().toFixed(2).replace(/\.?0+$/, '')} u`)
    }
}


let esfera1 = new Esfera(radio = 5)
esfera1.showData()
/*
El Volumen de la esfera con radio 5 es: 523.6 u^3
Si se parte la esfera en 2, tenemos un circulo con los datos:
Area: 78.54 | Perimetro: 31.42
*/

let esfera2 = new Esfera(radio = 10)
esfera2.showData()
/*
El Volumen de la esfera con radio 10 es: 4188.79 u^3
Si se parte la esfera en 2, tenemos un circulo con los datos:
Area: 314.16 | Perimetro: 62.83
*/

let esferaImposible = new Esfera(radio = -1)
esferaImposible.showData()
/*
La esfera no tiene radio o es negativo
*/
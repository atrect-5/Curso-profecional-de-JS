
/**************************************************************************
 * DESCRIPCION
Una empresa de bienes raíces en Nueva York lleva la información sobre las 
propiedades que tiene disponibles tanto para venta como para renta.
La estructura de sus registros está modelada por el siguiente objeto

*Clave de la propiedad (Numérico)
*Superficie total (Numérico)
*Características (Cadena de texto)
*Ubicación Geográfica
    *Zona (Cadena de texto)
    *Calle (Cadena de texto)
    *Numero (Numérico)
    *Código postal (Numérico)
*Precio en Dólares (Numérico)
*Disponibilidad (Carácter. V= Venta y R= Renta)

Escribe un programa que realice lo siguiente:
1-Una función que enlista las propiedades disponibles para venta en la zona 
  de Central Park cuyo valor oscile entre 500,000 y 2.8M USD
2-Al recibir una zona geográfica, un precio máximo y un precio mínimo, nos 
  enlista todas las propiedades disponibles para rentar

Nota: El listado debe mostrar lo siguiente: Clave de la propiedad, 
superficie total, características, calle y número, código postal y precio.
**************************************************************************/

class Ubicacion {
    constructor (zona, calle, numero, cp) {
        this.zona = zona
        this.calle = calle
        this.numero = numero
        this.cp = cp
    }
}

class Propiedad {
    constructor(clave, superficie, caracteristicas, ubicacion, precio, disponibilidad ) {
        this.clave = clave
        this.superficie = superficie
        this.caracteristicas = caracteristicas
        this.ubicacion = ubicacion // instancia de Ubicacion
        this.precio = precio
        this.disponibilidad = disponibilidad
    }

    // Muestra la informacion de las propiedades 
    mostrarInformacion() {
        console.log(`Clave de la propiedad: ${this.clave}`)
        console.log(`Superficie total: ${this.superficie} m²`)
        console.log(`Características: ${this.caracteristicas}`)
        console.log(`Ubicación: ${this.ubicacion.calle} ${this.ubicacion.numero}, CP: ${this.ubicacion.cp}`)
        console.log(`Precio: $${this.precio} USD`)
        console.log(`Disponibilidad: ${this.disponibilidad === 'V' ? 'Venta' : 'Renta'}`)
    }

}

// Devuelve una lista de las propiedades en venta en Central Park donde sus precios oscilan entre 500,000 y 2.8M USD
function listarPropiedadesVentaCentralPark (propiedades) {
    let listaPropiedades = propiedades.filter( propiedad => 
        propiedad.ubicacion.zona === 'Central Park' && 
        propiedad.disponibilidad === 'V' && 
        propiedad.precio >= 500000 && 
        propiedad.precio <= 2800000
    )
    return listaPropiedades || []
}

// Devuelve una lista de las propiedades disponibles para rentar en una zona especificada oscilando en un precio especificado
function listarPropiedadesRentaPorZonaYPrecio (propiedades, zona, precioMax, precioMin) {
    let listaPropiedades = propiedades.filter( propiedad => 
        propiedad.ubicacion.zona === zona && 
        propiedad.disponibilidad === 'R' && 
        propiedad.precio >= precioMin && 
        propiedad.precio <= precioMax
    )
    return listaPropiedades || []
}

// Imprime los datos de una lista de propiedades
function imprimeDatosDePropiedades (listaPropiedades){
    if(listaPropiedades.length === 0){
        console.log('No hay propiedades por mostrar')
        return
    }
    for (let propiedad of listaPropiedades) {
        propiedad.mostrarInformacion()        
        console.log('---------------')
    }
}

// Se declaran las ubicaciones
const ubicacion1 = new Ubicacion("Central Park", "5th Avenue", 101, 10001)
const ubicacion2 = new Ubicacion("Brooklyn", "Bedford Avenue", 202, 11211)
const ubicacion3 = new Ubicacion("Central Park", "Central Park West", 303, 10023)
const ubicacion4 = new Ubicacion("Bronx", "Grand Concourse", 404, 10451)
const ubicacion5 = new Ubicacion("Staten Island", "Richmond Terrace", 505, 10301)
const ubicacion6 = new Ubicacion("Harlem", "Malcolm X Blvd", 606, 10027)
const ubicacion7 = new Ubicacion("Central Park", "5th Avenue", 111, 10001)

// Se crea la lista de propiedades
const propiedades = [   
    new Propiedad(12345, 150, "3 habitaciones, 2 baños, jardín", ubicacion1, 1200000, "V"),
    new Propiedad(12346, 200, "4 habitaciones, 3 baños, piscina", ubicacion2, 1500000, "R"),
    new Propiedad(12347, 100, "2 habitaciones, 1 baño, balcón", ubicacion3, 900000, "V"),
    new Propiedad(12348, 180, "3 habitaciones, 2 baños, garaje", ubicacion4, 1100000, "R"),
    new Propiedad(12349, 220, "5 habitaciones, 4 baños, terraza", ubicacion5, 2000000, "V"),
    new Propiedad(12350, 50, "2 habitaciones, 2 baños, ático", ubicacion6, 499999, "R"),
    new Propiedad(12351, 85, "1 habitaciones, 2 baños, ático", ubicacion7, 300000, "V"),
]

const propiedadesEnVentaCentralPark = listarPropiedadesVentaCentralPark(propiedades)
console.log('Propiedades en venta en Central Park')
imprimeDatosDePropiedades(propiedadesEnVentaCentralPark)

console.log('\n\n')

let zonaDeRenta = 'Brooklyn'
let maximoRenta = 2000000
let minimoRenta = 1000000
const propiedadesEnRenta = listarPropiedadesRentaPorZonaYPrecio(propiedades, zonaDeRenta, maximoRenta, minimoRenta)
console.log('Propiedades en Renta en', zonaDeRenta)
imprimeDatosDePropiedades(propiedadesEnRenta)
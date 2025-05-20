
// Se crea la estructura de como se guardarian los datos en la base de datos (datos iniciales)

// cantidad de dinero disponible en la caja
const db_cash = 10000

// Estructura de la lista de productos
const db_products = [
    {
        id: '1',
        name: 'Manzana',
        stored: 1500,
        price: 15
    },
    {
        id: '2',
        name: 'Pera',
        stored: 1000,
        price: 13
    },
    {
        id: '3',
        name: 'Sandia',
        stored: 2500,
        price: 18
    }
]

const db_sales = [
    {
        id: '1',
        date: new Date(2025, 4, 18),
        quantity: 100,
        totalPrice: 1500
    }
]

const db_purchase = [
    {
        id: '1',
        date: new Date(2025, 4, 18),
        quantity: 150,
        price: 7.5,
        totalPrice: 150 * 7.5
    }
]

// Objeto que contiene el total del dinero en caja y funciones para desminuir/aumentar segun las compras/ventas de productos
const _cashier = (start) => {
    let totalCash = start
    return {
        // Suma el total de la venta al total de la caja
        sale: (totalPrice) => {
            totalCash += totalPrice
        },
        // Resta el total de la compra al total de la caja, si no hay dinero suficiente da error
        purchase: (totalPrice) => {
            if (totalPrice > totalCash){
                throw {
                    error: 'Fondos insuficientes'
                }
            } else {
                totalCash -= totalPrice
            }
        },
        getStored: () => {
            return totalCash
        }
    }
}

// Objeto que guarda la lista de productos que hay registrados con metodos para aumentar/disminuir segun las compras/ventas de productos
const _products = (start) => {
    let products = start
    return {
        // Resta la cantidad del producto en storage segun la venta
        sale: (id, amount) => {
            const index = products.findIndex((item) => item.id === id)
            if (index > -1){
                if (products[index].stored >= amount){
                    products[index].stored -= amount
                } else {
                    throw {error: 'No hay suficiente existencia del producto'}
                }
            } else {
                throw {error: 'No se encuntra el id del producto'}
            }
        },
        // Suma la cantidad del producto en storage segun la venta
        purchase: (id, amount) => {
            const index = products.findIndex((item) => item.id === id)
            if (index > -1){
                products[index].stored += amount
            } else {
                throw {error: 'No se encuntra el id del producto'}
            }
        },
        // Regresa la lista completa de los productos
        getAll: () => {
            return products
        },
        // Regresa un producto por Id
        getProductById: (id) => {
            const index = products.findIndex((item) => item.id === id)
            return products[index]
        },
        // Agrega un nuevo producto
        createProduct: (name, stored, price) => {
            let newProduct = {
                id: products.length + 1,
                name: name,
                stored: stored,
                price: price
            } 
            products.push(newProduct)
            return newProduct
        }
    }
}

// Objeto que guarda las ventas realizadas
const _sales = (start) => {
    let sales = start
    return {
        // Guarda una venta en la lista de ventas
        newSale: (id, quantity, price) => {
            sales.push({
                id: id,
                date: new Date(),
                quantity: quantity,
                totalPrice: quantity * price
            })
        },
        // Regresa el total de ventas
        getAll: () => {
            return sales
        },
    }
}

// Objeto que guarda las compras realizadas
const _purchase = (start) => {
    let purchases = start
    return {
        // Guarda una venta en la lista de compras
        newSale: (id, quantity, price, ) => {
            purchases.push({
                id: id,
                date: new Date(),
                quantity: quantity,
                price: price,
                totalPrice: quantity * price
            })
        },
        // Regresa el total de compras
        getAll: () => {
            return purchases
        },
    }
}
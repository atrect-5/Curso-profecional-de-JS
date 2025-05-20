
// Declaramos los objetos con los valores iniciales 
let cash = _cashier(db_cash)
let products = _products(db_products)

// Muestra en el navegador la cantidad de dinero disponible en caja
const writeCash = () => {
    let cashier = document.getElementById('cashier')
    cashier.innerHTML = `Caja: $ ${cash.getStored()} MXN`
}

// Muestra en el navegador los productos que hay disponibles
const writeInventory = () => {
    let inventoryTable = document.getElementById('inventory-table')
    let bodyInventoryTable = inventoryTable.getElementsByTagName('tbody')[0]
    bodyInventoryTable.innerHTML = ''
    
    products.getAll().forEach(product => {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.stored}</td>
        <td>${product.price}</td>
        `
        bodyInventoryTable.appendChild(row)
    })
}


// Carga la funcion writeCash cuando carga la pagina
addEventListener('load', writeCash)

// Carga la funcion writeInventory cuando carga la pagina
addEventListener('load', writeInventory)
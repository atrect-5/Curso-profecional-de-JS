
// Declaramos los objetos con los valores iniciales 
let cash = _cashier(db_cash)
let products = _products(db_products)
let purchase = _purchase(db_purchase)

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

// Limpia el formulario para agregar nuevo producto
const cleanAddProductInputs = (closeDetail) => {
    document.getElementById('addProductForm').reset()
    if (closeDetail) {
        document.getElementById('addProductDetails').open = false
    }
}

const handleAddProduct = () => {
    let name = document.getElementById('np_name').value
    let pricePurchase = parseFloat(document.getElementById('np_p_price').value)
    let priceSale = parseFloat(document.getElementById('np_s_price').value)
    let stored = parseFloat(document.getElementById('np_stored').value)

    try {
        cash.purchase(stored * pricePurchase)
        const newProduct = products.createProduct(name, stored, priceSale)
        purchase.newPurchase(newProduct.id, newProduct.stored, pricePurchase)
    } catch (error) {
        alert(`Error: ${error.error}`)
    }
}

// Maneja el envio de formularios
const handleSubmit = (e) => {
    e.preventDefault()

    switch (e.target.id) {
        case 'addProductForm':
            handleAddProduct()
            writeCash()
            writeInventory()
            cleanAddProductInputs(false)
            break
        default:
            alert('No definida la funcion aun')
    }
}

// Se ejecuta cuando se carga el componente y ejecuta las funciones necesarias al cargarse
const componentDidLoad = (e) => {
    writeCash()
    writeInventory()

    // Se agrega las funciones de los botones
    document.getElementById('cancelAddProduct').addEventListener('click', () => cleanAddProductInputs(true))
    // Se ejecuta la funcion de manejo de submits 
    addEventListener('submit', handleSubmit)
}

// Se cargan las funciones al cargar la pagina
addEventListener('load', componentDidLoad)


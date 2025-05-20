
// Declaramos los objetos con los valores iniciales 
let cash = _cashier(db_cash)
let products = _products(db_products)
let purchase = _purchase(db_purchase)
let sales = _sales(db_sales)

// Muestra en el navegador la cantidad de dinero disponible en caja
const writeCash = () => {
    let cashier = document.getElementById('cashier')
    cashier.innerHTML = `Caja: $ ${cash.getStored()} MXN`
}

// Función para abrir el formulario de venta y enfocar el input con el id del producto
const openSaleForm = (productId) => {
    document.getElementById('sale-info').open = true
    const saleDetails = document.getElementById('addSaleDetails')
    saleDetails.open = true
    const idInput = document.getElementById('id_product_sale')
    idInput.value = productId
    showProductNameSale(productId)
    saleDetails.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

// Función para abrir el formulario de compra y enfocar el input con el id del producto
const openPurchaseForm = (productId) => {
    document.getElementById('purchase-info').open = true
    const purchaseDetails = document.getElementById('addPurchaseDetails')
    purchaseDetails.open = true
    const idInput = document.getElementById('id_product_purchase')
    idInput.value = productId
    showProductNamePurchase(productId)
    purchaseDetails.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
        <td><button class="sale-button" id="sale-${product.id}">Vender</button></td>
        <td><button class="purchase-button" id="purchase-${product.id}">Comprar</button></td>
        `
        bodyInventoryTable.appendChild(row)
        // Agrega listeners a los botones de vender/comprar
        document.getElementById(`sale-${product.id}`).addEventListener('click', () => openSaleForm(product.id))
        document.getElementById(`purchase-${product.id}`).addEventListener('click', () => openPurchaseForm(product.id))
    })
}

// Muestra en el navegador las ventas realizadas
const writeSales = () => {
    let salesTable = document.getElementById('sales-table')
    let bodySalesTable = salesTable.getElementsByTagName('tbody')[0]
    bodySalesTable.innerHTML = ''
    
    sales.getAll().forEach(sale => {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${sale.id}</td>
        <td>${sale.date.getDate().toString().padStart(2, '0')}/${(sale.date.getMonth() + 1).toString().padStart(2, '0')}/${sale.date.getFullYear()}</td>
        <td>${sale.quantity}</td>
        <td>${sale.totalPrice}</td>
        `
        bodySalesTable.appendChild(row)
    })
}

// Muestra en el navegador las compras realizadas
const writePurchases = () => {
    let purchasesTable = document.getElementById('purchases-table')
    let bodyPurchasesTable = purchasesTable.getElementsByTagName('tbody')[0]
    bodyPurchasesTable.innerHTML = ''
    
    purchase.getAll().forEach(purchase => {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${purchase.id}</td>
        <td>${purchase.date.getDate().toString().padStart(2, '0')}/${(purchase.date.getMonth() + 1).toString().padStart(2, '0')}/${purchase.date.getFullYear()}</td>
        <td>${purchase.price}</td>
        <td>${purchase.quantity}</td>
        <td>${purchase.totalPrice}</td>
        `
        bodyPurchasesTable.appendChild(row)
    })
}

// Limpia el formulario para agregar nuevo producto
const cleanAddProductInputs = (closeDetail) => {
    document.getElementById('addProductForm').reset()
    if (closeDetail) {
        document.getElementById('addProductDetails').open = false
    }
}

// Limpia el formulario para vender producto
const cleanSaleInputs = (closeDetail) => {
    document.getElementById('saleForm').reset()
    document.getElementById('product-sale-name').innerHTML = 'Producto: | Precio:'
    if (closeDetail) {
        document.getElementById('addSaleDetails').open = false
    }
}

// Limpia el formulario para comprar producto
const cleanPurchaseInputs = (closeDetail) => {
    document.getElementById('purchaseForm').reset()
    document.getElementById('product-purchase-name').innerHTML = 'Producto:'
    if (closeDetail) {
        document.getElementById('addPurchaseDetails').open = false
    }
}

// Muestra que producto es el que se esta vendiendo segun el id del input
const showProductNameSale = (id) => {
    let spanData = document.getElementById('product-sale-name')
    try{
        let product = products.getProductById(id)
        spanData.innerHTML = `Producto: ${product.name} | Precio: $ ${product.price}`
        document.getElementById('quantity_sale').dispatchEvent(new Event('change'))
    } catch (err) {
        spanData.innerHTML = `Producto: N/E | Precio:`
    }
}

// Muestra que producto es el que se esta comprando segun el id del input
const showProductNamePurchase = (id) => {
    let spanData = document.getElementById('product-purchase-name')
    try{
        let product = products.getProductById(id)
        spanData.innerHTML = `Producto: ${product.name}`
        document.getElementById('quantity_purchase').dispatchEvent(new Event('change'))
    } catch (err) {
        spanData.innerHTML = `Producto: N/E`
    }
}

// Muestra el precio total de una venta
const showTotalPriceSale = (e) => {
    try{
        let product = products.getProductById(document.getElementById('id_product_sale').value)
        document.getElementById('total_sale').value = product.price * e.target.value
    } catch (err){
        alert(`Error calculando total: ${err.error}`)
    }

}

// Muestra el precio total de una compra
const showTotalPricePurchase = (e) => {
    try{
        products.getProductById(document.getElementById('id_product_purchase').value)
        let purchasePrice = document.getElementById('price_purchase').value
        document.getElementById('total_purchase').value = purchasePrice * e.target.value
    } catch (err){
        alert(`Error calculando total: ${err.error}`)
    }
    return

}

// Agrega un nuevo producto a lista de productos
const handleAddProduct = () => {
    let name = document.getElementById('np_name').value
    let pricePurchase = parseFloat(document.getElementById('np_p_price').value)
    let priceSale = parseFloat(document.getElementById('np_s_price').value)
    let stored = parseFloat(document.getElementById('np_stored').value)

    try {
        cash.purchase(stored * pricePurchase)
        const newProduct = products.createProduct(name, stored, priceSale)
        purchase.newPurchase(newProduct.id, newProduct.stored, pricePurchase)

        cleanAddProductInputs(false)
    } catch (error) {
        alert(`Error: ${error.error}`)
    }
}

// Funcion para vender producto
const handleSaleProduct = () => {
    alert('Vendiendo...')
}

// Funcion para comprar producto
const handlePurchaseProduct = () => {
    alert('Comprando...')
    
}

// Maneja el envio de formularios
const handleSubmit = (e) => {
    e.preventDefault()

    switch (e.target.id) {
        case 'addProductForm':
            handleAddProduct()
            break
        case 'saleForm':
            handleSaleProduct()
            break
        case 'purchaseForm':
            handlePurchaseProduct()
            break
        default:
            alert('No definida la funcion aun')
    }

    writeCash()
    writeInventory()
    writeSales()
    writePurchases()
}

// Se ejecuta cuando se carga el componente y ejecuta las funciones necesarias al cargarse
const componentDidLoad = (e) => {
    writeCash()
    writeInventory()
    writeSales()
    writePurchases()

    // Se agrega un listener a los cambios de los inputs
    document.getElementById('id_product_sale').addEventListener('change', (e) => showProductNameSale(e.target.value))
    document.getElementById('id_product_purchase').addEventListener('change', (e) => showProductNamePurchase(e.target.value))
    document.getElementById('quantity_sale').addEventListener('change', (e) => showTotalPriceSale(e))
    document.getElementById('quantity_purchase').addEventListener('change', (e) => showTotalPricePurchase(e))
    document.getElementById('price_purchase').addEventListener('change', () => document.getElementById('quantity_purchase').dispatchEvent(new Event('change')))
    // Se agrega las funciones de los botones
    document.getElementById('cancelAddProduct').addEventListener('click', () => cleanAddProductInputs(true))
    document.getElementById('cancelSale').addEventListener('click', () => cleanSaleInputs(true))
    document.getElementById('cancelPurchase').addEventListener('click', () => cleanPurchaseInputs(true))
    // Se ejecuta la funcion de manejo de submits 
    addEventListener('submit', handleSubmit)
}

// Se cargan las funciones al cargar la pagina
addEventListener('load', componentDidLoad)


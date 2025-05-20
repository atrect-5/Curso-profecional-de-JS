

let cash = _cashier(db_cash)

// Muestra en el navegador la cantidad de dinero disponible en caja
const writeCash = () => {
    let cashier = document.getElementById('cashier')
    cashier.innerHTML = `Caja: $ ${cash.getStored()} MXN`
}



// Carga la funcion writeCash cuando carga la pagina
addEventListener('load', writeCash)

var noGlobal = "Estou no escopo global!"

console.log(noGlobal)

function insideAFunction(){
    var noGlobal = "Estou dentro de uma function"
    var noGlobalTeste = ", só funciono aqui dentro!"
    console.log(noGlobal, noGlobalTeste)
}

insideAFunction()
//console.log(noGlobal) NÃO FUNCIONA POIS É "PRIVADO" À FUNCTION insideAFunction!!



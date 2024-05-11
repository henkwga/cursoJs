console.log(a) // <==== UNDEFINED, PORÉM EXISTENTE!

var a = 2

console.log(a)

//O CÓDIGO FICARIA ASSIM COM O HOISTING:

var a
console.log(a)

a = 2

console.log(a)

//ISSO OCORRE ATÉ DENTRO DE UMA FUNCTION

function teste(){   
    console.log(a)
    var a = 222
    console.log(a)
}

//

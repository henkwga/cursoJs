let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// SOMENTE COM UM UNICO PARÂMETRO
// O RETURN É IMPLÍCITO
dobro = a => 2 * a 

console.log(dobro(9))

let ola = function () {
    return 'Olá'
}

ola = () => {
    return 'Olá'
}

ola = () => 'Olá'
function getIntegerRandom(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let i = 0

do {
    opcao = getIntegerRandom(-1, 10)
    console.log(opcao)
    i++
} while (opcao != -1){}

console.log("Número de tentativas", i)
function getIntegerRandom(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let tentativa = 0

while (opcao != -1){
    opcao = getIntegerRandom(-1, 10)
    console.log(opcao)
    tentativa++
}

console.log("Numero de tentativas: ", tentativa)
console.log("Done!")
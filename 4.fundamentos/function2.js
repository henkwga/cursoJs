// ARMAZENANDO UMA FUNCAO EM UMA VARIAVEL

const printSum = function (a, b) {
    console.log(a + b)
}

printSum(2, 4)

//ARMAZENANDO UMA FUNCTION ARROW EM UM VARIAVEL
const soma = (a, b) => {
    console.log(a + b)
}

soma(9, 8)

const subtracao = (a, b) => a - b

console.log(subtracao(10, 20))

const print = a => console.log(a)
print("hello!")
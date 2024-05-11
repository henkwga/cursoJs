// FUNCTION SEM RETORNO

function printSoma(a, b) {
    console.log(a + b)
}

printSoma(2, 5)
printSoma(2, "a")



// FUNCTION COM RETORNO

function sum(a, b = 9){
    return a + b;
}

console.log(sum(2))
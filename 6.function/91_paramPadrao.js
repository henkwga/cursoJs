// ESTRATEGIA PARA GERAR UM VALOR DEFAULT
function soma(a,c,b){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(5))

// ESTRATÉGIAS ANTI-BUGS
function somaOk(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = !isNaN(c) ? c : 1
    return a + b + c
}

console.log(somaOk(0,0,0))
 
// VALOR PADRÃO DO ES2015
function somaNew(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(somaNew(1,0,0))

function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    console.log(arguments)
    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(6))
console.log(soma(1,2,3,5,1,435,1))
let valor

console.log(valor) //VAI APARECER UNDEFINED

valor = null
console.log(valor)
// console.log(valor.toString())

const produto = {

}

console.log(produto.preco) // UNDEFINED
// console.log(produto.preco.qtt) // NULL
produto.preco = 10
console.log(produto)
console.log(produto.preco.qtt) // UNDEFINED

produto.preco = null

console.log(produto)
const valores = ["Luigi", 90, 1914, "Palmeiras"]

console.log(valores[4] || "Valor desconhecido!")
console.log(valores.length)

valores.push("Luigi Novo hehe")
console.log(valores[4] || "Valor desconhecido!")
console.log(valores.length)

console.log(valores.pop())
console.log(valores[4] || "Valor desconhecido!")
console.log(valores.length)

delete valores[1]
console.log(valores)
console.log(valores[1] || "Valor desconhecido!")
console.log(valores[1])

const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1, peso2)
console.log(typeof peso1)

console.log(Number.isInteger(peso1))

let nota1 = 10
let nota2 = 5

const media = ((nota1 * peso1) + (nota2 * peso2)) / 3

console.log(media)
console.log(media.toFixed(2))

console.log(media.toString(2))
console.log(typeof media)
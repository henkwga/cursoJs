const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 20 , 30, 40]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[8,8,8],[7,8,7]]
console.log(nota)
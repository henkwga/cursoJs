let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)


console.log("casos de true")
isActive = 1
console.log(!!isActive)
console.log(!!1)
console.log(!!2)
console.log(!!"")
console.log(!!"isActive")

console.log("casos de false")
isActive = 0
console.log(!!isActive)
console.log(!!0)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!null)
console.log(!!'')

console.log("operações lógicas dentro de strings")

console.log(!!(0 || null || 'ola' || 0))

let nome = ''

console.log(nome || "Desconhecido")

//em suma, seria exatamente isso, resumidamente:

if(nome){
    console.log(nome)
} else {
    console.log("Desconhecido")
}
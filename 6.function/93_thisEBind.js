const person = {
    sayHello: 'Eae!',
    say() {
        console.log(this.sayHello)
    },

    sayWorking() {
        console.log(person.sayHello)
    }
}
person.say()
console.log("\n")

// O THIS NÃO IRÁ FUNCIONAR AQUI E RETORNARÁ UNDEFINED
const toSayNot = person.say
toSayNot()
console.log("\n")

// A FUNCTION FUNCIONARÁ AQUI, POIS NÃO HÁ CONFLITO DE PARADIGMA
const toSay = person.sayWorking
toSay()
console.log("\n")

// O THIS FUNCIONARÁ AQUI
const sayLikeAPerson = person.say.bind(person)
sayLikeAPerson()



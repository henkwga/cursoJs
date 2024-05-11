const ahString = "teste"

console.log(ahString.charAt(5))

if (!ahString.charAt(4)) {
    console.log("nao tem!")
} else {
    console.log("tem!")
}

console.log(ahString.indexOf("e"))

console.log(ahString.substring(1))
console.log(ahString.substring(1,3))

console.log(
    "Eu estou no " + ahString
)
console.log(
    "Eu estou no ".concat(ahString).concat(" da escola")
)
console.log(ahString.replace())

console.log('Luigi,Palmeiras,Verde'.split(','))
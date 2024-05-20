const notas = [1,1,7,1,9,2,10,8]

// SEM UTILIZAR CALLBACK
let notasBaixas1 = []
    for(i = 0; i < notas.length; i++) {
        if(notas[i] < 7){
            notasBaixas1.push(notas[i])
        }
    }

console.log(notasBaixas1)

// UTILIZANDO CALLBACK
const notasBaixas2 = notas.filter(function (nota) {
    return nota <= 7
})


const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
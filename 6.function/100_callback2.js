const notas = [1,1,7,1,9,2,10,8]

// SEM UTILIZAR CALLBACK
let notasBaixas = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i] < 7){
            notasBaixas.push(notas[i])
        }
    }

console.log(notasBaixas)

// UTILIZANDO CALLBACK
notasBaixas = notas.filter()
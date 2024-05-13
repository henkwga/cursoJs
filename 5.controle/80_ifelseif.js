Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

function insertNote(nota){
    if(nota.entre(9, 10)){
        console.log('Brabissimo!')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado!')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida!')
    }
}

insertNote(10)
insertNote(7)
insertNote(5.8)
insertNote(2)
insertNote(11)
insertNote(-21)
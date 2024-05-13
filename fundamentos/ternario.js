const resultado = nota => nota >= 7 ? 'Aprovado!' : 'Reprovado!'

const resultadoAlt = nota => {
    return nota >= 7 ? 'Aprovado!' : 'Reprovado!'
}

//VERDADEIRO E FALSO, RESPECTIVAMENTE

console.log(resultado(6.1))
console.log(resultadoAlt(7.1))
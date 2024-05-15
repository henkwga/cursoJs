const notas = [6.7, 9.1, 2.4, 6.1, 2.6]

for (let i in notas) {
    console.log(i ,"-", notas[i])
}

const pessoa = {
    nome: 'Luigi',
    sobrenome: 'Rigoletto',
    idade: '18',
    altura: '1,80'
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]} `)
    console.log(atributo, "\n")
}


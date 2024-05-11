 // OBJETO, NÃO ESQUEÇA!!
const pessoa = {
    nome: 'Luigi',
    idade: '5',
    endereco: {
        logradouro: 'Rua Tuim',
        numero: '299'
    }
}

// FORMA PADRÃO DE DESESTRUTURAR DADOS DO OBJETO ===>

const pessoaNome = pessoa.nome
const pessoaIdade = pessoa.idade

console.log(pessoaNome, pessoaIdade)


// OPERADOR QUE SIMPLIFICA A DESESTRUTURAÇÃO DO OBJ ===>

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)
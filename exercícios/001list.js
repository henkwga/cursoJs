// Exercício 1: Manipulação de Strings
// Escreva uma função que converte todas as letras de uma string para maiúsculas.

function maiusuculas() {
    let letras = 'meu nome é luigi!!!!!'
    console.log(letras.toUpperCase())
}

maiusuculas()

// Exercício 2: Números Primos
// Crie uma função que verifica se um número fornecido pelo usuário é primo.

function ehPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

console.log(ehPrimo(23))


// Exercício 3: Contar Votos
// Implemente uma função que conta o número de votos 'sim' e 'não' em um array de votos.

function contador() {
    let array = ['sim', 'sim', 'sim', 'sim', 'nao', 'nao', 'nao', 'nao', 'nao', 'nao']
    let numerosDeSim = 0
    let numerosDeNao = 0
    for (i in array) {
        if (array[i] === 'sim') {
            numerosDeSim++
        } else {
            numerosDeNao++
        }
    }

    // OU

    for (let i = 0; i < array.length; i++) {
        // ...
    }

    console.log('Números de sim: ', numerosDeSim, '\n Números de não: ', numerosDeNao)
}

contador()

// Exercício 4: Soma dos Elementos
// Escreva uma função que soma todos os elementos de um array de números.

function somaElementosArray() {
    let array = [1, 2, 3, 124, 2, 435, 125, 13, 51, 53, 45, 1, 23, 1, 34, 543, 567]
    let total = 0

    for (i in array) {
        total = total + array[i]
    }
    console.log(total)
}

somaElementosArray()

// Exercício 5: Verificar Idade
// Desenvolva uma função que verifica se a idade fornecida pelo usuário é maior que 18.

function podeOuNaoIrPraBalada(idade) {
    if (idade < 18) {
        console.log('Não pode entrar!')
    } else {
        console.log('Pode entrar!')
    }
}

podeOuNaoIrPraBalada(17)

// Exercício 6: Múltiplos de um Número
// Crie uma função que retorna os primeiros 10 múltiplos de um número fornecido pelo usuário.

function retornarMultiplos(numInput) {
    for (let i = 1; i <= 10; i++) {
        console.log(numInput * i)
    }
}

retornarMultiplos(8)

// Exercício 7: Palavras em Maiúsculas
// Implemente uma função que recebe um array de palavras e converte cada uma para maiúsculas.

function maiusucula(arrayStrin) {
    for (i in arrayStrin) {
        console.log(arrayStrin[i].toUpperCase())
    }

}

maiusucula(['asdasdfsd', 'sdgdasfgsdfg', 'adsfgsdfg'])

// Exercício 8: Calcular Média
// Escreva uma função que calcula a média de um array de números fornecidos pelo usuário.

function mediaArray(arrayNum) {
    let somaTotal = 0
    for (i in arrayNum) {
        somaTotal = somaTotal + arrayNum[i]
    }

    console.log(somaTotal / arrayNum.length)
}

mediaArray([1, 24, 2345, 34, 512, 3])

// Exercício 9: Encontrar o Menor Número
// Crie uma função que encontra o menor número em um array de números.

function encontrarMenorNumero(arrayNum) {
    let menor = arrayNum[0];
    for (let i = 1; i < arrayNum.length; i++) {
        if (arrayNum[i] < menor) {
            menor = arrayNum[i];
        }
    }
    console.log(menor);
}

encontrarMenorNumero([3.45,423,,435,1,45,6,35,71,22457,0.5,123,123,1,5,2,657])


// Exercício 10: Concatenar Arrays
// Implemente uma função que concatena dois arrays fornecidos pelo usuário em um único array.

function concatenacao(array1, array2) {
    let arrayUnico = array1.concat(array2)
    console.log(arrayUnico)
}

concatenacao(['oi', 'td bem?'], ['tudo', 'e vc?'])


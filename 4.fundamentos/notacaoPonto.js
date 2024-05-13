console.log(Math.ceil(Math.PI)) //ARREDONDAMENTO

const obj1 = {}
obj1.nome = 'Luigi'
obj1.logradouro = {
    endereco: "",
    numero: "",
    cidade: ""
}

//MESMA COISA QUE 

const obj2 = {
    nome: 'Luigi',
    logradouro: {
        endereco: 'Rua Tuim',
        numero: '299',
        cidade: 'São Paulo'
    }
}

console.log('Objeto 1: \n', obj1, "\n", 'Objeto 2: \n',  obj2)

function Obj(nome){     //TORNA O ATRIBUTO "PÚBLICO"
    this.nome = nome
}

const obj3 = new Obj('Cadeira')

console.log(obj2.nome," sentou kk na ",obj3.nome)

const fabricantes = ['Mercedes', 'AUDI', 'Ford']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
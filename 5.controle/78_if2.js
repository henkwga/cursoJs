function teste1(valor){
    if(valor >= 6)
        console.log(valor)
    console.log('Fim!')
    //MESMA COISA QUE:

    if(valor >= 6){
        console.log(valor)
    }
    console.log('Fim! \n')
}

teste1(8)
teste1(4)

function teste2(valor){
    if(valor > 7);{
        console.log(valor)
    }

    //O ; SERVE COMO "QUEBRA DE LINHA!"
}

teste2(8)
teste2(6)
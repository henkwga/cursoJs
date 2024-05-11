const saudacao = "opa" //CONTEXTO LÉXICO 1

function exec(){
    const saudacao = "eae" //CONTEXTO LÉXICO 2
    const saudacao2 = "palmeiras"
    return {saudacao, saudacao2}
}


const cliente = {
    nome: "luigi",
    idade: "19",
    altura: "1.81", 
    logradouro: {
        endereco: "rua tuim",
        numero: "299",
    }
    
}

console.log(exec())
console.log(cliente)

//MUITO TOP!!
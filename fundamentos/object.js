//JSON => JAVASCRIPT OBJECT NOTATION -> FORMATO TEXTUAL DE UM OBJECT

// PAR DE CHAVES, OBJETO
// PAR DE COLCHETES, ARRAY

const loja = {} //COLEÇÃO DE CHAVE E VALOR 

loja.nomes = {}
loja.nomes.ordenado = ["Adilson", "Beto", "Chico"]
loja.nomes.desordenados = ["Chico", "Adilson", "Beto"]
loja.idades = {}
loja.idades.ordenado = [11, 11, 10]
loja.idades.desordenados = [10, 11, 11]

console.log(loja)

//DE MANEIRA MAIS SIMPLIFICADA

const produto = {
    nome: "iPhone 13 PRO MAX",
    valor: 7390.00,
    cor: ["verde", "azul", "amarelo"]
}

console.log(produto)


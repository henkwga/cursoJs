// CRIAR FUNCTION DE FORMA LITERAL
function fun1(){
    return "Function01! \n"
}

// ARMAZENAR EM UMA VARIÁVEL
const fun2 = function(){
    return "Function02!! \n"
}

// ARMAZENAR EM UM ATRIBUTO DE OBJETO
const obj = {}
obj.falar = function () {return 'Opa'}

// PASSAR FUNCTION COMO PARAM
function run(fun){
    fun()
}

run(function () {console.log('Executando...')})

// UMA FUNCTION PODE RETORNAR/CONTER UMA FUNCTION
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(5, 6)(10)

// ARMAZENAR EM UM ARRAY
const array = [function (a, b) {return a + b}, fun1, fun2]
for(i in array) {
    if(i == 0){
        console.log(`${i} = ${array[i](2,3)} \n`)
    } else {
        console.log(`${i} = ${array[i]()}`)
        
    }
    
}


function carro(velMax = 200, delta = 5) {
    let velAtu = 0

    // MÉTODO PÚBLICO
    this.acelerar = function (){
        if (velAtu + delta <= velMax) {
            velAtu += delta
        } else {
            velAtu = velMax
        }
    }

    this.getVelocidadeAtual = function(){
        return velAtu
    }
}

const x9 = new carro
x9.acelerar()
console.log(x9.getVelocidadeAtual())

const bugatti = new carro(400, 15)
bugatti.acelerar()
bugatti.acelerar()
bugatti.acelerar()
console.log(bugatti.getVelocidadeAtual())
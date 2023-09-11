// const car01 = new Object()
// car01["marca"] = "fiat"

// const car02 = new Object()
// car02.marca = "ford"

// Neste exemplo, foi criado a classe Car, o construtor tem como parâmetro marca. O método getMarca() presente na classe Car 
//referencia o atributo da classe. Agora o código está mais orientado a objetos, classe serve para representar o conceito de um 
//carro.

export class Car {
    constructor(marca) {
        this.marca = marca
    }

    getMarca() {
        console.log(Object.keys(this))
        console.log(Object.values(this))
        console.log(Object.entries(this))
    }
}
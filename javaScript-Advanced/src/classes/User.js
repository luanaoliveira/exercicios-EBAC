// const user01 = new Object()
// user01.id = 1
// user01.nome = "João"
// user01.idade = 25

// const user02 = new Object()
// user02.id = 2
// user02.nome = "Pedro"
// user02.idade = 30

// const user03 = new Object()
// user03.id = 3
// user03.nome = "Maria"
// user03.idade = 28

// console.log(Object.keys(user01))
// console.log(Object.keys(user02))
// console.log(Object.keys(user03))

// console.log(Object.values(user01))
// console.log(Object.values(user02))
// console.log(Object.values(user03))

// console.log(Object.entries(user01))
// console.log(Object.entries(user02))
// console.log(Object.entries(user03))

// Neste exemplo, foi criado a classe User, o construtor tem como parâmetros id, nome e idade. O método getUser() foi criado para chamar 
//as funções keys, values e entries. Agora o código está mais orientado a objetos, pois  foi utilizado uma classe para representar o conceito de um 
//usuários. Vemos que ao utilizar orientação os conceitos de POO o código fica com menos linhas e diminui a repetição de comandos.

export class User {
    constructor(id, name, age) {
        this.id = id
        this.name = name,
        this.age = age
    }

    getUser() {
        console.log(Object.keys(this))
        console.log(Object.values(this))
        console.log(Object.entries(this))
    }
}
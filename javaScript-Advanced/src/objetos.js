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

// Neste exemplo, foi utilizado a classe User, o construtor tem como parâmetros id, nome e idade. Os objetos de usuário são então 
//criados usando essa classe, passando os valores correspondentes. O método getUser() ainda está presente na classe User para obter 
//as chaves dos objetos. Agora o código está mais orientado a objetos, pois utilizamos uma classe para representar o conceito de um 
//usuário e instanciamos objetos dessa classe para criar usuários individuais. Vemos que ao utilizar orientação os conceitos de POO 
//o código fica com menos linhas e diminui a repetição de comandos.

class User {
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

const user01 = new User(1, "João", 25)
const user02 = new User(1, "João", 25)
const user03 = new User(1, "João", 25)
user01.getUser()
user02.getUser()
user03.getUser()

user01.age += 1

user01.getUser()

Object.defineProperty(user01, 'cpf', {
    enumerable: true,
    writable: false,
    value: '000.000.000-00'
})

user01.cpf = '111.111.111-11'

user01.getUser()

console.log(Object.entries(user01))

console.log(user01)

const empresa = "EBAC"

user01.empresa = empresa
user02.empresa = empresa
user03.empresa = "Google"

user01.getUser()
user02.getUser()
user03.getUser()

user01.filhos = { 
    filho01 : "Matheus",
    filho02 : "Carol" 
}

user01.getUser()

console.log(Object.entries(user01.filhos))


// const car01 = new Object()
// car01["marca"] = "fiat"

// const car02 = new Object()
// car02.marca = "ford"

// Da mesma do exemplo anterior, foi utilizado a classe Car, o construtor tem como parâmetros marca. O objeto do carro é então 
//criado usando essa classe, passando o valor correspondente. O método getMarca() ainda está presente na classe Car para obter 
//a chave do objeto. Agora o código está mais orientado a objetos, pois utilizamos uma classe para representar o conceito de um 
//carro e instanciamos objeto dessa classe para criar marcas de carros individuais.

class Car {
    constructor(marca) {
        this.marca = marca
    }

    getMarca() {
        console.log(Object.keys(this))
        console.log(Object.values(this))
        console.log(Object.entries(this))
    }
}

const marca01 = new Car("fiat")
const marca02 = new Car("ford")
marca01.getMarca()
marca02.getMarca()
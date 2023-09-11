import { Cachorro } from './classes/Cachorro.js'
import { Registro } from './classes/Registro.js'
import { Movimentacao } from './classes/Movimentacao.js'
import { User } from './classes/User.js'
import { Car } from './classes/Car.js'
import { Pessoa } from './classes/Pessoa.js'

// Intanciando a classe Cachorro
// Ao instanciar o objeto dessa classe, é chamado o comportamento do cachorro.
const cachorro = new Cachorro('cachorro')
cachorro.falar()
cachorro.comer()
cachorro.dormir()

// Intanciando a classe registro
// Ao instanciar o objeto dessa classe, é criado registros individuais de cada movimentação.
const m01 = new Movimentacao('00000', 'salario', 20000)
const m02 = new Movimentacao('Bank Z', 'comissao', 2000)
const m03 = new Movimentacao('Bank X', 'imposto', -5000)
const m04 = new Movimentacao('Bank Y', 'contas', -1000)
const m05 = new Movimentacao('Bank X', 'imposto', -1000)

const registro01 = new Registro(22,10,2021)
registro01.novaMovimentacao(m01, m02, m03, m04, m05)
console.log('O saldo dos registros ' + registro01.resumo())

const movimentacoesGerais = [m01, m02, m03, m04, m05]

movimentacoesGerais.map( elemento => console.log(elemento.banco.length))

// Intanciando a classe User
// Ao instanciar o objeto dessa classe, é criado Usuários individuais.
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
    writable: true,
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

// Intanciando a classe Car
// Ao instanciar o objeto dessa classe, é criado marcas de carros individuais.
const marca01 = new Car("fiat")
const marca02 = new Car("ford")
marca01.getMarca()
marca02.getMarca()

// Intanciando a classe pessoa
// Ao instanciar o objeto dessa classe, é chamado a contagem da idade no intervalo de 2000 ms.
const p1 = new Pessoa()
p1.contarIdade()
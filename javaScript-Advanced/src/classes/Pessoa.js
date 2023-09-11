"use strict"

// function Pessoa() {

//     this.idade = 0

//     setInterval(() => {
//         console.log(this.idade++)
//     }, 2000);

// }

//A função pessoa foi convertida em classe, o construtor tem como parâmetro idade e seu valor sempre inicia em zero. 
//O método faz contagem da idade em um tempo de 2000 ms.

export class Pessoa {
    constructor() {
        this.idade = 0
    }

    contarIdade() {
        setInterval(() => {
            console.log(this.idade++)
        }, 2000);
    }
}

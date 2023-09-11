// A classe Cachorro foi separada da classe Animal para melhor reutilização da mesma.

import { Animal } from "./Animal.js"
 
export class Cachorro extends Animal{
    falar(){
        console.log(this.especie + ' fala au au au')
    }

    comer(){
        console.log(this.especie + ' come ração ')
    }
}

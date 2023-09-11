// function calcularMedia( notas ) {

//     let soma = 0;
//     for( c = 0; c < notas.length; c++) {
//         soma += notas[c];
//     }

//     media = soma / notas.length;

//     return media;

// }

// let media; // escopo global

// function aprovacao( notas ) {

//     let media = calcularMedia( notas ); // escopo da função

//     let condicao = media >= 8 ? "aprovado" : "reprovado";

//     return 'Média: ' + media + ' - Resultado: ' + condicao;

// }


// Foi criado a classe Aprovacao que encapsula a media e o resultado da aprovação. As funções calcularMedia() e aprovacao() 
//foram transformadas em métodos da classe.


class Aprovacao {
    constructor() {
        this.notas = [];
    }
  
    calcularMedia() {
        let soma = 0;
    
        for(let c = 0; c < this.notas.length; c++) {
            soma += this.notas[c];
        }
  
        const media = soma / this.notas.length;
  
        return media;
    }
      
    resultado() {
        let media = this.calcularMedia(); // escopo da função
  
        let condicao = media >= 8 ? "aprovado" : "reprovado";
  
        return 'Média: ' + media + ' - Resultado: ' + condicao;
  
    }
  }

// function contagemRegressiva(numero){

//     console.log(numero);  
    
//     let proximoNumero = numero - 1;

//     if(proximoNumero > 0)
//         contagemRegressiva(proximoNumero);

// }

// contagemRegressiva(50);

// Na função de contagemRegressiva() foi transformada em uma classe também de mesmo nome, o parâmetro número foi instanciado no construtor


// Função Recursivas

class ContagemRegressiva {
    constructor(numero) {
        this.numero = numero;
    }

    iniciarContagem() {
        this.contador(this.numero) 
    }

    contador(numero) {
        console.log(numero);  
    
        let proximoNumero = numero - 1;

        if(proximoNumero > 0){
            this.contador(proximoNumero);
        }
    }
}

// /* 
//  * Formulário envio de dados para cálculo da média 
//  */
// const formulario1 = document.getElementById('formulario-01');

// if(formulario1)
//     formulario1.addEventListener('submit', function( evento ){

//         evento.preventDefault();
//         evento.stopPropagation();

//         if( this.getAttribute('class').match(/erro/) ) {
//             return false;
//         }
        
//         let dados = new FormData(this);

//         let notas = [];

//         for(let key of dados.keys()) {

//             let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

//             if(!isNaN(numero)) {
//                 notas.push(numero);
//             }

//         }

//         console.log(notas);

//         texto = aprovacao(notas)

//         document.getElementById('resultado').innerHTML = texto;

//     });

//

const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){ // A arrow Function não é recomendável aqui, pois 'this' não está vinculado ao formulário, mas ao escopo pai.

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        const aprovacao = new Aprovacao();

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                aprovacao.notas.push(numero);
            }

        }

        console.log(aprovacao.notas);

        texto = aprovacao.resultado(aprovacao.notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento){

    elemento.addEventListener('focusout', function( event) { // A arrow Function não é recomendável aqui, pois 'this' não está vinculado ao elemento, mas ao escopo pai.

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) { // A arrow Function não é recomendável aqui, pois 'this' não está vinculado ao elemento, mas ao escopo pai.

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) { // A arrow Function não é recomendável aqui, pois 'this' não está vinculado ao elemento, mas ao escopo pai.

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}
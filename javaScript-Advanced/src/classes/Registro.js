// A classe Registro foi inserindo em outro documento separado da classe Movimentação para melhor organização.

export class Registro {
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach( 
            lancamento => this.movimentacoes.push(lancamento)
        )
    }

    resumo(){
        let valorAtualizado = 0
        let tipo = ''
        const regex = new RegExp('x', 'gi') // Expressões Regulares
        this.movimentacoes.forEach(lancamento => {
            lancamento.banco = lancamento.banco.replace(regex, 'Y')
            if(!lancamento.banco.match(regex)){
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '
            }
        })
        return tipo + valorAtualizado
    }
}


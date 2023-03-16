import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[] = [];//negociações é um array de array de Negociação privado
//só pode ser modificado por um método de dentro da classe

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {//lista() retorna o array negociações somente para leitura
        return this.negociacoes;
    }
}

import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacaoController {
    private inputData: HTMLInputElement; //private variável só pode ser acessada por método dentro da sua classe
    private inputQuantidade: HTMLInputElement;//HTMLInputElement tipo de variável buscada pelo HTML, assume o tipo determinado no html
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void { //método sem retorno, é uma boa prática do TS tipar todos retornos de métodos e variáveis
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {//método retorna uma Negociação
        const exp = /-/g;//expressão regular, busca o hífen (/-/) em todo elemento (g) global
        const date = new Date(this.inputData.value.replace(exp, ','));
            //cria uma data a partir da busca do que foi digitado, mas para o compilador entender
            //é necessário retirar o hífen e colocar a vírgula (.replace(expressão regular, 'substituir por vírgula'))
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void { //limpa os valores do formulário
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();//desloca o foco para (seleciona) o campo de data
        //como a variável foi declarada como HTMLInputElement 
        //o TS disponibiliza todos métodos de manipulação do DOM para a variável
    }
}

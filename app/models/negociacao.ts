export class Negociacao {
    constructor(
        private _data: Date, //tipagem de variáveis, usar os dois ponto tipo : Date
        public readonly quantidade: number, // variável tipo Number
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {// uma boa prática é tipar todos retornos das funções
        const data = new Date(this._data.getTime());
        return data;
    }
}
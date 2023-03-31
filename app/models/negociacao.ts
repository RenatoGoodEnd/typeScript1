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

/*Isso aqui:
export class Fatura {

    private data: Date;
    private quantidade: number;
    private valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
            this.data = data;
            this.quantidade = quantidade;
            this.valor = valor;
    }
}

Pode ser simplifica para isso:
    constructor(
        private _data: Date, 
        private readonly quantidade: number, 
        private readonly valor: number
    ) {}*/
abstract class Ingresso {
    protected valor: number = 18
    abstract imprimeValor(): string
}

export class Normal extends Ingresso {
    imprimeValor(): string {
        return `Ingresso normal custa R$ ${this.valor}`
    }
}

export class Vip extends Ingresso{
    private valorAdicional: number = 8

    imprimeValor(): string {
        return `Ingresso para a area Vip custa R$ ${this.valor + this.valorAdicional}`
    }
}

export class Camarote extends Ingresso{
    private valorAdicional: number = 15
    
    imprimeValor(): string {
        return `Ingresso para o Camarote custa R$ ${this.valor + this.valorAdicional}`
    }
}
export class Item{
    constructor(protected valor: number, protected nome: string, protected descricao: string) {}

    get itemValor(){
        return this.valor
    }
}

export class Pedido{
    protected valorTotal: number = 0
    constructor(private itens: Item[]) {}

    totalApagar(): void{
        this.itens.forEach(item => {
            this.valorTotal += item.itemValor
        });


        console.log(`Total a pagar do pedido é: R$ ${this.valorTotal}`)
    }
}
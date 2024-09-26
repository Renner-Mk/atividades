export class ItemPedido {
    constructor(
        public nome: string,
        public valor: number,
        public obs: string
    ) {}
}

export class Cliente{
    listaPedidoCliente: ItemPedido[] = []
    constructor(
        public nomeCliente: string,
        public endereco: string,) {}

    addPedido(item: ItemPedido){
        this.listaPedidoCliente.push(item)
    }
}

export class Lancheiria{
    constructor(public nome: string) {
        console.log(`Foi inaugurada a ${nome}`)
    }

    fazerPedido(cliente: Cliente){
        console.log(`Pedido realizado com suceso`)
        console.log(`Sera entrega para ${cliente.nomeCliente} no endereço: ${cliente.endereco}`)
        let total = 0
        cliente.listaPedidoCliente.forEach( item => {
            total += item.valor
        })
        console.log(`total a pagar R$ ${total}`)
    }
}


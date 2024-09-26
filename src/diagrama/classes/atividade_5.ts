interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void
  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  removeItem(item: string): void 
}

class Pedido implements ValorPedido, Desconto {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }
  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    this.itens.forEach((item) => item.aplicarDescontoEmPorcentagem(desconto));
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.itens.forEach((item) => item.aplicarDescontoEmReais(desconto));
  }
  
}

class ItemPedido implements  Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}

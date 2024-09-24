export class Imovel{
    protected preco: number = 150000
    protected endereco: string = 'Rua x 153'
}

export class Novo extends Imovel{
    private adicional: number = 15

    imovelEndereco(): void{
        console.log(`Endereço do imovel é: ${this.endereco}`)
    }

    imprimeValor(): void{
        console.log(`Valor do imovel novo: R$ ${this.preco + (this.preco * (this.adicional / 100))}`) 
    }
}

export class Velho extends Imovel{
    private adicional: number = 15

    imovelEndereco(): void{
        console.log(`Endereço do imovel é: ${this.endereco}`)
    }

    imprimeValor(): void{
        console.log(`Valor do imovel novo: R$ ${this.preco - (this.preco * (this.adicional / 100))}`) 
    }
}
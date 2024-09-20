export class BombaCombustivel{
    constructor(
        private tipoCombustivel: string,
        private valorLitro: number,
        private quantidadeCombustivel: number
    ){}

    abastecerPorLitro(litros: number): void{
        if(this.quantidadeCombustivel < litros){
            console.log("Sem combustivel o suficiente")
        } else {
            console.log(`Foi abastecido ${litros}L e o total a pagar: R$ ${this.valorLitro * litros}`)
            this.quantidadeCombustivel -= litros
        }
    }

    abastecerPorValor(valor: number): void{
        let totalLitros: number = valor / this.valorLitro
        if(this.quantidadeCombustivel < totalLitros){
            console.log("Sem combustivel o suficiente")
        } else {
            console.log(`Foi abastecido ${totalLitros}L e o total a pagar: R$ ${valor}`)
            this.quantidadeCombustivel -= totalLitros
        }
    }

    alterarValor(novoValor: number){
        this.valorLitro = novoValor
    }

    alterarCombustivel(novoCombustivel: string){
        this.tipoCombustivel = novoCombustivel
    }

    alterarQuantidadeCombustivel(novaQuantidade: number){
        this.quantidadeCombustivel = novaQuantidade
    }
}
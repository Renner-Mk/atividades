export class Carro{
    private tanqueCombustivel: number = 0
    constructor(
        private consumo:number,
    ){}

    andar(distanciaKM: number){
        const litrosComsumidos: number = (distanciaKM / this.consumo)
        if(this.tanqueCombustivel === 0){
            console.log('O tanque esta vazio abasteça primeiro')
        }
        else if(litrosComsumidos > this.tanqueCombustivel){
            console.log(`Sem combustivel o sufieciente para esse percurso`)
        } else {
            this.tanqueCombustivel -= litrosComsumidos
            console.log(`Percurso realizado, percorrido: ${distanciaKM}KM`)
        }
    }

    obterGasolina(){
        console.log(`Combustivel disponivel no tanque de: ${this.tanqueCombustivel.toFixed(2)} Litros`)
    }

    adicionarGasolina(litros: number){
        console.log(`Combustivel adicionado ao tanque!`)
        this.tanqueCombustivel += litros
    }
}
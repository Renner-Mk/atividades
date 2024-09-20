export class Contador {
    constructor(private contador:number = 0){
        
    }

    zerar(): void{
        this.contador = 0
    }

    incrementar(): void{
        this.contador += 1
    }

    retornarValor(): number{
        return this.contador
    }
}
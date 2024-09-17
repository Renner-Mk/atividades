export class Contador {
    contador: number

    constructor(n:number = 0){
        this.contador = n
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
export class Bola{
    constructor(
        private cor: string,
        private circunferencia: number,
        private material: string){
    }
    getMostrarCor(): string{
        return this.cor
    }

    setTrocarCor(cor:string): void{
        this.cor = cor
    }
}
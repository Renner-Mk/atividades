export class ContaCorrente{
    private saldo: number


    constructor(
        private numeroConta: string, 
        private nomeCorrentista: string,
        saldo: number = 0
    ){
        this.saldo = saldo
    }

    setNovoNome(nome: string): void{
        this.nomeCorrentista = nome
        console.log(`Nome alterado com sucesso para: ${nome}`)
    }

    deposito(value: number): void{
        if(value > 0){
            this.saldo += value
            console.log('Deposito feito com sucesso.')
        } else {
            console.log("Nenhum valor depositado.")
        }
    }

    saque(value: number): void{
        if(this.saldo > value){
            this.saldo -= value
            console.log('Saque feito com sucesso.')
        } else {
            console.log("Sem saldo em conta para essa transação.")
        }
    }


}
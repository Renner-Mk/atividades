export interface Carteira {
    balance: number

    addBalance(balance: number):void
    withdraw(value: number): void
}

export function carteira (n: number):Carteira{
    return{
        balance: n,

        addBalance(balance: number):void{
            this.balance += balance
            console.log('Deposito feito com sucesso!')
        },

        withdraw(value: number): void{
            if(value <= this.balance){
                this.balance = this.balance - value
                console.log('Valor sacado com sucesso!')
            } else {
                console.log('Saldo insuficiente')
            }
        }
    }
}
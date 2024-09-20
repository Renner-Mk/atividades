interface operacao {
    num1: number
    num2: number
    result: number
    tipo: string
}

export class Calculadora{
    private historico: operacao[] = []

    private returnObj(num1: number, num2: number, result: number, tipo: string): operacao{
        return  {
            num1: num1,
            num2: num2,
            result: result,
            tipo: tipo
        }
    }

    somar(num1: number, num2: number): void{
        let result = num1 + num2
        console.log(`Resultado da operação: ${num1} + ${num2} = ${result}`)
        let tipo = 'Soma'
        this.historico.push( this.returnObj(num1,num2,result,tipo) )
    }

    subtrair(num1: number, num2: number): void{
        let result = num1 - num2
        console.log(`Resultado da operação: ${num1} - ${num2} = ${result}`)
        let tipo = 'Subtrair'
        this.historico.push( this.returnObj(num1,num2,result,tipo) )
    }

    multiplicar(num1: number, num2: number): void{
        let result = num1 * num2
        console.log(`Resultado da operação: ${num1} * ${num2} = ${result}`)
        let tipo = 'Multiplicar'
        this.historico.push( this.returnObj(num1,num2,result,tipo) )
    }

    dividir(num1: number, num2: number): void{
        let result = num1 / num2
        console.log(`Resultado da operação: ${num1} / ${num2} = ${result}`)
        let tipo = 'Divisão'
        this.historico.push( this.returnObj(num1,num2,result,tipo) )
    }

    getHistorico(): operacao[] {
        return this.historico
    }

}
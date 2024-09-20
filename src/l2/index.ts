import { Bola } from "./l2-classes/Bola";
import { BombaCombustivel } from "./l2-classes/BombaCombustivel";
import { Calculadora } from "./l2-classes/Calculadora";
import { Carro } from "./l2-classes/Carro";
import { ContaCorrente } from "./l2-classes/ContaCorrente";
import { Contador } from "./l2-classes/Contador";


// 1- Contador 

const contador = new Contador()

contador.incrementar()
console.log(contador.retornarValor())
contador.incrementar()
console.log(contador.retornarValor())
contador.zerar()
console.log(contador.retornarValor())


// 2- Bola

const bola = new Bola('Preto', 25, 'Plastico')

console.log(bola.getMostrarCor())
bola.setTrocarCor('Branco')
console.log(bola.getMostrarCor())


// 3- Conta corrente

const contaCorrente = new ContaCorrente('a123', 'Patrick')

contaCorrente.setNovoNome('Renner')
contaCorrente.deposito(210)
contaCorrente.saque(200)


// 4- Calculadora

const calculadora = new Calculadora()

calculadora.somar(1,2)
calculadora.subtrair(1,2)
calculadora.multiplicar(2,2)
calculadora.dividir(12,6)
console.log(calculadora.getHistorico())

//5- BombaCombustivel

const bombaCombustivel = new BombaCombustivel('Gasolina', 6, 150)
bombaCombustivel.abastecerPorLitro(50)
console.log(bombaCombustivel)
bombaCombustivel.abastecerPorValor(150)
bombaCombustivel.abastecerPorLitro(75)
bombaCombustivel.alterarCombustivel('etanol')
bombaCombustivel.alterarQuantidadeCombustivel(600)
bombaCombustivel.alterarValor(3.5)
console.log(bombaCombustivel)

// 6- Carro

const meuFusca = new Carro(15)
meuFusca.adicionarGasolina(20)
meuFusca.andar(100)
meuFusca.obterGasolina()

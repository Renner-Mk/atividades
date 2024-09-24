import { Cachorro, Cavalo, Gato } from "./classes/Animal";
import { Novo, Velho } from "./classes/Imovel";
import { Camarote, Normal, Vip } from "./classes/Ingresso";


// 1 - Ingresso

const normal = new Normal()
console.log(normal.imprimeValor())
console.log(' - ')

const vip = new Vip()
console.log(vip.imprimeValor())
console.log(' - ')

const camarote = new Camarote()
console.log(camarote.imprimeValor())
console.log(' - ')

// 2 - Imovel

const novo = new Novo()
novo.imovelEndereco()
novo.imprimeValor()
console.log(' - ')

const velho = new Velho()
velho.imovelEndereco()
velho.imprimeValor()
console.log(' - ')

// 3 - Animal

const gato = new Gato("Mix", 'Siamês')
gato.makeSong()
gato.alimentar()
console.log(' - ')

const cachorro = new Cachorro("Mix", 'Siamês')
cachorro.makeSong()
cachorro.atirarBolinha()
console.log(' - ')

const cavalo = new Cavalo("Mix", 'Siamês')
cavalo.makeSong()
cavalo.galopar()
console.log(' - ')
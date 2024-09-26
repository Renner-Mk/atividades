import { Cachorro, Cavalo, Gato } from "./classes/Animal";
import { Circulo, Retangulo } from "./classes/Formas";
import { Item, Pedido } from "./classes/Pedido";
import { Lancheiria, ItemPedido, Cliente } from "./classes/Lancheiria";


//1 - Pedido

const item1 = new Item(35, "xis", 'sem tomate')
const item2 = new Item(35, "xis", 'normal')

const pedido = new Pedido([item1, item2])

pedido.totalApagar()
console.log(' - ')
// 2- Formas

const quadrado = new Retangulo(25, 9)
quadrado.desenhar()
quadrado.redimencionar(5,9)
console.log(' - ')

const circulo = new Circulo(30)
circulo.desenhar()
circulo.redimencionar(25)
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

// 4 - lancheiria

const pedido1 = new ItemPedido('Hambúrguer', 15.00, 'Sem cebola');
const pedido2 = new ItemPedido('Refrigerante', 5.00, 'Coca-Cola 350ml');
const pedido3 = new ItemPedido('Batata Frita', 7.00, 'Com ketchup');

const cliente = new Cliente('João', 'Rua das Flores, 123');
cliente.addPedido(pedido1);
cliente.addPedido(pedido2);
cliente.addPedido(pedido3);

const lancheiria = new Lancheiria('Lanchonete do Zé');
lancheiria.fazerPedido(cliente);
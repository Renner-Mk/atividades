import { carteira, Carteira } from "./l1-Classes/Carteira"
import { Diretor, infoDiretor } from "./l1-Classes/funcionarios"
import { details, funcionarioDiretor } from "./l1-Classes/Intersecao"
import { createProductList, createProduct } from "./l1-Classes/ListaProdutos"
import { Media, objetList } from "./l1-Classes/Media"
import { infoUser, User } from "./l1-Classes/User"


// Exercicio 1

function media(numero1: number, numero2: number): Media{
    const valMedia = (numero1 + numero2) / 2
    return {
        valorMedia: valMedia,
        aprovacao: valMedia >= 6 ? true : false
    }
}

console.log(media(6,4))
console.log('')

// Exercicio 2

function mediaObject(listObj: objetList[]): number {
    // Exercicio pediu assim:
    let resultado: number = 0
    listObj.forEach(obj => {
        resultado += (obj.value * obj.weight)
    });
    return resultado / listObj.length

    //Media ponderada (por peso): 

    // let resultado: number = 0
    // let pesos: number = 0
    // listObj.forEach(obj => {
    //     resultado += (obj.value * obj.weight)
    //     pesos += obj.weight
    // });
    // return resultado / pesos
}

console.log(`A media do aluno 1 é ${mediaObject([
    {value: 10, weight:3},
    {value: 10, weight:7}
])}`)
console.log(`A media do aluno 2 é ${mediaObject([
    {value: 10, weight:3},
    {value: 10, weight:5}, 
    {value: 10, weight:2}
])}`)
console.log('')

// Exercicio 3

const minhaCarteira = carteira(1500)
console.log(minhaCarteira.balance)
minhaCarteira.addBalance(3500)
console.log(minhaCarteira.balance)
minhaCarteira.withdraw(5000)
console.log(minhaCarteira.balance)
minhaCarteira.withdraw(5000)

// Exercicio 4

const productList = createProductList();

productList.addProduct(createProduct("Banana", 25))
productList.addProduct(createProduct("Mamão", 35))
productList.addProduct(createProduct("Pera", 15))
productList.addProduct(createProduct("Morango", 5))
productList.addProduct(createProduct("Abacaxi", 30))
productList.addProduct(createProduct("Melão", 11))
productList.listProduct()
productList.removeProduct('Abacaxi')
productList.listProduct()
console.log('')

//Exercicio 5

const user: User = {
    name: 'Patrick',
    age: 23,
    occupation: 'Analista TI',
    salary: '1500'
}

const user2: User = {
    name: 'Patrick',
    age: 23,
    occupation: 'Analista TI',
}

console.log(infoUser(user));
console.log(infoUser(user2)); 
console.log('')

// Exercicio 6

const diretor: Diretor = {
    name: 'Lucas',
    age: 23,
    commissioning: 5,
    salary: '1500'
}

const diretor2: Diretor = {
    name: 'Lucas',
    age: 23,
    commissioning: 5
}

console.log(infoDiretor(diretor));
console.log(infoDiretor(diretor2)); 
console.log('')

// Exercicio 7 

const userFuncDiret: funcionarioDiretor = {
    name: 'Pablo',
    age: 23,
    commissioning: 1,
    salary: '1500'
}

const userFuncDiret2: funcionarioDiretor = {
    name: 'Pablo',
    age: 23,
    occupation: 'Analista TI',
}

console.log(details(userFuncDiret));
console.log(details(userFuncDiret2)); 

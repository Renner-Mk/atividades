class FormatoDeElemento {
    desenhar(): void {
        console.log(`desenhar`)
    }
}

export class Circulo implements FormatoDeElemento{
    constructor (public raio: number) {}

    desenhar(): void {
        console.log(`Circulo desenhado`)
    }

    redimencionar(novoRaio: number): void {
        this.raio = novoRaio
        console.log(`Redimencionado para novo raio`)
    }
}

export class Retangulo implements FormatoDeElemento{
    constructor (public comprimento: number, public altura: number) {}

    desenhar(): void {
        console.log(`Retangulo desenhado`)
    }

    redimencionar(novoComprimento: number, novaAltura: number): void {
        this.comprimento = novoComprimento
        this.altura = novaAltura
        console.log(`Redimencionado para novo raio`)
    }
}
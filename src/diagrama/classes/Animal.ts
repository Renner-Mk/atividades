abstract class Animal{
    constructor(protected name: string, protected breed: string) {
    }

    abstract makeSong(): void 
    
}

export class Cachorro extends Animal{
    constructor (name: string, breed: string){
        super(name, breed)
        console.log(`É um cachorro com o nome ${name} da raça ${breed}`)
    }

    makeSong(): void {
        console.log(`${this.name} está latindo`)
    }

    atirarBolinha(): void{
        console.log(`${this.name} foi buscar a bolinha`)
        console.log(`${this.name} retornou com a bolinha`)
    }
}

export class Cavalo extends Animal{
    constructor (name: string, breed: string){
        super(name, breed)
        console.log(`É um Cavalo com o nome ${name} da raça ${breed}`)
    }

    makeSong(): void {
        console.log(`${this.name} está relinchando`)
    }

    galopar(): void{
        console.log(`Você começou a galopar com ${this.name}`)
        console.log(`${this.name} está cansado e parou de galopar para descansar`)
    }
}

export class Gato extends Animal{
    constructor (name: string, breed: string){
        super(name, breed)
        console.log(`É um Gato com o nome ${name} da raça ${breed}`)
    }

    makeSong(): void {
        console.log(`${this.name} está miando`)
    }

    alimentar(): void{
        console.log(`${this.name} está miando pois está com fome`)
        console.log(`Você colocou comida para ele.`)
        console.log(`${this.name} está de barriga cheia`)
    }
}
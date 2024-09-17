export interface Product{
    name: string;
    price: number;
}

export type ProductList = {
    productList: Product[];

    addProduct(product: Product): void;
    removeProduct(productName: string): void;
    listProduct(): void;
}

export function createProductList(): ProductList{
    return {
        productList: [],

        addProduct(product: Product): void{
            this.productList.push(product)
        },

        removeProduct(productName: string): void{
            const index = this.productList.findIndex(prod => prod.name === productName);
            if (index === -1) {
                console.log('Produto não encontrado.');
            } else {
                this.productList.splice(index, 1);
                console.log(`Produto ${productName} removido com sucesso!`);
            }
        },

        listProduct(): void{
            if (this.productList.length === 0) {
                console.log('Nenhum produto encontrado');
            } else {
                // this.productList.forEach(product => console.log(product));
                console.log(this.productList)
            }
        }
    };
}

export function createProduct(name: string, price: number): Product {
    return {
        name,
        price,
    };
}

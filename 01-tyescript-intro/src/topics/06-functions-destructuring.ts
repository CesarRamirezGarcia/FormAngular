export interface Product{
    description: string;
    price: number;
}


interface TaxCalculationOptions{
    tax: number;
    products: Product[];

}

export function  taxCalculation(options: TaxCalculationOptions): number[]{
    let total = 0;

    options.products.forEach( ({ price}) =>{       
        total += price;
    });

    return [total, total *  options.tax];
}



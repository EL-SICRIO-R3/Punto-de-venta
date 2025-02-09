export interface IProduct {
    id: number;
    nomProduct: string;
    desciption: string;
    ptice: number;  
}

export interface IListProduct {
    product: IProduct;
    amount: number;
    table: number;
    total: number;
}
export interface IProduct {
    id: number;
    desciption: string;
}

export interface IListProduct {
    product: IProduct;
    amount: number;
    table: number;
}
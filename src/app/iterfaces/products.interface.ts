export interface IProduct {
    id: number;
    nomProduct: string;
    description: string;
    image: string;
    price: number;  
    category: number;
}

export interface IListProduct {
    product: IProduct;
    amount: number;
    table: number;
    total: number;
}

export interface IOpcFiltroPedido {
    id: number
    title: string;
    icon: string;
    active: boolean;
}

export const opcFiltros: IOpcFiltroPedido[] = [
    {
        id: 1,
        title: 'Favoritos',
        icon: 'pi pi-star',
        active: false
    },
    {
        id: 2,
        title: 'Desayunos',
        icon: 'pi pi-sun',
        active: false
    },
    {
        id: 3,
        title: 'Bebidas',
        icon: 'bi bi-cup-straw',
        active: false
    }
]


// Array de productos
export const products: IProduct[] = [
    {
        id: 1,
        nomProduct: "Orden de birria",
        description: "Orden de birria enm plato sopero con torillas hechas a mano.",
        image: "birriaOrden.webp",
        price: 120,
        category: 1
    },
    {
        id: 2,
        nomProduct: "Quesadilla de birria",
        description: "Quesadilla de harina o masa rellena de birria.",
        image: "quesabirria.jpg",
        price: 60,
        category: 1
    },
    {
        id: 3,
        nomProduct: "Taco Dorado",
        description: "Taco hecho con torilla de maiz dorado en grasa de birria.",
        image: "tacoDorado.webp",
        price: 40,
        category: 1
    },
    {
        id: 4,
        nomProduct: "Coca Cola",
        description: "Bebida oxigenada de marca cocacola.",
        image: "coca.jpg",
        price: 35,
        category: 1
    },
    {
        id: 5,
        nomProduct: "Pizza ded Birria",
        description: "Pizza normal con el aditivo de birria en la aprte superior",
        image: "pizzaBirria.jpg",
        price: 150,
        category: 1
    },
    {
        id: 6,
        nomProduct: "Totta De Birria",
        description: "Torta de birria con opcon de ahogarla en consomé de birria",
        image: "tortaBirria.avif",
        price: 80,
        category: 1
    },
    {
        id: 7,
        nomProduct: "Agua De Sabor",
        description: "Bebida refrescante de sabor o natural.",
        image: "bebidasRefrescantes.png",
        price: 20,
        category: 1
    }
];
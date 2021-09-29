export interface Product {
    id:number;
    title:string;
    description:string;
    price:number;
    category:string;
    rating:Rating;
}

export interface Rating
{
    rate:number;
    count:number;
}


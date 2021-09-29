export interface Product {
    id:number;
    title:string;
    description:string;
    rating:rating;
}

export interface rating
{
    rate:number;
    count:number;
}

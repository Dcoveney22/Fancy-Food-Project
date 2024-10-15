import { Product } from "./ProductClass";

export class QualityProduct extends Product {
    Quality:string

    constructor( Category: string, Item: string, Expiry_Date: Date, Price: string, Supplier: string, Quality: string){
        super(Category, Item, Expiry_Date, Price, Supplier);
        this.Quality = Quality;

    }
}








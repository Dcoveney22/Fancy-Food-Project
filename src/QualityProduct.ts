import { SupplierQuality } from "./SupplierQualityClass";
import { Product } from "./ProductClass";

export class QualityProduct extends Product {
    Quality:string

    constructor( Category: string, Item: string, Expiry_Date: string, Price: string, Supplier: string, Quality: string){
        super(Category, Item, Expiry_Date, Price, Supplier);
        this.Quality = Quality;

    }
}


// export class QualityProduct {
//     Category: string;
//     Item: string;
//     Expiry_Date: string;
//     Price: string;
//     Supplier: string;
//     Quality:string

//     constructor( Category: string, Item: string, Expiry_Date: string, Price: string, Supplier: string, Quality: string){
//         this.Category = Category;
//         this.Item = Item,
//         this.Expiry_Date = Expiry_Date,
//         this.Price = Price,
//         this.Supplier = Supplier
//         this.Quality = Quality

//     }
// }
export class ProductPriceClass {
    Category: string;
    Item: string;
    Expiry_Date: Date;
    Price: Number;
    Supplier: string;
    Quality:string

    constructor( Category: string, Item: string, Expiry_Date: Date, Price: Number, Supplier: string, Quality: string){
        this.Category = Category;
        this.Item = Item,
        this.Expiry_Date = Expiry_Date,
        this.Price = Price,
        this.Supplier = Supplier
        this.Quality = Quality

    }
}
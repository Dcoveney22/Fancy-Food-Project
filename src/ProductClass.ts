export class Product {
    Category: string;
    Item: string;
    Expiry_Date: Date;
    Price: string;
    Supplier: string;

    constructor( Category: string, Item: string, Expiry_Date: Date, Price: string, Supplier: string,){
        this.Category = Category;
        this.Item = Item,
        this.Expiry_Date = Expiry_Date,
        this.Price = Price,
        this.Supplier = Supplier

    }
}


import { SupplierQuality } from "./SupplierQualityClass";

export class SuperProduct {
    constructor(
        public Category: string,
        public Item: string,
        public Expiry_Date: string,
        public Price: string,
        public Supplier: string,
        public Quality: string

    ){}
}


export class SuperProductDate {
    constructor(
        public Category: string,
        public Item: string,
        public Expiry_Date: Date,
        public Price: string,
        public Supplier: string,
        public Quality: string

    ){}
}
import { SupplierQuality } from "./SupplierQualityClass";

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
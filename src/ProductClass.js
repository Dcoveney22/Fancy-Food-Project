"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(Category, Item, Expiry_Date, Price, Supplier) {
        this.Category = Category;
        this.Item = Item,
            this.Expiry_Date = Expiry_Date,
            this.Price = Price,
            this.Supplier = Supplier;
    }
    return Product;
}());
exports.Product = Product;

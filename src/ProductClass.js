"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(category, item, expiryDate, price, supplier) {
        this.category = category;
        this.item = item;
        this.expiryDate = expiryDate;
        this.price = price;
        this.supplier = supplier;
    }
    return Product;
}());
exports.Product = Product;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperProductDate = void 0;
var SuperProductDate = /** @class */ (function () {
    function SuperProductDate(Category, Item, Expiry_Date, Price, Supplier, Quality) {
        this.Category = Category;
        this.Item = Item,
            this.Expiry_Date = Expiry_Date,
            this.Price = Price,
            this.Supplier = Supplier;
        this.Quality = Quality;
    }
    return SuperProductDate;
}());
exports.SuperProductDate = SuperProductDate;

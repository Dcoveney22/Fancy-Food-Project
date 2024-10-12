"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualityProduct = void 0;
var ProductClass_1 = require("./ProductClass");
var QualityProduct = /** @class */ (function (_super) {
    __extends(QualityProduct, _super);
    function QualityProduct(Category, Item, Expiry_Date, Price, Supplier, Quality) {
        var _this = _super.call(this, Category, Item, Expiry_Date, Price, Supplier) || this;
        _this.Quality = Quality;
        return _this;
    }
    return QualityProduct;
}(ProductClass_1.Product));
exports.QualityProduct = QualityProduct;

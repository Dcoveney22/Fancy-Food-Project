"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products = [{
        Category: 'Vegetables',
        Item: 'Purple Brussels Sprouts',
        Expiry_Date: '2024-06-28',
        Price: '$12.00',
        Supplier: 'Healthy Harvest',
        Quality: 'Good'
    }];
for (var i = 0; i < products.length; i++) {
    products[i].Price.replace("$", "");
    console.log(products[i]);
}
// 40% Off

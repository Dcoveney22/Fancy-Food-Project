import { stringify } from "querystring";
import { PriceAdjuster } from "./PriceAdjuster";
import { Product } from "./ProductClass";
// import { QualityProduct } from "./QualityProduct";
import { ProductPriceClass } from "./ProductPriceClass";
import { QualityProduct } from "./QualityProduct";


export class PricingFunction{

// products = [{
// Category: 'Vegetables',
// Item: 'Purple Brussels Sprouts',
// Expiry_Date: '2024-06-28',
// Price: '$12.00',
// Supplier: 'Healthy Harvest',
// Quality: 'Good'
// },
// {
// Category: 'Canned Goods',
// Item: 'Purple Brussels Sprouts',
// Expiry_Date: '2024-06-28',
// Price: '$12.00',
// Supplier: 'Healthy Harvest',
// Quality: 'Good'
// },
// {
// Category: 'Dairy',
// Item: 'Purple Brussels Sprouts',
// Expiry_Date: '2024-06-28',
// Price: '$12.00',
// Supplier: 'Healthy Harvest',
// Quality: 'Good'
// }]

async dairy50(dairyReduce){
//reduce by 50%

    dairyReduce.Price = Number(dairyReduce.Price.replace("$","")) * 0.50
    dairyReduce.Price = String(dairyReduce.Price)
    console.log(`${dairyReduce.Item} has a new reduced price: /$${dairyReduce.Price}`)

}

async cannedGoods25(cannedReduce){

  
        cannedReduce.Price = Number(cannedReduce.Price.replace("$","")) * 0.25
        cannedReduce.Price = String(cannedReduce.Price)
        console.log(`${cannedReduce.Item} has a new reduced price: /$${cannedReduce.Price}`)
}

async vegetables40(vegetablesReduce){

    vegetablesReduce.Price = Number(vegetablesReduce.Price.replace("$","")) * 0.40
    vegetablesReduce.Price = String(vegetablesReduce.Price)
    console.log(`${vegetablesReduce.Item} has a new reduced price: /$${vegetablesReduce.Price}`)
 
    }
}

import { stringify } from "querystring";
import { PriceAdjuster } from "./PriceAdjuster";
import { Product } from "./ProductClass";
import { QualityProduct } from "./QualityProduct";


export class PricingFunction{

products = [{
Category: 'Vegetables',
Item: 'Purple Brussels Sprouts',
Expiry_Date: '2024-06-28',
Price: '$12.00',
Supplier: 'Healthy Harvest',
Quality: 'Good'
},
{
Category: 'Canned Goods',
Item: 'Purple Brussels Sprouts',
Expiry_Date: '2024-06-28',
Price: '$12.00',
Supplier: 'Healthy Harvest',
Quality: 'Good'
},
{
Category: 'Dairy',
Item: 'Purple Brussels Sprouts',
Expiry_Date: '2024-06-28',
Price: '$12.00',
Supplier: 'Healthy Harvest',
Quality: 'Good'
}]

async dairy50(dairyReduce){
//reduce by 50%


// for (let i = 0; i < products.length; i++) {
// if(this.products[i].Category === 'Dairy')
    dairyReduce.Price = Number(dairyReduce.Price.replace("$","")) * 0.50

// console.log(dairyReduce)
}


async cannedGoods25(cannedReduce){

    // for (let i = 0; i < this.products.length; i++) {
    //     if(this.products[i].Category === 'Canned Goods')
        cannedReduce.Price = Number(cannedReduce.Price.replace("$","")) * 0.25
    
        
    
    // console.log(cannedReduce)
    
}

async vegetables40(vegetablesReduce){
    // for (let i = 0; i < this.products.length; i++) {
    //     if(this.products[i].category === 'Vegetables')
    vegetablesReduce.Price = Number(vegetablesReduce.Price.replace("$","")) * 0.40
    
    // console.log(vegetablesReduce)
    }
}



// const app = new PricingFunction();

// app.dairy50()
// app.cannedGoods25()
// app.vegetables40()
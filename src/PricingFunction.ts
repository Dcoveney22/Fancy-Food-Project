import { stringify } from "querystring";
import { PriceAdjuster } from "./PriceAdjuster";
import { Product } from "./ProductClass";
// import { QualityProduct } from "./QualityProduct";
import { ProductPriceClass } from "./ProductPriceClass";
import { QualityProduct } from "./QualityProduct";
import { writeFileSync } from "fs";


export class PricingFunction{


async dairy50(dairyReduce){

    dairyReduce.Price = Number(dairyReduce.Price.replace("$","")) * 0.50
    dairyReduce.Price = String(dairyReduce.Price)
    writeFileSync("data/finalList.txt",`${dairyReduce.Item} has a new reduced price: \\$${dairyReduce.Price}` + '\n', {
        flag: "a+"}
    )
}


async cannedGoods25(cannedReduce){

        cannedReduce.Price = Number(cannedReduce.Price.replace("$","")) * 0.25
        cannedReduce.Price = String(cannedReduce.Price)
        writeFileSync("data/finalList.txt",`${cannedReduce.Item} has a new reduced price: \\$${cannedReduce.Price}` + '\n', {
            flag: "a+"})
}

async vegetables40(vegetablesReduce){

    vegetablesReduce.Price = Number(vegetablesReduce.Price.replace("$","")) * 0.40
    vegetablesReduce.Price = String(vegetablesReduce.Price)
    writeFileSync("data/finalList.txt",`${vegetablesReduce.Item} has a new reduced price: \\${vegetablesReduce.Price}` + '\n', {
        flag: "a+"})
    }
}

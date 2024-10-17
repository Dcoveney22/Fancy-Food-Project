import { QualityProduct } from "./QualityProduct";


export class PricingFunction{
  finalArray: QualityProduct[] = []     

    async productReduce(productPrice: QualityProduct, reduction: number){

        const tempPrice = Number(productPrice.Price.replace("$","")) * reduction
        productPrice.Price = String(tempPrice)
    }
}

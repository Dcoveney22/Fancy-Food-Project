import { QualityProduct } from "./QualityProduct";



export class PricingFunction{
  finalArray: QualityProduct[] = []     

async outOfStock(oos: QualityProduct[]) {
     oos.Price = Number(oos.Price.replace("$","")) * 0
     oos.Price = String(oos.Price)
  
}

async dairy50(dairyReduce: QualityProduct[]){
    
    dairyReduce.Price = Number(dairyReduce.Price.replace("$","")) * 0.5
    dairyReduce.Price = String(dairyReduce.Price)

}

async cannedGoods25(cannedReduce: QualityProduct[]){
   
    cannedReduce.Price = Number(cannedReduce.Price.replace("$","")) * 0.25
    cannedReduce.Price = String(cannedReduce.Price)
}

async vegetables40(vegetablesReduce: QualityProduct[]){
    
    vegetablesReduce.Price = Number(vegetablesReduce.Price.replace("$","")) * 0.40
    vegetablesReduce.Price = String(vegetablesReduce.Price)

}
}
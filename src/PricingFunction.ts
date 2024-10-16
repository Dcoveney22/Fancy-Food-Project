import { QualityProduct } from "./QualityProduct";


export class PricingFunction{
  finalArray: QualityProduct[] = []     

    async outOfStock(oos: QualityProduct) {
        const tempOOSPrice =  Number(oos.Price.replace("$","")) * 0
        oos.Price = String(tempOOSPrice)
  
    }

    async dairy50(dairyReduce: QualityProduct){
    
        const tempDairyPrice = Number(dairyReduce.Price.replace("$","")) * 0.5
        dairyReduce.Price = String(tempDairyPrice)

        }

    async cannedGoods25(cannedReduce: QualityProduct){
   
        const tempCannedGoodsPrice = Number(cannedReduce.Price.replace("$","")) * 0.25
        cannedReduce.Price = String(tempCannedGoodsPrice)
    }

    async vegetables40(vegetablesReduce: QualityProduct){
    
        const tempVegetablesPrice = Number(vegetablesReduce.Price.replace("$","")) * 0.40
        vegetablesReduce.Price = String(tempVegetablesPrice)

    }
    
}
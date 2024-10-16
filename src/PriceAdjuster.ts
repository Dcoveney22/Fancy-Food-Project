
import { QualityProduct } from './QualityProduct'
import { PricingFunction } from './PricingFunction'


let priceReducer = new PricingFunction()
 
export class PriceAdjuster {
 
  finalArray: QualityProduct[] = []
  // outOfDateArray: QualityProduct[] = []
  todaysDate = new Date("2024-06-10")
      
    async priceChanger (productData: QualityProduct[]) {
      
 
      for (let x = 0; x < productData.length; x++) {
        const expDate = productData[x].Expiry_Date
        const category = productData[x].Category
        const oneDay = 24 * 60 * 60 * 1000
        const moreEqualToday = expDate.getTime() >= this.todaysDate.getTime()


      if(expDate.getTime() < this.todaysDate.getTime()){
        priceReducer.outOfStock(productData[x])
        this.finalArray.push(productData[x])
        }

      if(category === 'Dairy'){
        if (expDate.getTime() <= this.todaysDate.getTime() + (4 * oneDay) && moreEqualToday){
        priceReducer.dairy50(productData[x])
        this.finalArray.push(productData[x])
        }
      }
      
      if(category === 'Canned Goods'){
        if(expDate.getTime() <= this.todaysDate.getTime() + (90 * oneDay) && moreEqualToday){
        priceReducer.cannedGoods25(productData[x])
        this.finalArray.push(productData[x])
        }
      }

      if(category === 'Vegetables'){
        if(expDate.getTime() <= this.todaysDate.getTime() + (3 * oneDay) && moreEqualToday){
          priceReducer.vegetables40(productData[x])
          this.finalArray.push(productData[x])
        }
      }
      
      
      
      }
    }
}

    
 



    


import { Product } from './ProductClass'
import { AskUser } from './AskUser'
import { SupplierQuality } from './SupplierQualityClass'
import { QualityProduct } from './QualityProduct'
import { PricingFunction } from './PricingFunction'

let priceReducer = new PricingFunction()
 
export class PriceAdjuster {
 
  finalArray: QualityProduct[] = []
  outOfDateArray: QualityProduct[] = []
  todaysDate = new Date("2024-06-10")
      
    async priceChanger (productData: QualityProduct[]) {
      
 
      for (let x = 0; x < productData.length; x++) {
        const expDate = productData[x].Expiry_Date
        const category = productData[x].Category
        const oneDay = 24 * 60 * 60 * 1000
      if(expDate.getTime() < this.todaysDate.getTime()){
        console.log(`${productData[x].Item} is out of date`);
        this.outOfDateArray.push(productData[x])
       
        }
      if(category === 'Dairy'){
        if (expDate.getTime() <= this.todaysDate.getTime() + (4 * oneDay) && expDate.getTime() >= this.todaysDate.getTime()){
        priceReducer.dairy50(productData[x])

      }
    }
      if(category === 'Canned Goods'){
        if(expDate.getTime() <= this.todaysDate.getTime() + (90 * oneDay) && expDate.getTime() >= this.todaysDate.getTime()){
        priceReducer.cannedGoods25(productData[x])

        }
      }
      if(category === 'Vegetables'){
        if(expDate.getTime() <= this.todaysDate.getTime() + (3 * oneDay) && expDate.getTime() >= this.todaysDate.getTime()){
          priceReducer.vegetables40(productData[x])
      
        }
      }
      
      
      
      }
// console.log(this.finalArray)
          // const diff = productData[x].Expiry_Date.getTime() - this.todaysDate.getTime()
        //   console.log(diff)
        // }
       
        //  (this.productArrayDate[x].Expiry_Date - this.todaysDate) {
        //   const diff = (this.productArrayDate[x].Expiry_Date - this.todaysDate).days
        //  if(diff < 4)
        //  console.log(diff)

      

  }
    
}

    
 



    


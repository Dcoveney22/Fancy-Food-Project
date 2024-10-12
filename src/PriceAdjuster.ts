import { Product } from './ProductClass'
import { AskUser } from './AskUser'
import { SupplierQuality } from './SupplierQualityClass'
import { QualityProduct } from './QualityProduct'
import { SuperProductDate } from './SuperProductDateClass'
import { PricingFunction } from './PricingFunction'

let priceReducer = new PricingFunction()
 
export class PriceAdjuster {
 
  finalArray: QualityProduct[] = []
  outOfDateArray: QualityProduct[] = []
  todaysDate = new Date("2024-06-10")
      
    async priceChanger (productData: QualityProduct[]) {
      
      // console.log(productData)
      // date = this.todaysDate
      for (let x = 0; x < productData.length; x++) {
      if(productData[x].Expiry_Date.getTime() < this.todaysDate.getTime()){
        console.log(`${productData[x].Item} is out of date`);
        this.outOfDateArray.push(productData[x])
       
        }
      if(productData[x].Category === 'Dairy'){
        if (productData[x].Expiry_Date.getTime() <= this.todaysDate.getTime() + (4 * 24 * 60 * 60 * 1000) && productData[x].Expiry_Date.getTime() >= this.todaysDate.getTime()){
        priceReducer.dairy50(productData[x])
        this.finalArray.push(productData[x])
        console.log(`${productData[x].Item} has a new reduced price: $${productData[x].Price}`)
        // console.log(productData[x])
        // }
      }
    }
      if(productData[x].Category === 'Canned Goods'){
        if(productData[x].Expiry_Date.getTime() <= this.todaysDate.getTime() + (90 * 24 * 60 * 60 * 1000) && productData[x].Expiry_Date.getTime() >= this.todaysDate.getTime()){
        priceReducer.cannedGoods25(productData[x])
        this.finalArray.push(productData[x])
        console.log(`${productData[x].Item} has a new reduced price: $${productData[x].Price}`)
          // console.log(productData[x], "25% Off")
        }
      }
      if(productData[x].Category === 'Vegetables'){
        if(productData[x].Expiry_Date.getTime() <= this.todaysDate.getTime() + (3 * 24 * 60 * 60 * 1000) && productData[x].Expiry_Date.getTime() >= this.todaysDate.getTime()){
          priceReducer.vegetables40(productData[x])
          this.finalArray.push(productData[x])
          console.log(`${productData[x].Item} has a new reduced price: $${productData[x].Price}`)
          // console.log(productData[x], "40% Off")
        }
      }
      
      
      
      }
console.log(this.finalArray)
          // const diff = productData[x].Expiry_Date.getTime() - this.todaysDate.getTime()
        //   console.log(diff)
        // }
       
        //  (this.productArrayDate[x].Expiry_Date - this.todaysDate) {
        //   const diff = (this.productArrayDate[x].Expiry_Date - this.todaysDate).days
        //  if(diff < 4)
        //  console.log(diff)

      

  }
    
}

    
 



    


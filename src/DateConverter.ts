import { Product } from './ProductClass'
import { AskUser } from './AskUser'
import { SupplierQuality } from './SupplierQualityClass'
import { QualityProduct } from './QualityProduct'
import { SuperProductDate } from './SuperProductDateClass'

export class DateConverter {
  productArrayDate: SuperProductDate[] = []
  todaysDate = new Date("2024-06-10")
    async converter(productData: string | any[]) {
      for (let i = 0; i < productData.length; i++) {
              productData[i].Expiry_Date = new Date(productData[i].Expiry_Date);
              
                this.productArrayDate.push(productData[i])                                 
      }
                   
    }
      
    async expChange() {
       for (let j = 0; j < this.productArrayDate.length; j++) {
        if (this.productArrayDate[j].Category === 'Dairy' && this.productArrayDate[j].Quality === 'Ok')
          this.productArrayDate[j].Expiry_Date.setDate(this.productArrayDate[j].Expiry_Date.getDate() - 2)
        if (this.productArrayDate[j].Category === 'Vegetables' && this.productArrayDate[j].Quality === 'Ok') 
          this.productArrayDate[j].Expiry_Date.setDate(this.productArrayDate[j].Expiry_Date.getDate() - 1)
        if (this.productArrayDate[j].Category === 'Canned Goods' && this.productArrayDate[j].Quality === 'Ok') 
          this.productArrayDate[j].Expiry_Date.setMonth(this.productArrayDate[j].Expiry_Date.getMonth() - 1)
        
      }
      // console.log(this.productArrayDate)            
    } 

    async dateCompare() {
      for (let x = 0; x < this.productArrayDate.length; x++) {
        if (this.productArrayDate[x].Expiry_Date < this.todaysDate){
          console.log("YES")
        }
       
        //  (this.productArrayDate[x].Expiry_Date - this.todaysDate) {
        //   const diff = (this.productArrayDate[x].Expiry_Date - this.todaysDate).days
        //  if(diff < 4)
        //  console.log(diff)

      }

    }
    
}
    
 



    


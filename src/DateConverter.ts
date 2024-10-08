import { Product } from './ProductClass'
import { AskUser } from './AskUser'
import { SupplierQuality } from './SupplierQualityClass'
import { SuperProduct } from './SuperProductClass'
import { SuperProductDate } from './SuperProductDateClass'

export class DateConverter {
  productArrayDate: SuperProductDate[] = []

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
    
  
}


    


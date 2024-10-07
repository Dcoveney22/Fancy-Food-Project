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
              //  console.log(this.productArrayDate)  
    }
}
            

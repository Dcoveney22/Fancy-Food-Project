import { Product } from './ProductClass'
import { AskUser } from './AskUser'
import { SupplierQuality } from './SupplierQualityClass'
import { QualityProduct } from './QualityProduct'
import { SuperProductDate } from './SuperProductDateClass'

export class DateConverter {
  productArrayDate: QualityProduct[] = []
  todaysDate = new Date("2024-06-10")
      
    async expChange(productData: QualityProduct[]) {
      //const =
      
      for (let j = 0; j < productData.length; j++) {
         const date = productData[j].Expiry_Date.getDate()
         const category = productData[j].Category
         const quality = productData[j].Quality

        if(quality === 'Ok'){
            if (category === 'Dairy')
              productData[j].Expiry_Date.setDate(date - 2)

            if (category === 'Vegetables') 
              productData[j].Expiry_Date.setDate(date - 1)

            if (category === 'Canned Goods') 
              productData[j].Expiry_Date.setMonth(date - 1)
        } 

        this.productArrayDate.push(productData[j])
      }
      // console.log(this.productArrayDate[1])        
       
    } 

//     async dateCompare() {
//       for (let x = 0; x < this.productData.length; x++) {
//         if (this.productData[x].Expiry_Date.getTime() > this.todaysDate.getTime()){
//           const diff = this.productData[x].Expiry_Date.getTime() - this.todaysDate.getTime()
//           console.log(diff)
//         }
       
//          (this.productArrayDate[x].Expiry_Date - this.todaysDate) {
//           const diff = (this.productArrayDate[x].Expiry_Date - this.todaysDate).days
//          if(diff < 4)
//          console.log(diff)

//       }

//     }
    
// }
}
    
 



    


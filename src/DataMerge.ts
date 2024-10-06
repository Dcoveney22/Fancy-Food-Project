import { Product } from './ProductClass'
import { AskUser } from './AskUser'
import { SupplierQuality } from './SupplierQualityClass'
import { SuperProduct } from './SuperProductClass'


export class DataMerge {
selectedProducts: SuperProduct[] = []
    async merger(inventory: string | any[], supplier: string | any[]) {

      for (let i = 0; i < inventory.length; i++) {
          for (let j = 0; j < supplier.length; j++) {
               if (inventory[i].Supplier === supplier[j].Supplier){
  
                  inventory[i].Quality = supplier[j].Quality_Score; 
                  this.selectedProducts.push(inventory[i]) 
              
                }
              
          }
      }
  
}
}

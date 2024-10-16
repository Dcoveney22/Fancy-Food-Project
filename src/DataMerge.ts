import { Product } from './ProductClass'
import { SupplierQuality } from './SupplierQualityClass'
import { QualityProduct } from './QualityProduct'


export class DataMerge {
  selectedProducts: QualityProduct[] = []
    async merger(inventory: Product[], supplier: SupplierQuality[]) {

      for (let i = 0; i < inventory.length; i++) {

        for (let j = 0; j < supplier.length; j++) {

            if (inventory[i].Supplier === supplier[j].Supplier){

                const newProduct = new QualityProduct(inventory[i].Category, inventory[i].Item, inventory[i].Expiry_Date, inventory[i].Price, inventory[i].Supplier, supplier[j].Quality_Score)
                  
                this.selectedProducts.push(newProduct) 
               
            }
              
        }
      }
  
    }
}

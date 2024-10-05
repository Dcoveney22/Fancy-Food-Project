import { Product } from './ProductClass'
import { AskUser } from './AskUser'
import { SupplierQuality } from './SupplierQualityClass'
import { SuperProduct } from './SuperProductClass'


 const selectedProducts: SuperProduct[] = []

export class DataMerge {

   
    
    supplierArray: SupplierQuality[] = [
    {
        Supplier: 'Healthy Harvest',
        Quality: 'Good'
    },
    {
        Supplier: 'Farm Fresh Produce',
        Quality: 'Good'
    },
    {
        Supplier: 'Colorful Veggies Co.',
        Quality: 'Ok'
    },
    {
        Supplier: 'Urban Greens',
        Quality: 'Good'
    }
    ]



   productArray: Product[] = [
    {
        Category: 'Vegetables',
        Item: 'White Asparagus',
        Expiry_Date: '2024-06-22',
        Price: '$15.00',
        Supplier: 'Healthy Harvest'
      },
      {
        Category: 'Dairy',
        Item: 'Chioggia Beets',
        Expiry_Date: '2024-06-25',
        Price: '$7.00',
        Supplier: 'Organic Veggie Farm'
      },
      {
        Category: 'Dairy',
        Item: 'Purple Brussels Sprouts',
        Expiry_Date: '2024-06-28',
        Price: '$12.00',
        Supplier: 'Healthy Harvest'
      },
      {
        Category: 'Vegetables',
        Item: 'Yellow Bell Peppers',
        Expiry_Date: '2024-07-01',
        Price: '$5.00',
        Supplier: 'Colorful Veggies Co.'
      }
    ]

async main() {

    for (let i = 0; i < this.productArray.length; i++) {
        for (let j = 0; j < this.supplierArray.length; j++) {
             if (this.productArray[i].Supplier === this.supplierArray[j].Supplier){
                console.log("YES!")
            selectedProducts.push(this.productArray[i], this.supplierArray[j].Quality)   
           
            
        }
            
            }
          
        // console.log(element);
    }
   console.log(selectedProducts)
}


}
const dataMerge = new DataMerge();
dataMerge.main()
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

    async merger(inventory: string | any[], supplier: string | any[]) {

      for (let i = 0; i < inventory.length; i++) {
          for (let j = 0; j < supplier.length; j++) {
               if (inventory[i].Supplier === supplier[j].Supplier){
  
                  inventory[i].Quality = supplier[j].Quality_Score; 
                  selectedProducts.push(inventory[i]) 
              
          }
              
              }
          
        // console.log(element);
    }
   console.log(selectedProducts)
}


}
// const dataMerge = new DataMerge();
// dataMerge.main()
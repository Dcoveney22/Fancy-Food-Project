import { Product } from './ProductClass'

const selectedProducts: Product[] = []

export class SearchFunction {
    
   miniProducts: Product[] = [
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

    for (let i = 0; i < this.miniProducts.length; i++) {
        
        for (let j = 0; j < this.miniProducts.length; j++) {
            if (this.miniProducts.supplier === "Colorful Veggies Co."){
                   selectedProducts.push(this.miniProducts[j]) 
            }
            
        }    
       
          
        // console.log(element);
    }
   console.log(selectedProducts)
}


}
const app = new SearchFunction();
app.main()
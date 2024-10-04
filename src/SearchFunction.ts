import { Product } from './ProductClass'
import { AskUser } from './AskUser'


const selectedProducts: Product[] = []

class SearchFunction {
    
  //  arr: Product[] = [
  //   {
  //       Category: 'Vegetables',
  //       Item: 'White Asparagus',
  //       Expiry_Date: '2024-06-22',
  //       Price: '$15.00',
  //       Supplier: 'Healthy Harvest'
  //     },
  //     {
  //       Category: 'Dairy',
  //       Item: 'Chioggia Beets',
  //       Expiry_Date: '2024-06-25',
  //       Price: '$7.00',
  //       Supplier: 'Organic Veggie Farm'
  //     },
  //     {
  //       Category: 'Dairy',
  //       Item: 'Purple Brussels Sprouts',
  //       Expiry_Date: '2024-06-28',
  //       Price: '$12.00',
  //       Supplier: 'Healthy Harvest'
  //     },
  //     {
  //       Category: 'Vegetables',
  //       Item: 'Yellow Bell Peppers',
  //       Expiry_Date: '2024-07-01',
  //       Price: '$5.00',
  //       Supplier: 'Colorful Veggies Co.'
  //     }
  //   ]

async main(arr) {

    for (let i = 0; i < arr.length; i++) {
            if (arr[i].Supplier === `${userAnswer}`){
              console.log("YES!")
               selectedProducts.push(arr[i])   
            }
          
        // console.log(element);
    }
   console.log(selectedProducts)
}


}
// const app = new SearchFunction();
// app.main()
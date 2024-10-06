import { Product } from './ProductClass'
import { AskUser } from './AskUser'


const selectedProducts: Product[] = []

export class SearchFunction {

async main(arr: string | any[], input: any) {

    for (let i = 0; i < arr.length; i++) {
            if (arr[i].Supplier === `${input}`){
              console.log("YES!")
               selectedProducts.push(arr[i])   
            }
          
    }
   console.log(selectedProducts)
}


}

import fs from 'fs'
import { parse } from 'csv-parse'
import { Product } from './ProductClass'

 export class DataPack {

    productArray: Product[] = []
  
    filePath = './data/inventory.csv';
   
    
    async loadInventory() {
        const parser = fs.createReadStream(this.filePath).pipe(
            parse({
                delimiter: ',',
                columns: true,
            })
        );
        for await (const row of parser) {
            // console.log(row)
            this.productArray.push(row)
        }    
     
    }  
    
}   









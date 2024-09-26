import fs from 'fs'
import { parse } from 'csv-parse'
import { Product } from './ProductClass'

export let productArray:string[] 
      productArray = []

export let sameDate:string[] 
      sameDate = []

export class DataPack {
    filePath = './data/inventory.csv';

    async main() {
        await this.streamAndParse();
    }
    async streamAndParse() {
        const parser = fs.createReadStream(this.filePath).pipe(
            parse({
                delimiter: ',',
                columns: true,
            })
        );
        for await (const row of parser) {
            productArray.push(row)
            console.log(productArray);

   
    
   }for (let i = 0; i < productArray.length; i++) {
    const element = productArray[i];
        if (productArray[i].expiryDate === "2024-06-10")

}
}  
}
    export const app = new DataPack();
app.main();








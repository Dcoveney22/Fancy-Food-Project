import fs from 'fs'
import { parse } from 'csv-parse'
import { Product } from './ProductClass'


export let sameDate:string[] 
      sameDate = []

export class DataPack {
    productArray = []
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
            this.productArray.push(row)
            console.log(this.productArray);
    
//    }for (let i = 0; i < productArray.length; i++) {
//     const element = productArray[i];
//         if (productArray[i].expiryDate === "2024-06-10")

        }
    }  
}
    export const app = new DataPack();
app.main();








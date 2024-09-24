import fs from 'fs'
import { parse } from 'csv-parse'

export let productArray:string[] 
      productArray = []

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
            // console.log(productArray);
            
        }  
    
    }
   
}

export const app = new DataPack();
app.main();








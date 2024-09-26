import fs from 'fs'
import { parse } from 'csv-parse'
import { Product } from './ProductClass'

 interface productArray { category: string, item: string, expiryDate: number, price: number, supplier: string}
    const productArray: productArray[] = []


export class DataPack {
    offProduct: {category: string, item: string, expiryDate: number, price: number, supplier: string}[] = []
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
            for (let i = 0; i < productArray.length; i++) {
                if (productArray[i].category === "Dairy"){
                    
                    this.offProduct.push(productArray[i])
                    
                }    
             console.log(this.offProduct)
            }
    
        }

    }  
}   
export const app = new DataPack();
app.main();








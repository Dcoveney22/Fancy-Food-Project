import fs from 'fs'
import { parse } from 'csv-parse'
import { SupplierQuality } from './SupplierQualityClass'

//  interface productArray { category: string, item: string, expiryDate: number, price: number, supplier: string}
 
 
 export class SupplierPack {
     
    supplierQualityArray: SupplierQuality[] = []
    // offProduct: {category: string, item: string, expiryDate: number, price: number, supplier: string}[] = []
    filePath = './data/quality.csv';
   
    
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
            // console.log(row)
            this.supplierQualityArray.push(row)
        }    
            // console.log(this.productArray);
        
            // // for (let i = 0; i < productArray.length; i++) {
            // //     if (productArray[i].category === "Dairy"){
                    
            // //         this.offProduct.push(productArray[i])
                    
            // //     }    
            // //  console.log(this.offProduct)
            // }

    }  
}   


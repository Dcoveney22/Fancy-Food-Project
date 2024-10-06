import fs from 'fs'
import { parse } from 'csv-parse'
import { SupplierQuality } from './SupplierQualityClass'

 export class SupplierPack {
    supplierQualityArray: SupplierQuality[] = []
    filePath = './data/quality.csv';
   
    async loadSupplier() {
        const parser = fs.createReadStream(this.filePath).pipe(
            parse({
                delimiter: ',',
                columns: true,
            })
        );
        for await (const row of parser) {
            this.supplierQualityArray.push(row)
        }    
        
    }  
}   


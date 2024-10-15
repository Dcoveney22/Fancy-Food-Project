import { writeFileSync } from "fs";
import { QualityProduct } from "./QualityProduct";


export class PrintToFile {

    async printToFile(finalList: QualityProduct[]){ 
    for (let i = 0; i < finalList.length; i++) {
    if(finalList[i].Price === '0' ){
    writeFileSync("data/finalList.txt",`${finalList[i].Item} is out of date` + '\n', {
          flag: "a+"});   
   
    } else{
    writeFileSync("data/finalList.txt",`${finalList[i].Item} has a new reduced price: \\$${finalList[i].Price}` + '\n', {
        flag: "a+"})
    }   
    }

    }
}
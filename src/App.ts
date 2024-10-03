import { DataPack } from "./DataPack";
import { SearchFunction } from "./SearchFunction";
import { SupplierPack } from "./SupplierPack";
import { AskUser } from "./AskUser";


class App {
    async main() {
    //Get the Product Data
    let dataPack = new DataPack()

    await dataPack.main()
    // console.log(dataPack.productArray)
    
    // Get the supplier Data
    let supplierPack = new SupplierPack()

    await supplierPack.main()
    // console.log(supplierPack.supplierQualityArray)


    // Ask user for the supplier choice
    let askUser = new AskUser()

    await askUser.getInput()
   

    // Push items to a new Array based on a common element
    let searchFunction = new SearchFunction()
        
    await searchFunction.main(dataPack.productArray)
    } 
}


const app = new App();
app.main()
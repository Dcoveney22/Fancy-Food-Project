import { DataPack } from "./DataPack";
import { SearchFunction } from "./SearchFunction";
import { SupplierPack } from "./SupplierPack";
import { AskUser } from "./AskUser";
import { DataMerge } from "./DataMerge";


class App {
    async main() {
    // GET PRODUCT DATA
    let dataPack = new DataPack()

    await dataPack.loadInventory()
    // console.log(dataPack.productArray)
    
    // GET SUPPLIER DATA
    let supplierPack = new SupplierPack()

    await supplierPack.loadSupplier()
    // console.log(supplierPack.supplierQualityArray)

    //OPTION: ADD DATA CHOICE TO MERGE?  MAKE THE PROGRAM MORE FLEXIBLE

    //Ask user for the supplier choice
    let askUser = new AskUser()

    await askUser.getInput()

    // MERGE KEY DATA FROM THE TWO CSV FILES
    let dataMerge = new DataMerge()
    
    await dataMerge.merger(dataPack.productArray, supplierPack.supplierQualityArray, askUser.answer)
    console.log(dataMerge.selectedProducts)
}
}



const app = new App();
app.main()

//Search Function Code

    // Ask user for the supplier choice
    // let askUser = new AskUser()

    // await askUser.getInput()
    // Push items to a new Array based on a common element
    // let searchFunction = new SearchFunction()
    
    
    // await searchFunction.main(dataPack.productArray, askUser.answer)
    // } 
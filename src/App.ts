import { DataPack } from "./DataPack";
import { SearchFunction } from "./SearchFunction";
import { SupplierPack } from "./SupplierPack";
import { AskUser } from "./AskUser";
import { DataMerge } from "./DataMerge";
import { DateConverter } from "./DateConverter";


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

    //ASK USER FOR OPTION CHOICE
    let askUser = new AskUser()

    await askUser.getInput()

    // MERGE KEY DATA FROM THE TWO CSV FILES
    let dataMerge = new DataMerge()
    
    await dataMerge.merger(dataPack.productArray, supplierPack.supplierQualityArray, askUser.answer)
    // console.log(dataMerge.selectedProducts)
    
    //CONVERT STRING DATE INTO DATE FORMAT
    let dateConverter = new DateConverter()

    await dateConverter.converter(dataMerge.selectedProducts)
    // console.log(dateConverter.productArrayDate)
    
    //REDUCE DATE BASED ON CUSTOMERS REQUIREMENTS
    await dateConverter.expChange()
    // console.log(dateConverter.productArrayDate)
    
    // CHECK DATES VS "TODAYS DATE"
    await dateConverter.dateCompare() 



    }



} 




const app = new App();
app.main()

import { DataPack } from "./DataPack";
import { SupplierPack } from "./SupplierPack";
import { AskUser } from "./AskUser";
import { DataMerge } from "./DataMerge";
import { DateConverter } from "./DateConverter";
import { PriceAdjuster } from "./PriceAdjuster";


class App {
    async main() {
    // GET PRODUCT DATA
    let dataPack = new DataPack()

    await dataPack.loadInventory()
    
    // GET SUPPLIER DATA
    let supplierPack = new SupplierPack()

    await supplierPack.loadSupplier()
    // console.log(supplierPack.supplierQualityArray)


    // MERGE KEY DATA FROM THE TWO CSV FILES
    let dataMerge = new DataMerge()
    
    await dataMerge.merger(dataPack.productArray, supplierPack.supplierQualityArray)
    // console.log(dataMerge.selectedProducts)
    
    //CONVERT STRING DATE INTO DATE FORMAT
    let dateConverter = new DateConverter()

    // console.log(dateConverter.productArrayDate)
    
    //REDUCE DATE BASED ON CUSTOMERS REQUIREMENTS
    await dateConverter.expChange(dataMerge.selectedProducts)
    // console.log(dateConverter.productArrayDate)
    
    // CHECK DATES VS "TODAYS DATE"
    let priceAdjuster = new PriceAdjuster()
    await priceAdjuster.priceChanger(dateConverter.productArrayDate) 
    
    //     
        

    }



} 




const app = new App();
app.main()




    //ASK USER FOR OPTION CHOICE
    // let askUser = new AskUser()

    // await askUser.getInput()
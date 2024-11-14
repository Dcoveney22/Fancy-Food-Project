import { DataPack } from "./DataPack";
import { DataPackDB } from "./dbConnect";
import { SupplierPack } from "./SupplierPack";
import { DataMerge } from "./DataMerge";
import { DateConverter } from "./DateConverter";
import { PriceAdjuster } from "./PriceAdjuster";
import { PrintToFile } from "./PrintToFile";

class App {
  async main() {
    // GET PRODUCT DATA
    // let dataPack = new DataPack();

    // await dataPack.loadInventory();

    let dataPackDB = new DataPackDB();

    await dataPackDB.getInventoryDB();
    console.log(dataPackDB.inventoryData);

    // GET SUPPLIER DATA
    let supplierPack = new SupplierPack();

    await supplierPack.loadSupplier();
    //console.log(supplierPack.supplierQualityArray)

    // MERGE KEY DATA FROM THE TWO CSV FILES
    let dataMerge = new DataMerge();

    await dataMerge.merger(
      dataPack.productArray,
      supplierPack.supplierQualityArray
    );
    // console.log(dataMerge.selectedProducts)

    //CONVERT STRING DATE INTO DATE FORMAT
    let dateConverter = new DateConverter();

    // console.log(dateConverter.productArrayDate)

    //REDUCE DATE BASED ON CUSTOMERS REQUIREMENTS
    await dateConverter.expChange(dataMerge.selectedProducts);
    // console.log(dateConverter.productArrayDate)

    // CHECK DATES VS "TODAYS DATE" & CHANGE PRICE
    let priceAdjuster = new PriceAdjuster();
    await priceAdjuster.priceChanger(dateConverter.productArrayDate);
    // console.log(priceAdjuster.finalArray)

    //PRINT TO FILE
    let printingFunction = new PrintToFile();
    await printingFunction.printToFile(priceAdjuster.finalArray);

    console.log("You can find your new list of products in data/finalList.txt");
  }
}

const app = new App();
app.main();

//ASK USER FOR OPTION CHOICE
// let askUser = new AskUser()

// await askUser.getInput()

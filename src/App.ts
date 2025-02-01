import { DataPack } from "./DataPack";
import { DataPackDB } from "./dbConnectInventory";
import { SupplierDataPackDB } from "./dbConnectSupplier";
import { SupplierPack } from "./SupplierPack";
import { DataMerge } from "./DataMerge";
import { DateConverter } from "./DateConverter";
import { PriceAdjuster } from "./PriceAdjuster";
import { PrintToFile } from "./PrintToFile";

class App {
  async main() {
    // GET PRODUCT DATA from csv in file
    // let dataPack = new DataPack();
    // await dataPack.loadInventory();

    // GET PRODUCT DATA from postgres db
    let dataPackDB = new DataPackDB();

    await dataPackDB.loadInventoryDB();
    // console.log(dataPackDB.inventoryDataArray);

    // GET SUPPLIER DATA
    // let supplierPack = new SupplierPack();
    // await supplierPack.loadSupplier();
    // console.log(supplierPack.supplierQualityArray);
    let supplierDataPackDB = new SupplierDataPackDB();

    await supplierDataPackDB.loadSupplierDB();
    // console.log(supplierDataPackDB.supplierDataArray);

    // MERGE KEY DATA FROM THE TWO CSV FILES
    let dataMerge = new DataMerge();

    await dataMerge.merger(
      dataPackDB.inventoryDataArray,
      supplierDataPackDB.supplierDataArray
    );
    // console.log(dataMerge.selectedProducts);

    //CONVERT STRING DATE INTO DATE FORMAT
    let dateConverter = new DateConverter();

    // console.log(dateConverter.productArrayDate)

    //REDUCE DATE BASED ON CUSTOMERS REQUIREMENTS
    await dateConverter.expChange(dataMerge.selectedProducts);
    console.log(dataMerge.selectedProducts);

    // CHECK DATES VS "TODAYS DATE" & CHANGE PRICE
    let priceAdjuster = new PriceAdjuster();
    await priceAdjuster.priceChanger(dateConverter.productArrayDate);
    // console.log(priceAdjuster.finalArray)

    //PRINT TO FILE
    let printingFunction = new PrintToFile();
    await printingFunction.printToFile(priceAdjuster.finalArray);
    // console.log(priceAdjuster.finalArray);
    console.log("You can find your new list of products in data/finalList.txt");
  }
}

const app = new App();
app.main();

//ASK USER FOR OPTION CHOICE
// let askUser = new AskUser()

// await askUser.getInput()

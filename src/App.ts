import { DataPack } from "./DataPack";


class App {
    async main() {
    let dataPack = new DataPack()

    await dataPack.main()
    
    
    console.log(dataPack.productArray)
    }  

}

const app = new App();
app.main()
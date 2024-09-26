import { DataPack } from "./DataPack";


class App {
    async main() {
    let getData = new DataPack()

    getData.main()
    }  

}

const app = new App();
app.main()
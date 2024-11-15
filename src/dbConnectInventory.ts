import { Client } from "pg";
import { Product } from "./ProductClass";

export class DataPackDB {
  inventoryDataArray: Product[] = [];

  client = new Client({
    host: "127.0.0.1",
    port: 5432,
    database: "fancyfooddb",
    user: "postgres",
    password: "p@ssword1",
  });
  async loadInventoryDB() {
    await this.client.connect();
    await this.getInventoryDB();
    await this.client.end();
  }

  async getInventoryDB() {
    const res = await this.client.query("SELECT * FROM inventory");
    res.rows.forEach((inventoryData) => {
      this.inventoryDataArray.push(inventoryData);
      console.log(inventoryData);
    });
  }
}

// const app = new DataPackDB();
// app.main();

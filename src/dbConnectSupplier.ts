import { Client } from "pg";
import { SupplierQuality } from "./SupplierQualityClass";

export class SupplierDataPackDB {
  supplierDataArray: SupplierQuality[] = [];

  client = new Client({
    host: "127.0.0.1",
    port: 5432,
    database: "fancyfooddb",
    user: "postgres",
    password: "p@ssword1",
  });
  async loadSupplierDB() {
    await this.client.connect();
    await this.getSupplierDB();
    await this.client.end();
  }

  async getSupplierDB() {
    const res = await this.client.query("SELECT * FROM supplierQuality");
    res.rows.forEach((supplierData) => {
      this.supplierDataArray.push(supplierData);
      //   console.log(supplierData);
    });
  }
}

// const app = new SupplierDataPackDB();
// app.loadSupplierDB();

import { QualityProduct } from "./QualityProduct";

export class DateConverter {
  productArrayDate: QualityProduct[] = [];
  todaysDate = new Date("2024-06-10");

  async expChange(productData: QualityProduct[]) {
    for (let j = 0; j < productData.length; j++) {
      const date = productData[j].Expiry_Date.getDate();
      const month = productData[j].Expiry_Date.getMonth();
      const category = productData[j].Category;
      const quality = productData[j].Quality;

      if (quality === "Ok") {
        if (category === "Dairy") productData[j].Expiry_Date.setDate(date - 2);

        if (category === "Vegetables")
          productData[j].Expiry_Date.setDate(date - 1);

        if (category === "Canned Goods")
          productData[j].Expiry_Date.setMonth(month - 1);
      }

      this.productArrayDate.push(productData[j]);
    }
  }
}

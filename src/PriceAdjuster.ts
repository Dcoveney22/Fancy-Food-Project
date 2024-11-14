import { QualityProduct } from "./QualityProduct";
import { PricingFunction } from "./PricingFunction";

let priceReducer = new PricingFunction();

export class PriceAdjuster {
  finalArray: QualityProduct[] = [];

  todaysDate = new Date("2024-06-10");

  async priceChanger(productData: QualityProduct[]) {
    for (let x = 0; x < productData.length; x++) {
      const expDate = productData[x].Expiry_Date;
      const category = productData[x].Category;
      const oneDay = 24 * 60 * 60 * 1000;
      const moreEqualToday = expDate.getTime() >= this.todaysDate.getTime();

      if (expDate.getTime() < this.todaysDate.getTime()) {
        priceReducer.productReduce(productData[x], 0);
        this.finalArray.push(productData[x]);
      }

      if (category === "Dairy") {
        if (
          expDate.getTime() <= this.todaysDate.getTime() + 4 * oneDay &&
          moreEqualToday
        ) {
          priceReducer.productReduce(productData[x], 0.5);
          this.finalArray.push(productData[x]);
        }
      }

      if (category === "Canned Goods") {
        if (
          expDate.getTime() <= this.todaysDate.getTime() + 90 * oneDay &&
          moreEqualToday
        ) {
          priceReducer.productReduce(productData[x], 0.25);
          this.finalArray.push(productData[x]);
        }
      }

      if (category === "Vegetables") {
        if (
          expDate.getTime() <= this.todaysDate.getTime() + 3 * oneDay &&
          moreEqualToday
        ) {
          priceReducer.productReduce(productData[x], 0.4);
          this.finalArray.push(productData[x]);
        }
      }
    }
  }
}

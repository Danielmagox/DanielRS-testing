import fs from "fs";

export class ShoppingPriceFileReader {
  constructor(shoppingListPath) {
    this.shoppingListPath = shoppingListPath;
  }

  read() {
    let matrix = [];
    const sentencesFile = fs.readFileSync(this.shoppingListPath, "utf-8");
    const sentences = sentencesFile.trim().split("\n");
    sentences.forEach(function (element) {
      matrix.push(element.trim().split(","));
    });
    return matrix;
  }
}

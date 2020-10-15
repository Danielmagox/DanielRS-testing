import fs from "fs";

export class ShoppingPriceFileWritter {
  constructor(outputPath) {
    this.outputPath = outputPath;
  }

  write(amount) {
    fs.writeFileSync(this.outputPath, amount);
  }
}

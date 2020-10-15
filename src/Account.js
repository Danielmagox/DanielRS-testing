export class Account {
  constructor(shoppingPriceFileReader, shoppingPriceFileWritter) {
    this.shoppingPriceFileReader = shoppingPriceFileReader;
    this.shoppingPriceFileWritter = shoppingPriceFileWritter;
  }

  calculate() {
    const prices = this.shoppingPriceFileReader.read();
    let amount = 0;
    prices.forEach(function (element) {
      amount += parseInt(element[2]) * parseInt(element[1]);
    });
    this.shoppingPriceFileWritter.write(amount.toString());
    return amount;
  }

  getAmount() {
    return this.calculate();
  }
}

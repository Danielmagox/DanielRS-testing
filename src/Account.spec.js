import { Account } from "./Account";
import { ShoppingPriceFileReader } from "./io-utils/ShoppingPriceFileReader";
import { ShoppingPriceFileWritter } from "./io-utils/ShoppingPriceFileWritter";

describe("Account", () => {
  it("check account right", () => {
    const INPUTPATH = "./examples/input.txt";
    const OUTPUTPATH = "./examples/output.txt";
    const shoppingPriceFileReader = new ShoppingPriceFileReader(INPUTPATH);
    const shoppingPriceFileWritter = new ShoppingPriceFileWritter(OUTPUTPATH);
    const account = new Account(
      shoppingPriceFileReader,
      shoppingPriceFileWritter,
    );
    expect(account.getAmount()).toEqual(329);
  });
});

import { ShoppingPriceFileReader } from "./io-utils/ShoppingPriceFileReader";
import { ShoppingPriceFileWritter } from "./io-utils/ShoppingPriceFileWritter";
import { Account } from "./Account";
const INPUTPATH = "./examples/input.txt";
const OUTPUTPATH = "./examples/output.txt";
const shoppingPriceFileReader = new ShoppingPriceFileReader(INPUTPATH);
const shoppingPriceFileWritter = new ShoppingPriceFileWritter(OUTPUTPATH);
const account = new Account(shoppingPriceFileReader, shoppingPriceFileWritter);
account.calculate();

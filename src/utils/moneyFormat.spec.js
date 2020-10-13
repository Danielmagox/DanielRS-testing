const moneyFormat = require("./moneyFormat");

const value1 = moneyFormat(19.99); //$19.99
assertEquals(value1,"$19.99")

const value2 = moneyFormat(250); // $250.00
assertEquals(value2,"$250.00")

const value3 = moneyFormat(9500.95); //$9,500.95
assertEquals(value3,"$9,500.95")

function assertEquals(result, expectedResult) {
    if(result != expectedResult){
        throw new Error(
            `This test is failing: Expected "${expectedResult}", got "${result}"`
        )
    }
}
console.log("All ok");

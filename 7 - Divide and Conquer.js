"use strict";

// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// Test Cases:
// describe("Divide and Conquer", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(divCon([9, 3, "7", "3"]), 2);
//     assert.strictEqual(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 14);
//     assert.strictEqual(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 13);
//   });
// });

function divCon(x) {
  // get sum of all intergers
  const sumInt = x
    .filter((int) => typeof int === "number")
    .reduce((sum, int) => sum + int, 0);

  // get sum of string intergers
  const sumStrInt = x
    .filter((int) => typeof int === "string")
    .reduce((sum, int) => Number(sum) + Number(int), 0);

  // remove strIntergers from Intergers

  return sumInt - sumStrInt;
}

console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));

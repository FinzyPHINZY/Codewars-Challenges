"use strict";

// DESCRIPTION:
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------

// Test Cases:
// describe("Char Code Calculation", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(calc("abcdef"), 6);
//     assert.strictEqual(calc("ifkhchlhfd"), 6);
//     assert.strictEqual(calc("aaaaaddddr"), 30);
//     assert.strictEqual(calc("jfmgklf8hglbe"), 6);
//     assert.strictEqual(
//       calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
//       96
//     );
//   });
// });

function calc(x) {
  const total1 = x
    .split("")
    .map((char) => char.charCodeAt(0))
    .join("");

  let total2 = total1.replace(/7/g, "1");

  const sumTotal1 = total1
    .split("")
    .reduce((sum, num) => sum + parseInt(num), 0);
  const sumTotal2 = total2
    .split("")
    .reduce((sum, num) => sum + parseInt(num), 0);

  return sumTotal1 - sumTotal2;
}

console.log(calc("ABC"));
console.log(calc("abcdef"));
console.log(calc("ifkhchlhfd"));
console.log(calc("aaaaaddddr"));
console.log(calc("jfmgklf8hglbe"));
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));

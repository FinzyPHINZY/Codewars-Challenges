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

function calc(x) {}

console.log(calc("abcdef"));
console.log(calc("ifkhchlhfd"));
console.log(calc("aaaaaddddr"));
console.log(calc("jfmgklf8hglbe"));
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));

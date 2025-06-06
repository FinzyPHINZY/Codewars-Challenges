"use strict";

// DESCRIPTION:
// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

// Test Cases:
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(toBinary(1), 1);
//     assert.strictEqual(toBinary(2), 10);
//     assert.strictEqual(toBinary(3), 11);
//     assert.strictEqual(toBinary(5), 101);
//   });
// });

function toBinary(n) {
  //   let binary = "";

  //   while (n > 0) {
  //     let remainder = n % 2;
  //     binary = remainder + binary;
  //     n = Math.floor(n / 2);
  //   }
  //   return Number(binary);

  return n.toString(2);
}

console.log(toBinary(1));
console.log(toBinary(2));
console.log(toBinary(3));
console.log(toBinary(5));

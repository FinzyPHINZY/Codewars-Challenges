"use strict";

// DESCRIPTION:
// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Test Cases:
// describe("Silly addition", () => {
//   it("Real addition", () => {
//     assert.strictEqual(add(2, 11), 13);
//     assert.strictEqual(add(0, 1), 1);
//     assert.strictEqual(add(0, 0), 0);
//   });

//   it("Silly addition", () => {
//     assert.strictEqual(add(16, 18), 214);
//     assert.strictEqual(add(26, 39), 515);
//     assert.strictEqual(add(122, 81), 1103);
//   });

//   it("Big addition", () => {
//     assert.strictEqual(add(1222, 30277), 31499);
//     assert.strictEqual(add(1236, 30977), 31111013);
//     assert.strictEqual(add(38810, 1383), 391193);
//     assert.strictEqual(add(49999, 49999), 818181818);
//   });
// });

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 11));
console.log(add(0, 1));
console.log(add(0, 0));
console.log(add(16, 18));
console.log(add(26, 39));
console.log(add(122, 81));
console.log(add(1222, 30277));
console.log(add(1236, 30977));
console.log(add(38810, 1383));
console.log(add(49999, 49999));

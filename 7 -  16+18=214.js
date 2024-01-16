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
  // Convert numbers to arrays of digits
  const arrA = String(num1).split("").map(Number);
  const arrB = String(num2).split("").map(Number);

  // Ensure the arrays have the same length by padding with zeros
  const maxLength = Math.max(arrA.length, arrB.length);
  const paddedArrA = Array(maxLength - arrA.length)
    .fill(0)
    .concat(arrA);
  const paddedArrB = Array(maxLength - arrB.length)
    .fill(0)
    .concat(arrB);

  // Perform silly addition
  const result = paddedArrA.map((digitA, index) => digitA + paddedArrB[index]);

  // Convert the result array back to a number
  const finalResult = parseInt(result.join(""));

  return finalResult;
}

console.log(add(2, 11));
console.log(add(0, 1));
console.log(add(0, 0));
console.log(add(16, 18));
console.log(add(26, 39));
console.log(add(122, 81));
// console.log(add(1222, 30277));
// console.log(add(1236, 30977));
// console.log(add(38810, 1383));
// console.log(add(49999, 49999));

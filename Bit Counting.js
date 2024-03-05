"use strict";

// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(countBits(0), 0);
//     assert.strictEqual(countBits(4), 1);
//     assert.strictEqual(countBits(7), 3);
//     assert.strictEqual(countBits(9), 2);
//     assert.strictEqual(countBits(10), 2);
//   });
// });

var countBits = function (n) {
  // Program Me
  // Convert the integer to its binary representation
  let count = 0;
  n = n.toString(2);
  for (let i = 0; i < n.length; i++) {
    if (n[i] == 1) {
      count++;
    }
  }
  return count;
};

countBits = (n) => n.toString(2).split("0").join("").length;

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
console.log(countBits(1234));

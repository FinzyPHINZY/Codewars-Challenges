"use strict";

// DESCRIPTION:
// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

// Test Cases:
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(validateCode(123), true);
//     assert.strictEqual(validateCode(248), true);
//     assert.strictEqual(validateCode(8), false);
//     assert.strictEqual(validateCode(321), true);
//     assert.strictEqual(validateCode(9453), false);  })

// })

function validateCode(code) {
  //your code here
  const regex = /^[1-3]/;
  return regex.test(code);
}

console.log(validateCode(123));
console.log(validateCode(248));
console.log(validateCode(8));
console.log(validateCode(321));
console.log(validateCode(9453));

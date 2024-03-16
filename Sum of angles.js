"use strict";

// DESCRIPTION:
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// Test Cases:

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(angle(3), 180);
//     assert.strictEqual(angle(4), 360);
//   });
// });

function angle(n) {
  //code here
  return (n - 2) * 180;
}

console.log(angle(3));
console.log(angle(4));

"use strict";

// DESCRIPTION:
// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0

// Test Cases:

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(triangular(2), 3);
//     assert.strictEqual(triangular(4), 10);
//     assert.strictEqual(triangular(-454), 0);
//   });
// });

// Return the nth triangular number
function triangular(n) {
  return n <= 0 ? 0 : (n * (n + 1)) / 2;
}

console.log(triangular(2));
console.log(triangular(4));
console.log(triangular(-454));

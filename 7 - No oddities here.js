"use strict";

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// Test Cases
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(noOdds([0, 1]), [0]);
//     assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2]);
//   });
// });

function noOdds(values) {
  // Return all non-odd values
  for (const num of values) {
    if (num % 2 == 0) console.log(num);
  }
}

console.log(noOdds([0, 1, 2, 3]));

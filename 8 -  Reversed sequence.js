"use strict";

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
// Test Cases:

// describe("reverseSeq", function () {
//   it("Sample Test", function () {
//     assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
//   });
// });

const reverseSeq = (n) => {
  let result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
};

console.log(reverseSeq(5));

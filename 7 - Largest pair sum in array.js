"use strict";

// DESCRIPTION:
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// Test Cases
// it("Basic tests", () => {
//   doTest([10, 14, 2, 23, 19], 42);
//   doTest([-100, -29, -24, -19, 19], 0);
//   doTest([1, 2, 3, 4, 6, -1, 2], 10);
//   doTest([-10, -8, -16, -18, -19], -18);
// });

function largestPairSum(numbers) {
  //TODO: Write your Code here
  numbers = numbers.sort((a, b) => {
    return a - b;
  });
  return numbers[numbers.length - 1] + numbers[numbers.length - 2];
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([-100, -29, -24, -19, 19]));
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]));
console.log(largestPairSum([-10, -8, -16, -18, -19]));

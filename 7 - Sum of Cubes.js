"use strict";

// DESCRIPTION:
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
// Test Cases:

// describe("Sum of Cubes", () => {
//     it("Fixed tests", () => {
//       _.shuffle( [
//         [1, 1], [2, 9], [3, 36], [4, 100],
//         [10, 3025], [123, 58155876]
//       ] ).forEach(([n,exp]) => assert.strictEqual(sumCubes(n), exp))
//     });
//   });

function sumCubes(n) {
  // ...
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i ** 3;
  }
  return total;
}

console.log(sumCubes(2));

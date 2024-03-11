"use strict";

// DESCRIPTION:
// This is a question from codingbat

// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
// n<=1000.

// Test Cases:
// describe("SolutionTest", function(){
//     it("Basic tests", function(){
//         Test.assertDeepEquals(squareUp(4), [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]);
//         Test.assertDeepEquals(squareUp(9), [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5, 4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
//         Test.assertDeepEquals(squareUp(1), [1]);
//     });
// });

function squareUp(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    let row = Array(n).fill(0); // Create a row filled with zeros
    for (let j = 1; j <= i; j++) {
      row[n - j] = j; // Set the last j elements of the row to the values 1, 2, ..., j
    }
    result = result.concat(row);
  }

  return result;
}

console.log(squareUp(4));
// console.log(squareUp(9));
console.log(squareUp(1));

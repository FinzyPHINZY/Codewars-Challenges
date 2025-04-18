"use strict";

// DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(multiplicationTable(3), [
//       [1, 2, 3],
//       [2, 4, 6],
//       [3, 6, 9],
//     ]);
//   });
// });

const multiplicationTable = function (size) {
  // insert code here
  let result = [];

  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    result.push(row);
  }

  return result;
};

console.log(multiplicationTable(3));

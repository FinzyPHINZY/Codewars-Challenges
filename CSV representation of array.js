"use strict";

// DESCRIPTION:
// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]]

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// Test Cases:
// describe("Sample tests", () => {
//   it("Basic tests", () => {
//     assert.strictEqual(
//       toCsvText([
//         [0, 1, 2, 3, 45],
//         [10, 11, 12, 13, 14],
//         [20, 21, 22, 23, 24],
//         [30, 31, 32, 33, 34],
//       ]),
//       "0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34"
//     );

//     assert.strictEqual(
//       toCsvText([
//         [-25, 21, 2, -33, 48],
//         [30, 31, -32, 33, -34],
//       ]),
//       "-25,21,2,-33,48\n30,31,-32,33,-34"
//     );

//     assert.strictEqual(
//       toCsvText([
//         [5, 55, 5, 5, 55],
//         [6, 6, 66, 23, 24],
//         [666, 31, 66, 33, 7],
//       ]),
//       "5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7"
//     );
//   });
// });

function toCsvText(array) {
  // good luck
  return array.map((row) => row.join(",")).join("\n");
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
// console.log(
//   toCsvText([
//     [-25, 21, 2, -33, 48],
//     [30, 31, -32, 33, -34],
//   ])
// );
// console.log(
//   toCsvText([
//     [5, 55, 5, 5, 55],
//     [6, 6, 66, 23, 24],
//     [666, 31, 66, 33, 7],
//   ])
// );

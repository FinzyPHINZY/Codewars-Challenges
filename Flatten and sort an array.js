"use strict";

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

//Test Cases

// describe("Example test cases", function() {
//     it("Should pass example tests", function() {
//       assert.deepEqual(flattenAndSort([]), []);
//       assert.deepEqual(flattenAndSort([[], []]), []);
//       assert.deepEqual(flattenAndSort([[], [1]]), [1]);
//       assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//       assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
//     });
//   });

// PREP

function flattenAndSort(array) {
  // Good luck, brave code warrior!

  //   create result array to bind all output
  const result = [];
  // Loop through all array parameters

  for (let i = 0; i < array.length; i++) {
    // loop through internal array
    for (let j = 0; j < array[i].length; j++) {
      result.push(array[i][j]);
    }
  }

  return result.sort();
}

console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
);

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); // [1, 2, 3, 4, 5, 6, 100]

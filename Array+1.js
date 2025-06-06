"use strict";

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

// Test Cases:
// describe("Tests", () => {
//     it("test", () => {
//       assert.sameOrderedMembers(upArray([4,3,2,5]), [4,3,2,6]);
//       assert.sameOrderedMembers(upArray([2,3,9,9]), [2,4,0,0]);
//       assert.sameOrderedMembers(upArray(    [9,9]),   [1,0,0]);
//       assert.sameOrderedMembers(upArray(    [0,7]),     [0,8]);
//       assert.sameOrderedMembers(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]);

//       assert.isNull(upArray([1,-9]));
//       assert.isNull(upArray([1,10]));
//     });
//   });

function upArray(arr) {
  // ...
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    arr.some((num) => typeof num !== "number" || num < 0 || num > 9)
  ) {
    return null;
  }

  arr[arr.length - 1] += 1;

  for (let i = arr.length - 1; i > 0; i--) {
    console.log(arr[i]);
    if (arr[i] === 10) {
      arr[i] = 0;
      arr[i - 1] += 1;
    }
  }

  if (arr[0] === 10) {
    arr[0] = 0;
    arr.unshift(1);
  }
  console.log(arr);
}

// console.log(upArray([4, 3, 2, 5]));
console.log(upArray([2, 3, 9, 9]));
// console.log(upArray([9, 9]));
// console.log(upArray([0, 7]));
// console.log(
//   upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// );
// console.log(upArray([1, -9]));
// console.log(upArray([1, 2, 33]));

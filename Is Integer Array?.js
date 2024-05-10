"use strict";

// Write a function with the signature shown below:
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

function isIntArray(arr) {
  if (!arr) return false;
  return arr.every((value) => Number.isInteger(value));
}

console.log(isIntArray([])); ///, true, "Input: []");
console.log(isIntArray([1, 2, 3, 4])); //, true, "Input: [1, 2, 3, 4]");
console.log(isIntArray([1, 2, 3, NaN])); //, false, "Input: [1, 2, 3, NaN]");
console.log(isIntArray([null]));
console.log(isIntArray([1.0, 2.0, 3.0001]));
console.log(isIntArray(["-1"]));
console.log(isIntArray([1.23e-7, 2]));
console.log(isIntArray([1.2, 1.8, 3]));

// Finally Got it, we need to check null, undefined and if input is array to get test case 9 right.
// Input: [null] - Expected: false, instead got: true
// Input: [1.0, 2.0, 3.0001] - Expected: false, instead got: true
// Input: ['-1'] - Expected: false, instead got: true
// Input: [1.23e-7, 2] - Expected: false, instead got: true
// Input: [1.2, 1.8, 3] - Expected: false, instead got: true

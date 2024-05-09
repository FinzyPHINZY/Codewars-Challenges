"use strict";

// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0;
  }
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (!arrayOfArrays[i] || arrayOfArrays[i].length === 0) {
      return 0;
    }
  }
  arrayOfArrays.forEach((arr) => {
    if (!arr) {
      return null;
    }
  });

  arrayOfArrays = arrayOfArrays.sort((a, b) => a.length - b.length);

  let arraysLength = arrayOfArrays.map((arr) => arr.length);
  //   return arraysLength;

  const nums = [];

  for (let i = arraysLength[0]; i <= Math.max(...arraysLength); i++) {
    nums.push(i);
  }

  return Number(nums.filter((num) => !arraysLength.includes(num)).join(""));
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //, 3);
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //, 2);
console.log(getLengthOfMissingArray([[null], [null, null, null]])); //, 2);
console.log(
  getLengthOfMissingArray([
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a", "a"],
    ["a"],
    ["a", "a", "a", "a", "a", "a"],
  ])
); //, 5);
console.log(getLengthOfMissingArray([])); //, 0);
console.log(
  getLengthOfMissingArray([[], [4], [0, 3], [4, 3, 0, 0], [3, 3, 0, 2, 2]])
);

//Prep

// P: I NEED TO LOOP THROUGH THE ARGUEMENT AND RETURN NULL IF ANY ARRAY IN THE ARGUEMENT  IS EMPTY OR [] IS NULL.

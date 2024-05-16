"use strict";

// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

function deepCount(a) {
  //...
  let count = 0;

  for (const char of a) {
    count++;
    if (Array.isArray(char)) {
      count += deepCount(char);
    }
  }
  return count;
}

console.log(deepCount([])); //, 0, "Expected 0");
console.log(deepCount([1, 2, 3])); //, 3, "Expected 3");
console.log(deepCount(["x", "y", ["z"]])); //, 4, "Expected 4");
console.log(deepCount([1, 2, [3, 4, [5]]])); //, 7, "Expected 7");
console.log(deepCount([[[[[[[[[]]]]]]]]])); //, 8, "Expected 8");

// Prep
// P: takes in an array including nested arrays sometimes
// R: returns the count of the elements in an array. including any nested arrays
// E: [1, 2, [3, 4, [5]]]  -->  7
// P: Loop through input array
// count at the start of each loop. if element is an array, recursively loop the item.

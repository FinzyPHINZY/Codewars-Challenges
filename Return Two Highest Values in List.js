"use strict";

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
  let output = [];

  arr = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      output.push(arr[i]);
    }
  }

  return output.filter((num, i) => i < 2);
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}

console.log(twoHighest([])); //, [])
console.log(twoHighest([15])); //, [15])
console.log(twoHighest([15, 20, 20, 17])); //, [20, 17])
console.log(
  twoHighest([
    67512, 3074, 12811, 12239, 25921, 21664, 19780, 95875, 71359, 85466, 36894,
    11177, 13197, 95875, 75104, 71915, 7095, 25945, 8608, 88147, 60532, 29569,
  ])
); //: expected [ 95875, 95875 ] to deeply equal [ 95875, 88147 ]

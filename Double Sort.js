"use strict";

// DESCRIPTION:
// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

// Test Caes:
// describe("Example tests", function(){
//     it("Tests", function(){
//         assert.deepEqual(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
//         assert.deepEqual(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
//         assert.deepEqual(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
//         assert.deepEqual(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
//         assert.deepEqual(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]);
//         assert.deepEqual(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] )
//     });
//   });

function dbSort(a) {
  // Code here
  const checkNum = a.every((char) => typeof char === "number");
  const checkStr = a.every((char) => typeof char === "string");
  if (checkNum) return a.sort((a, b) => a - b);
  else if (checkStr) return a.sort();
  else {
    const nums = a
      .filter((char) => typeof char === "number")
      .sort((a, b) => a - b);
    const strings = a.filter((char) => typeof char === "string").sort();
    return nums.concat(strings);
  }
}

console.log(dbSort([6, 2, 3, 4, 5]));
console.log(dbSort([14, 32, 3, 5, 5]));
console.log(dbSort([1, 2, 3, 4, 5]));
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));
console.log(dbSort(["Banana", "Orange", "Apple", "Mango"]));
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]));
console.log(
  dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"])
);

// PREP
// P: Takes in an array containing letters or numbers or both
// R: returns a sorter array. if (array includes only letters) returns them in alphabetical order else if(array includes only numbers) returns them in ascending order else if(array includes both numbers and letters) returns both in ascending and alphabetical order
// E: ["C", "W", "W", "W", 1, 2, 0]) to return [0,1,2,"C","W","W","W"]
// P: check if array contains only letters or numbers or both.

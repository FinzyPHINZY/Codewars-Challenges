"use strict";

// DESCRIPTION:
// Task
// Create a function that takes a list of integers and a group length as parameters. Your task is to determine if it's possible to split all the numbers from the list into groups of the specified length, while ensuring that consecutive numbers are present within each group.

// Input
// lst / arr: A list / array of integers representing the numbers to be divided into groups.

// group_len / groupLen: An integer indicating the desired length of each group.

// Output
// The function should return True if it's possible to create groups according to the criteria, and False otherwise.

// Examples
// consecutiveNums([1, 3, 5], 1) ➞ true
// // It is always possible to create groups of length 1.

// consecutiveNums([5, 6, 3, 4], 2) ➞ true
// // Two groups of length 2: [3, 4], [5, 6]

// consecutiveNums([1, 3, 4, 5], 2) ➞ false
// // It is possible to make one group of length 2, but not a second one.

// consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) ➞ true
// // [1, 2, 3], [2, 3, 4], [6, 7, 8]

// consecutiveNums([1, 2, 3, 4, 5], 4) ➞ false
// // The list length is not divisible by the group’s length.
// Input Constraints
// 3 <= arr.length <= 10^4
// 1 <= groupLen <= 10

// Test Cases:
// describe("Fixed Tests", function() {
//     it("Simple Cases", function() {
//       assert.strictEqual(consecutiveNums([1, 3, 5], 1), true);
//       assert.strictEqual(consecutiveNums([1, 2, 3, 3, 3, 3], 3), false);
//       assert.strictEqual(consecutiveNums([5, 6, 3, 4], 2), true);
//       assert.strictEqual(consecutiveNums([1, 3, 4, 5], 2), false);
//       assert.strictEqual(consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3), true);
//       assert.strictEqual(consecutiveNums([1, 2, 3, 4, 5], 4), false);
//       assert.strictEqual(consecutiveNums([6, 6, 6, 9, 7, 8, 7, 5, 8, 5, 7, 8], 4), true);
//       assert.strictEqual(consecutiveNums([3, 9, 2, 2, 7, 6, 5, 8, 5, 2, 7, 4, 5, 3, 4, 4, 6, 2, 3, 4], 4), false);
//       assert.strictEqual(consecutiveNums([3, 4, 1, 2, 3, 2, 3, 4, 5], 3), true);
//       assert.strictEqual(consecutiveNums([9, 9, 7, 3, 3, 1, 1, 1, 2, 8, 8, 7, 2, 2, 3], 3), true);
//       assert.strictEqual(consecutiveNums([5, 5, 7, 3, 3, 1, 1, 1, 2, 6, 6, 7, 2, 2, 3], 3), true);
//     });
//   });

function consecutiveNums(arr, groupLen) {
  if (arr.length % groupLen !== 0) return false;
  if (groupLen === 1) return true;
  const sortedArr = arr.sort((a, b) => a - b);
  const elObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!elObj[arr[i]]) elObj[arr[i]] = 0;
    elObj[arr[i]]++;
  }

  for (let i = 0; i < sortedArr.length; i++) {
    const currArr = [];
    const currNumber = sortedArr[i];
    if (!elObj[currNumber]) continue;
    else {
      currArr.push(currNumber);
      elObj[currNumber]--;
    }

    while (currArr.length !== groupLen) {
      const nextNumber = currArr[currArr.length - 1] + 1;
      if (elObj[nextNumber]) {
        currArr.push(nextNumber);
        elObj[nextNumber]--;
      } else return false;
    }
  }

  return true;
}
function isConsecutive(group) {
  for (let i = 1; i < group.length; i++) {
    if (group[i] !== group[i - 1] + 1) {
      return false;
    }
  }
  return true;
}

console.log(consecutiveNums([1, 3, 5], 1));
console.log(consecutiveNums([1, 2, 3, 3, 3, 3], 3));
console.log(consecutiveNums([5, 6, 3, 4], 2));
console.log(consecutiveNums([1, 3, 4, 5], 2));
console.log(consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
console.log(consecutiveNums([1, 2, 3, 4, 5], 4));

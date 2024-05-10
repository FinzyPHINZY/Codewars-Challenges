"use strict";

// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1
// sum of 3 consecutives 4 is 12
// sum of 0... and sum of 2
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

function sumConsecutives(s) {
  const sumArr = [];
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      sum += s[i];
    } else {
      sumArr.push(sum);
      sum = s[i];
    }
  }

  sumArr.push(sum);

  return sumArr.slice(1);
}

("use strict");

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])); // [1,12,0,4,6,1]
console.log(sumConsecutives([1, 1, 7, 7, 3])); // [2,14,3]
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0])); // [-10,14,12,0]
console.log(sumConsecutives([3, 3, 3, 3, 1])); // [12, 1]

// Uses reduce() to iterate over the array s.
// Checks if the current number is the same as the previous one.
// If it is, it adds the current number to the last element of the accumulated array.
// If not, it simply concatenates the current number to the accumulated array.
// Returns the resulting array.

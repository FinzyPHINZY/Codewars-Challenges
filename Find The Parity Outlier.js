"use strict";

// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// Test cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(findOutlier([0, 1, 2]), 1);
//     Test.assertEquals(findOutlier([1, 2, 3]), 2);
//     Test.assertEquals(findOutlier([2, 6, 8, 10, 3]), 3);
//     Test.assertEquals(findOutlier([0, 0, 3, 0, 0]), 3);
//     Test.assertEquals(findOutlier([1, 1, 0, 1, 1]), 0);
//   });
// });

function findOutlier(integers) {
  //your code here
  //   let oddCount = [];
  //   let evenCount = [];
  //   integers.forEach((num) => {
  //     num % 2 === 0 ? evenCount.push(num) : oddCount.push(num);
  //   });

  //   return evenCount.length === 1 ? evenCount[0] : oddCount[0];

  let oddCount = integers.filter((num) => num % 2 !== 0);
  let evenCount = integers.filter((num) => num % 2 === 0);

  return evenCount.length === 1 ? evenCount[0] : oddCount[0];
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));

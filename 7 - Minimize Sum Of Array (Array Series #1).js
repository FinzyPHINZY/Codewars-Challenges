"use strict";

// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

// Test Cases":
// describe("Basic Tests", function () {
//   it("should return the minimum sum", function () {
//     Test.assertEquals(minSum([5, 4, 2, 3]), 22);
//     Test.assertEquals(minSum([12, 6, 10, 26, 3, 24]), 342);
//     Test.assertEquals(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);
//   });
// });

function minSum(arr) {
  // your code here
  arr = arr.sort((a, b) => a - b);
  const minArr = arr.slice(0, arr.length / 2);
  const maxArr = arr.slice(arr.length / 2).reverse();

  const productArr = [];
  for (let i = 0; i < minArr.length; i++) {
    productArr.push(minArr[i] * maxArr[i]);
  }

  return productArr.reduce((acc, arr) => {
    return acc + arr;
  }, 0);
}

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([12, 6, 10, 26, 3, 24]));
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));

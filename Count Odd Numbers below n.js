"use strict";

// DESCRIPTION:
// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// Test Cases;
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//      assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
//      assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");
//    });
//  });

function oddCount(n) {
  // your code here
  let count = 0;
  for (let i = n; i > 1; i--) {
    if (i % 2 !== 0) count++;
  }
  return count;
}

// Faster solution:
function oddCount(n) {
  return Math.floor(n / 2);
}

console.log(oddCount(15));
console.log(oddCount(15023));
console.log(oddCount(7227359842447705)); //3613679921223852
console.log(oddCount(2225355834232568)); //1112677917116284

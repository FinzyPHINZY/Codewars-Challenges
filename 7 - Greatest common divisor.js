"use strict";

// DESCRIPTION:
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test Cases:
// scribe("Example tests", () => {
//   it("Example tests", () => {
//     assert.strictEqual(mygcd(30, 12), 6);
//     assert.strictEqual(mygcd(36, 12), 12);
//     assert.strictEqual(mygcd(8, 9), 1);
//     assert.strictEqual(mygcd(1, 1), 1);
//   });
// });

function mygcd(x, y) {
  //your code here
  const highestInt = Math.max(x, y);
  const numArray = [];
  for (let i = 0; i <= highestInt; i++) {
    numArray.push(i);
  }
  return Math.max(...numArray.filter((num) => x % num === 0 && y % num === 0));
}

console.log(mygcd(2672, 5678));
console.log(mygcd(30, 12));
console.log(mygcd(36, 12));
console.log(mygcd(8, 9));
console.log(mygcd(1, 1));

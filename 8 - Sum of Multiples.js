"use strict";

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// TEST CASES:
// describe("Tests", () => {
//   it("should test", () => {
//     assert.strictEqual(sumMul(0, 0), "INVALID");
//     assert.strictEqual(sumMul(2, 9), 20);
//     assert.strictEqual(sumMul(4, -7), "INVALID");
//   });
// });

function sumMul(n, m) {
  //your idea here

  if (n < 1 || m < 1) return "INVALID";
  let array = [];

  for (let i = 1; i < m; i++) {
    array.push(n * i);
  }

  return array.filter((num) => num < m).reduce((sum, num) => sum + num, 0);
}

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(4, -7));

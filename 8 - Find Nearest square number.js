"use strict";

// DESCRIPTION:
// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

// Test Cases:
// describe("Find Nearest square number", () => {
//   it("Sample tests", () => {
//     assert.strictEqual(nearestSq(1), 1, "nearestSq(1) = 1");
//     assert.strictEqual(nearestSq(2), 1, "nearestSq(2) = 1");
//     assert.strictEqual(nearestSq(10), 9, "nearestSq(10) = 9");
//     assert.strictEqual(nearestSq(111), 121, "nearestSq(111) = 121");
//     assert.strictEqual(nearestSq(9999), 10000, "nearestSq(9999) = 10000");
//   });
// });

function nearestSq(n) {
  // your code
  const sqN = Math.sqrt(n);

  const ceilSqrt = Math.ceil(sqN);
  const floorSqrt = Math.floor(sqN);

  const ceilSq = ceilSqrt * ceilSqrt;
  const floorSq = floorSqrt * floorSqrt;

  return Math.abs(n - floorSq) < Math.abs(n - ceilSq) ? floorSq : ceilSq;
}

console.log(nearestSq(1));
console.log(nearestSq(2));
console.log(nearestSq(10));
console.log(nearestSq(111));
console.log(nearestSq(9999));

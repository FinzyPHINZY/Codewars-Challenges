"use strict";

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// Test Cases

// describe("Basic Tests", function () {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(cockroachSpeed(1.08), 30);
//     assert.strictEqual(cockroachSpeed(1.09), 30);
//     assert.strictEqual(cockroachSpeed(0), 0);
//   });
// });

// k/h = 27.777778 cm/s

function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor((100000 * s) / 3600);
}

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
console.log(cockroachSpeed(0));

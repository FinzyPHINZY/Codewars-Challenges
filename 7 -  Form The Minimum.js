"use strict";

// DESCRIPTION:
// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

// Test Cases:

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(minValue([1, 3, 1]), 13);
//     assert.strictEqual(minValue([4, 7, 5, 7]), 457);
//     assert.strictEqual(minValue([4, 8, 1, 4]), 148);
//     assert.strictEqual(minValue([5, 7, 9, 5, 7]), 579);
//     assert.strictEqual(minValue([6, 7, 8, 7, 6, 6]), 678);
//     assert.strictEqual(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
//     assert.strictEqual(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
//     assert.strictEqual(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
//     assert.strictEqual(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
//   });
// });

function minValue(values) {
  //your code here
  let output = new Set(values.sort());
  return Number([...output].join(""));
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([4, 8, 1, 4]));
console.log(minValue([5, 7, 9, 5, 7]));
console.log(minValue([6, 7, 8, 7, 6, 6]));
console.log(minValue([5, 6, 9, 9, 7, 6, 4]));
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

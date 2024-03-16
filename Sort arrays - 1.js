"use strict";

// DESCRIPTION:
// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// Test Cases:

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(sortme(["one", "two", "three"]), ["one", "three", "two"]);
//   });
// });

// input: names - unsorted array
// output: sorted array
const sortme = function (names) {
  return names.sort();
};

console.log(sortme(["one", "two", "three"]));

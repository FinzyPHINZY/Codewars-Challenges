"use strict";

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// Test Cases:

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
    Test.assertEquals(cubeOdd([-3, -2, 2, 3]), 0);
    Test.assertEquals(cubeOdd(["a", 12, 9, "z", 42]), undefined);
  });
});

function cubeOdd(arr) {
  // insert code here >.<

  return 0;
}

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([-3, -2, 2, 3]));
console.log(cubeOdd(["a", 12, 9, "z", 42]));

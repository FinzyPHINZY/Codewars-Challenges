"use strict";

// DESCRIPTION:
// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

// Test Cases:

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(sumTriangularNumbers(6), 56);
//     Test.assertEquals(sumTriangularNumbers(34), 7140);
//     Test.assertEquals(sumTriangularNumbers(-291), 0);
//     Test.assertEquals(sumTriangularNumbers(943), 140205240);
//     Test.assertEquals(sumTriangularNumbers(-971), 0);
//   });
// });

function sumTriangularNumbers(n) {
  if (n < 0) return 0;
  // Calculate the nth Triangular Number
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += (i * (i + 1)) / 2;
  }

  return sum;
}

console.log(sumTriangularNumbers(6)); // 56
console.log(sumTriangularNumbers(34)); // 7140
console.log(sumTriangularNumbers(-291)); // 0s
console.log(sumTriangularNumbers(943)); //140205240
console.log(sumTriangularNumbers(-971)); //0

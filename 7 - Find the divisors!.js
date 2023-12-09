"use strict";

// DESCRIPTION:
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// Test Cases:

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertDeepEquals(divisors(15), [3, 5]);
//     Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
//     Test.assertDeepEquals(divisors(13), "13 is prime");
//   });
// });

function divisors(integer) {}

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));

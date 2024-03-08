"use strict";

// DESCRIPTION:
// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// Notes
// Number passed is always Positive .
// Return the result as String
// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 81 + 92 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"
// Explanation:
// Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

// Test Cases:
// describe("Basic tests", () => {
//   Test.assertEquals(disariumNumber(89), "Disarium !!");
//   Test.assertEquals(disariumNumber(564), "Not !!");
//   Test.assertEquals(disariumNumber(1024), "Not !!");
//   Test.assertEquals(disariumNumber(135), "Disarium !!");
//   Test.assertEquals(disariumNumber(136586), "Not !!");
// });

function disariumNumber(n) {
  //your code here
  let powered = n
    .toString()
    .split("")
    .map((num, i) => Math.pow(Number(num), i + 1))
    .reduce((sum, num) => sum + num, 0);

  return n === powered ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89));
console.log(disariumNumber(564));
console.log(disariumNumber(1024));
console.log(disariumNumber(135));
console.log(disariumNumber(136586));

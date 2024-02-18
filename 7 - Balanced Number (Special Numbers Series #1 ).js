"use strict";

// DESCRIPTION:
// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

// Examples
// 7 ==> return "Balanced"
// Explanation:
// middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.
// 295591 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 55
// sum of all digits to the left of the middle digit(s) -> 11
// sum of all digits to the right of the middle digit(s) -> 10
// 11 and 10 are not equal, so it's not balanced.
// 959 ==> return "Balanced"
// Explanation:
// middle digit(s): 5
// sum of all digits to the left of the middle digit(s) -> 9
// sum of all digits to the right of the middle digit(s) -> 9
// 9 and 9 are equal, so it's balanced.
// 27102983 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 02
// sum of all digits to the left of the middle digit(s) -> 10
// sum of all digits to the right of the middle digit(s) -> 20
// 10 and 20 are not equal, so it's not balanced.

// Test Cases:

// describe("Check less than thousand", function () {
//   it("Check balanced number", function () {
//     Test.assertEquals(balancedNum(7), "Balanced");
//     Test.assertEquals(balancedNum(959), "Balanced");
//     Test.assertEquals(balancedNum(13), "Balanced");
//     Test.assertEquals(balancedNum(432), "Not Balanced");
//     Test.assertEquals(balancedNum(424), "Balanced");
//   });
//   it("Check Larger number", function () {
//     Test.assertEquals(balancedNum(1024), "Not Balanced");
//     Test.assertEquals(balancedNum(66545), "Not Balanced");
//     Test.assertEquals(balancedNum(295591), "Not Balanced");
//     Test.assertEquals(balancedNum(1230987), "Not Balanced");
//     Test.assertEquals(balancedNum(56239814), "Balanced");
//   });
// });

function balancedNum(number) {
  number = number.toString();
  let length = number.length;
  if (length < 3) return "Balanced";
  // check if numberlength is even or odd
  if (length % 2 !== 0) {
    // if odd,split num into 2 parts excluding middle num;
    let left = number.slice(0, length / 2);
    let right = number.slice(-length / 2, length);

    left = left
      .split("")
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
    right = right
      .split("")
      .map(Number)
      .reduce((sum, num) => sum + num, 0);

    return left == right ? "Balanced" : "Not Balanced";
  } else {
    // if even, split number into two excluding 2 middle nums;
    let left = number.slice(0, length / 2 - 1);
    let right = number.slice(-length / 2 + 1);

    left = left
      .split("")
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
    right = right
      .split("")
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
    return left == right ? "Balanced" : "Not Balanced";
  }
}

console.log(balancedNum(7));
console.log(balancedNum(959));
console.log(balancedNum(13));
console.log(balancedNum(432));
console.log(balancedNum(424));

console.log(" ".repeat(10));

console.log(balancedNum(1024));
console.log(balancedNum(66545));
console.log(balancedNum(295591));
console.log(balancedNum(1230987));
console.log(balancedNum(56239814));

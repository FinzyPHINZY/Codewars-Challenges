"use strict";

// DESCRIPTION:
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// Test Cases:
// describe("Reverse a Number", () =>{
//     it("Fixed Tests", () => {
//       assert.strictEqual(reverseNumber(123), 321)
//       assert.strictEqual(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
//       assert.strictEqual(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
//       assert.strictEqual(reverseNumber(4321234), 4321234)
//       assert.strictEqual(reverseNumber(5), 5)
//       assert.strictEqual(reverseNumber(0), 0)
//       assert.strictEqual(reverseNumber(98989898), 89898989)
//     });
//   });

function reverseNumber(n) {
  if (n >= 0) {
    return parseInt(n.toString().split("").reverse().join(""));
  } else {
    return -parseInt(
      n
        .toString()
        .split("")
        .filter((num) => typeof num !== "number")
        .reverse()
        .join("")
    );
  }
}

console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(1000));
console.log(reverseNumber(4321234));
console.log(reverseNumber(5));
console.log(reverseNumber(0));
console.log(reverseNumber(98989898));

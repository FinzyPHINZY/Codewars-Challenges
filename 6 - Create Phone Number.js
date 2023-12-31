"use strict";

// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// Test Cases:
// describe("Create Phone Number", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(
//       createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
//       "(123) 456-7890"
//     );
//     assert.strictEqual(
//       createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
//       "(111) 111-1111"
//     );
//     assert.strictEqual(
//       createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
//       "(123) 456-7890"
//     );
//   });
// });

function createPhoneNumber(numbers) {
  let code = numbers.slice(0, 3);
  let numDir = numbers.slice(3, 6);
  let last_4 = numbers.slice(6, 10);
  return `(${code.join("")}) ${numDir.join("")}-${last_4.join("")}`;
}

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  "(123) 456-7890"
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //  "(111) 111-1111"
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  "(123) 456-7890"

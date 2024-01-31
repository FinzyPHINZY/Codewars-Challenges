"use strict";

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

// Test Cases:
// describe("Solution", function () {
//   it("basic tests", function () {
//     var input = "s2324";
//     Test.assertEquals(isDigit(input), false);

//     input = "-234.4";
//     Test.assertEquals(isDigit(input), true);
//   });
// });

function isDigit(s) {
  //your code

  return s == parseFloat(s);
}

console.log(isDigit("  3  "));
console.log(isDigit("-3.23"));
console.log(isDigit("3-4"));

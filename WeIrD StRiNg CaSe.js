"use strict";

// DESCRIPTION:
// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

// Test Cases:
// describe("toWeirdCase", function () {
//   it("should return the correct value for a single word", function () {
//     Test.assertEquals(toWeirdCase("This"), "ThIs");
//     Test.assertEquals(toWeirdCase("is"), "Is");
//   });
//   it("should return the correct value for multiple words", function () {
//     Test.assertEquals(toWeirdCase("This is a test"), "ThIs Is A TeSt");
//   });
// });

function toWeirdCase(string) {
  //TODO
}

console.log(toWeirdCase("This"));
console.log(toWeirdCase("is"));
console.log(toWeirdCase("This is a test"));

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

  // Split the string into individual words
  const words = string.split(" ");

  // Function to toggle case of characters in a word
  function toggleCase(word) {
    return word
      .split("")
      .map((char, index) => {
        // If index is even, convert to uppercase, otherwise convert to lowercase
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      })
      .join("");
  }

  // Apply toggleCase function to each word
  const weirdCaseWords = words.map(toggleCase);

  // Join the modified words back into a single string
  return weirdCaseWords.join(" ");
}

function toWeirdCase(string) {
  return string
    .split(" ")
    .map(function (word) {
      return word
        .split("")
        .map(function (letter, index) {
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}

console.log(toWeirdCase("This"));
console.log(toWeirdCase("is"));
console.log(toWeirdCase("This is a test"));

"use strict";

// DESCRIPTION:
// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

// Test Cases:
// describe("Simple Tests", function () {
//   it("should handle simple tests", function () {
//     Test.assertEquals(firstNonRepeatingLetter("a"), "a");
//     Test.assertEquals(firstNonRepeatingLetter("stress"), "t");
//     Test.assertEquals(firstNonRepeatingLetter("moonmen"), "e");
//   });
// });

function firstNonRepeatingLetter(s) {
  // Add your code here
  // Convert the string to lowercase to handle case-insensitivity
  const lowercaseStr = s.toLowerCase();
  const charCount = {};

  // Count occurrences of each character
  for (let char of lowercaseStr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1 and return its original case
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[lowercaseStr[i]] === 1) {
      return char;
    }
  }

  // Return empty string if all characters are repeating
  return "";
}

function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("moonmen"));

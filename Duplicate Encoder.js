"use strict";

// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Test Cases:

// describe("Duplicate Encoder", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(duplicateEncode("din"),"(((");
//       assert.strictEqual(duplicateEncode("recede"),"()()()");
//       assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
//       assert.strictEqual(duplicateEncode("(( @"),"))((");
//     });
//   });

function duplicateEncode(word) {
  // Convert the word to lowercase to ignore case
  const lowerWord = word.toLowerCase();

  // Create an object to store the count of each character
  const charCount = {};

  // Count the occurrences of each character in the word
  for (const char of lowerWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);

  // Use the count to generate the encoded string
  const result = lowerWord
    .split("")
    .map((char) => (charCount[char] > 1 ? ")" : "("))
    .join("");

  return result;
}

// Examples
console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

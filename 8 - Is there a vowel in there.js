"use strict";

// DESCRIPTION:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// Test cases:
// describe("Basic tests",() =>{
//     Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
//     Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
//     });

function isVow(a) {
  let output = [];
  a.forEach((char) => {
    if (
      char === 97 ||
      char === 101 ||
      char === 105 ||
      char === 111 ||
      char === 117
    ) {
      output.push(String.fromCharCode(char));
    } else {
      output.push(char);
    }
  });

  return output;
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));

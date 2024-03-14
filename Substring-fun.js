"use strict";

// DESCRIPTION:
// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

// Test Cases:
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(nthChar([]), "");
//     assert.strictEqual(nthChar(["yoda", "best", "has"]), "yes");
//   });
// });

function nthChar(words) {
  return words
    .map((word, i) => {
      return word[i];
    })
    .join("");
}

console.log(nthChar([]));
console.log(nthChar(["yoda", "best", "has"]));

// P: Array of strings
// R: A string containing letters from each string in the array bases on its positon in the array
// E: ['yoda', 'best', 'has'] = 'yes'
// P: Create a modifiable named storage(variable) for an empty string; Loop through the array arguement and loop through each word; return a letter form each word based on the word position in the array. If word position is 5, return word[5]

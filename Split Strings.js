"use strict";

// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// Test Cases:

// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });

function solution(str) {
  // Check if the string is empty
  if (str.length === 0) {
    return [];
  }

  // Create an array to store the pairs
  const pairs = [];

  // Loop through the string with a step of 2
  for (let i = 0; i < str.length; i += 2) {
    // Extract two characters and add them to the pairs array
    pairs.push(str.slice(i, i + 2));
  }

  // If the string length is odd, replace the last pair's second character with '_'
  if (str.length % 2 !== 0) {
    pairs[pairs.length - 1] += "_";
  }

  return pairs;
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""));

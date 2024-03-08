"use strict";

// DESCRIPTION:
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// Test Cases:
// describe("Sort by Last Char", () => {
//     it("Testing for fixed tests", () => {
//       assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
//       assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
//       assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);
//     })
//   });

function last(x) {
  return x.split(" ").sort((a, b) => {
    const lastCharA = a.charAt(a.length - 1);
    const lastCharB = b.charAt(b.length - 1);
    if (lastCharA === lastCharB) {
      return 0;
    } else {
      return lastCharA.localeCompare(lastCharB);
    }
  });
}

console.log(last("man i need a taxi up to ubud"));
// console.log(last("what time are we climbing up the volcano"));
// console.log(last("take me to semynak"));

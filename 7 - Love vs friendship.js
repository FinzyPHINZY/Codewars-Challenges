"use strict";

// DESCRIPTION:
// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

// Test cases:

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(wordsToMarks("attitude"), 100);
//     assert.strictEqual(wordsToMarks("friends"), 75);
//     assert.strictEqual(wordsToMarks("family"), 66);
//     assert.strictEqual(wordsToMarks("selfness"), 99);
//     assert.strictEqual(wordsToMarks("knowledge"), 96);
//   });
// });

function wordsToMarks(string) {
  //your code here
  let total = 0;

  for (let i = 0; i < string.length; i++) {
    total += string.charCodeAt(i) - 96;
  }
  return total;
}

console.log(wordsToMarks("love"));
console.log(wordsToMarks("friendship"));
console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("selfness"));
console.log(wordsToMarks("knowledge"));

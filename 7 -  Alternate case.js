"use strict ";

// DESCRIPTION:
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// Test Cases:
// describe("Alternate case", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(alternateCase("abc"), "ABC");
//     assert.strictEqual(alternateCase("ABC"), "abc");
//     assert.strictEqual(alternateCase("Hello World"), "hELLO wORLD");
//   });
// });

function alternateCase(s) {
  let output = [];

  s = s.split("").forEach((char) => {
    if (char === char.toUpperCase()) output.push(char.toLowerCase());
    else {
      output.push(char.toUpperCase());
    }
  });

  return output.join("");
}

console.log(alternateCase("abc"));
console.log(alternateCase("ABC"));
console.log(alternateCase("Hello World"));

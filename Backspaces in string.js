"use strict";

// DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// Test Cases:
// describe("cleanString", () => {
//   it("should work correctly", () => {
//     assert.strictEqual(cleanString("abc#d##c"), "ac");
//     assert.strictEqual(cleanString("abc####d##c#"), "");
//   });
// });

function cleanString(s) {
  // ... your code ...
}

console.log(cleanString("abc#d##c"));
console.log(cleanString("abc##d######"));
console.log(cleanString("#######"));
console.log(cleanString(""));
console.log(cleanString("abc#d##c"));
console.log(cleanString("abc####d##c#"));

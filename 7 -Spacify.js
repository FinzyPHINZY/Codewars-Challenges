"use strict";

// DESCRIPTION:
// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// Test Cases:
// describe("spacify", function () {
//   it("basic tests", function () {
//     assert.equal(spacify("hello world"), "h e l l o   w o r l d");
//     assert.equal(spacify("12345"), "1 2 3 4 5");
//   });
// });

function spacify(str) {
  let result = [];
  let spaces = " ".repeat(str.length);
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
    result.push(spaces[i]);
  }

  return result.join("").trim();
}

console.log(spacify("hello world"));
console.log(spacify("12345"));

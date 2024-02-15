"use strict";

// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/

// Test Cases:
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(getASCII("A"), 65);
    Test.assertEquals(getASCII(" "), 32);
    Test.assertEquals(getASCII("!"), 33);
  });
});

function getASCII(c) {
  // ...
}

console.log(getASCII("A"));
console.log(getASCII(" "));
console.log(getASCII("!"));

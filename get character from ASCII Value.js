"use stricts";

// DESCRIPTION:
// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:
// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
// For ASCII table, you can refer to http://www.asciitable.com/

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(getChar(55), "7");
//     Test.assertEquals(getChar(56), "8");
//     Test.assertEquals(getChar(57), "9");
//     Test.assertEquals(getChar(58), ":");
//     Test.assertEquals(getChar(59), ";");
//     Test.assertEquals(getChar(60), "<");
//     Test.assertEquals(getChar(61), "=");
//     Test.assertEquals(getChar(62), ">");
//     Test.assertEquals(getChar(63), "?");
//     Test.assertEquals(getChar(64), "@");
//     Test.assertEquals(getChar(65), "A");
//   });
// });

function getChar(c) {
  // ...
  return String.fromCharCode(c);
}

console.log(getChar(55));
console.log(getChar(56));
console.log(getChar(57));
console.log(getChar(58));
console.log(getChar(59));
console.log(getChar(60));
console.log(getChar(61));
console.log(getChar(62));
console.log(getChar(63));
console.log(getChar(64));
console.log(getChar(65));

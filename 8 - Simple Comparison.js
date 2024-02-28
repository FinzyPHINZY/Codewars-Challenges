"use strict";

// DESCRIPTION:
// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(add("1", 1), true);
//     Test.assertEquals(add(1, "1"), true);
//     Test.assertEquals(add(1, "0"), false);
//     Test.assertEquals(add("11", 11), true);
//     Test.assertEquals(add(12, 12), true);
//     Test.assertEquals(add(120, "021"), false);
//   });
// });

function add(a, b) {
  // code here
  return a == b ? true : false;
}

console.log(add("1", 1));
console.log(add(1, "1"));
console.log(add(1, "0"));
console.log(add("11", 11));
console.log(add(12, 12));
console.log(add(120, "021"));

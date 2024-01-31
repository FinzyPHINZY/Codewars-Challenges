"use strict";

// DESCRIPTION:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// Test Cases;

// it("sample tests", () => {
//   doTest("", 0);
//   doTest("a", 97);
//   doTest("b", 98);
//   doTest("c", 99);
//   doTest("d", 100);
//   doTest("e", 101);
//   doTest("aaa", 291);
//   doTest("Mary Had A Little Lamb", 1873);
// });

function uniTotal(string) {
  // total up dem unicodes!
  return string
    .split("")
    .map((e, i) => string.charCodeAt(i))
    .reduce((sum, num) => sum + num, 0);
}

console.log(uniTotal(""));
console.log(uniTotal("a"));
console.log(uniTotal("b"));
console.log(uniTotal("c"));
console.log(uniTotal("d"));
console.log(uniTotal("e"));
console.log(uniTotal("aaa"));
console.log(uniTotal("Mary Had A Little Lamb"));

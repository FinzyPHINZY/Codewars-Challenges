"use strict";

// DESCRIPTION:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// Test Cases:

// describe("Switcheroo", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(switcheroo("abc"), "bac");
//     assert.strictEqual(switcheroo("aaabcccbaaa"), "bbbacccabbb");
//     assert.strictEqual(switcheroo("ccccc"), "ccccc");
//   });
// });

function switcheroo(x) {
  let output = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "a") {
      output += "b";
    } else if (x[i] === "b") {
      output += "a";
    } else {
      output += x[i];
    }
  }
  return output;
}

console.log(switcheroo("abc"));
console.log(switcheroo("aaabcccbaaa"));
console.log(switcheroo("ccccc"));

"use strict";

// ESCRIPTION:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

// Test Cases:
// describe("Basic tests", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(insertDash(454793), "4547-9-3");
//     assert.strictEqual(insertDash(123456), "123456");
//     assert.strictEqual(insertDash(1003567), "1003-567");
//   });
// });

function insertDash(num) {
  //code me
  num = num.toString();
  let result = "";
  for (let i = 0; i < num.length; i++) {
    const char = parseInt(num[i]);
    const nextChar = parseInt(num[i + 1]);

    result += char;
    if (char % 2 !== 0 && nextChar % 2 !== 0 && !isNaN(nextChar)) {
      result += "-";
    }
  }
  return result;
}

console.log(insertDash(454793));
console.log(insertDash(123456));
console.log(insertDash(1003567));

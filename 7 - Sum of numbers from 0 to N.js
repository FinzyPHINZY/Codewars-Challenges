"use strict";

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

// Test Cases:

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(SequenceSum.showSequence(6), "0+1+2+3+4+5+6 = 21");
//   });
// });

function SequenceSum(count) {
  let statement = "";

  for (let i = 0; i <= count; i++) {
    statement += i;
  }
  return statement.split("").join("+");
  //while
}

console.log(SequenceSum(6));
console.log(SequenceSum(10));

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

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count > 0)
      return (
        [...Array(count + 1).keys()].join("+") +
        " = " +
        (count * (count + 1)) / 2
      );
    if (count == 0) return "0=0";
    return count + "<0";
  };

  return SequenceSum;
})();

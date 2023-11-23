"use strict";
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(SeriesSum(1), "1.00");
//     Test.assertEquals(SeriesSum(2), "1.25");
//     Test.assertEquals(SeriesSum(3), "1.39");
//     Test.assertEquals(SeriesSum(4), "1.49");
//   });
// });

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    console.log(1 + i * 3);
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));

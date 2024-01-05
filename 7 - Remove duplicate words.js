"use strict";

// DESCRIPTION:
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(
//       removeDuplicateWords(
//         "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//       ),
//       "alpha beta gamma delta"
//     );
//   });
// });

function removeDuplicateWords(s) {
  // your perfect code...
  let output = new Set(s.split(" "));
  return [...output].join(" ");
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);

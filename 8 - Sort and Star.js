"use strict";

// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Test Cases:

// describe("Basic tests",() =>{
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
//       assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
//     });
//   });

function twoSort(s) {
  // Sort the array alphabetically
  const sortedArray = s.sort();

  // Extract the first string from the sorted array
  const firstString = sortedArray[0];

  // Insert "***" between each letter of the first string
  const result = firstString.split("").join("***");

  return result;
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ])
);

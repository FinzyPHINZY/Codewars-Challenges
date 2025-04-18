"use strict";

// You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.
// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }
// Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }
// Example 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

const removeDuplicateIds = (obj) => {
  const keys = Object.keys(obj).sort((a, b) => b - a);
  const seen = new Set();

  const result = {};

  for (const key of keys) {
    const uniqueChars = [];
    for (const char of obj[key]) {
      if (!seen.has(char)) {
        uniqueChars.push(char);
        seen.add(char);
      }
    }
    result[key] = uniqueChars;
  }

  return result;
};

const obj = {
  1: ["A", "B", "C"],
  2: ["A", "B", "D", "A"],
};
const result = removeDuplicateIds(obj);

const obj1 = {
  1: ["C", "F", "G"],
  2: ["A", "B", "C"],
  3: ["A", "B", "D"],
};
const result1 = removeDuplicateIds(obj1);

const obj2 = {
  1: ["A"],
  2: ["A"],
  3: ["A"],
};
const result2 = removeDuplicateIds(obj2);

const obj3 = {
  432: ["A", "A", "B", "D"],
  53: ["L", "G", "B", "C"],
  236: ["L", "A", "X", "G", "H", "X"],
  11: ["P", "R", "S", "D"],
};

const result3 = removeDuplicateIds(obj3);

console.log(removeDuplicateIds(result));
console.log(removeDuplicateIds(result1));
console.log(removeDuplicateIds(result2));
console.log(removeDuplicateIds(result3));

// Test.assertDeepEquals(result, { 1: ["C"], 2: ["A", "B", "D"] });
// Test.assertDeepEquals(result1, { 1: ["F", "G"], 2: ["C"], 3: ["A", "B", "D"] });
// Test.assertDeepEquals(result2, { 1: [], 2: [], 3: ["A"] });
// Test.assertDeepEquals(result3, {
//   11: ["P", "R", "S"],
//   53: ["C"],
//   236: ["L", "X", "G", "H"],
//   432: ["A", "B", "D"],
// });

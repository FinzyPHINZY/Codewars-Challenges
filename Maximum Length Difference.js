"use strict";

// DESCRIPTION:
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// Test Cases:
// describe("mxdiflg", function () {
//   it("Basic tests", function () {
var s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
//     assert.strictEqual(mxdiflg(s1, s2), 13);
//   });
// });

function mxdiflg(a1, a2) {
  // your code
  if (a1.length < 1 || a2.length < 1) {
    return -1;
  } else {
    const a1_mapped = a1.map((word) => {
      return word.length;
    });
    const a2_mapped = a2.map((word) => {
      return word.length;
    });
    const a1_max = Math.max(...a1_mapped);
    const a2_max = Math.max(...a2_mapped);
    const a1_min = Math.min(...a1_mapped);
    const a2_min = Math.min(...a2_mapped);

    let a1max_a2min = a1_max - a2_min;
    let a2max_a1min = a2_max - a1_min;

    return Math.max(a1max_a2min, a2max_a1min);
  }
}
console.log(mxdiflg(s1, s2));

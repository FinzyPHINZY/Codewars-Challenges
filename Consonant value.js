"use strict";

// DESCRIPTION:
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// Test Cases:
// describe("Basic tests", function () {
//   it("Should pass sample tests", function () {
//     assert.strictEqual(solve("zodiac"), 26);
//     assert.strictEqual(solve("chruschtschov"), 80);
//     assert.strictEqual(solve("khrushchev"), 38);
//     assert.strictEqual(solve("strength"), 57);
//     assert.strictEqual(solve("catchphrase"), 73);
//     assert.strictEqual(solve("twelfthstreet"), 103);
//     assert.strictEqual(solve("mischtschenkoana"), 80);
//     assert.strictEqual(solve("az"), 26);
//   });
// });

function solve(s) {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  const result = s
    .split(/[aeiou]/g)
    .map((word) =>
      word.split("").reduce((a, b) => a + (letters.indexOf(b) + 1), 0)
    );

  return Math.max(...result);
}

console.log(solve("zodiacs"));
// console.log(solve("chruschtschov"));
// console.log(solve("khrushchev"));
// console.log(solve("strength"));
// console.log(solve("catchphrase"));
// console.log(solve("twelfthstreet"));
// console.log(solve("mischtschenkoana"));
// console.log(solve("az"));

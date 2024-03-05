"use strict";

// DESCRIPTION:
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// Test Cases:

// describe("Tests", () => {
//   it("test", () => {
//     a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

//     a1 = ["xyz", "live", "strong"];
//     assert.sameOrderedMembers(inArray(a1, a2), ["live", "strong"]);

//     a1 = ["live", "strong", "arp"];
//     assert.sameOrderedMembers(inArray(a1, a2), ["arp", "live", "strong"]);

//     a1 = ["tarp", "mice", "bull"];
//     assert.sameOrderedMembers(inArray(a1, a2), []);
//   });
// });

function inArray(array1, array2) {
  //...
  return array1
    .filter((word1) => array2.some((word2) => word2.includes(word1)))
    .sort();
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
console.log(
  inArray(
    ["live", "strong", "arp"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);

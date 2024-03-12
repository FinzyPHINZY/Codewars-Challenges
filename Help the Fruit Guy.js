"use strict";

// DESCRIPTION:
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// Test Cases
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertSimilar(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
//   Test.assertSimilar(removeRotten([]), [])

//     });
//   });

function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits.length === 0) {
    return [];
  }

  return bagOfFruits.map((fruit) => {
    return fruit.startsWith("rotten")
      ? fruit.substring(6).toLowerCase()
      : fruit.toLowerCase();
  });
}

console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"]));
console.log(
  removeRotten([
    "rottenapple",
    "rottenbanana",
    "rottenapple",
    "rottenpineapple",
    "rottenkiwi",
  ])
);
console.log(removeRotten([]));

"use strict";

// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves) {
  //My hands are freezing
  const gloveCount = {};
  let pairs = 0;

  gloves.forEach((glove) => {
    if (gloveCount[glove]) {
      gloveCount[glove] += 1;
    } else {
      gloveCount[glove] = 1;
    }
  });

  for (const glove in gloveCount) {
    const GLOVE = gloveCount[glove];

    if (GLOVE > 1) {
      pairs += Math.floor(GLOVE / 2);
    }
  }

  return pairs;
}

console.log(numberOfPairs(["red", "red"]));
console.log(numberOfPairs(["red", "green", "blue"]));
console.log(
  numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"])
);

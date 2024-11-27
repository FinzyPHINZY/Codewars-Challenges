"use strict";

// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true

// Arguments consist of only lowercase letters.

function isAlt(word) {
  // happy codinggg
  const vowels = ["a", "e", "i", "o", "u"];

  const results = [];
  word
    .split("")
    .forEach((char, i) =>
      vowels.includes(char) ? results.push(true) : results.push(false)
    );

  for (let i = 0; i < results.length; i++) {
    if (results[i] === results[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(isAlt("amazon")); // true);
console.log(isAlt("apple")); // false);
console.log(isAlt("banana")); // true);

// check if vowels includes the character. ;could be true or false

"use strict";

// The alphabetized kata
// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

// The input is restricted to contain no numerals and only words containing the english alphabet letters.

// Example:

// alphabetized("The Holy Bible") // "BbeehHilloTy"

function alphabetized(s) {
  const letters = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return s
    .split(" ")
    .join("")
    .split("")
    .filter((char) => letters.includes(char))
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join("");
}

console.log(alphabetized("The Holy Bible")); //, 'BbeehHilloTy')
console.log(alphabetized("4466beIiLlnPpppqQqrWwZz")); // beIiLlnPpppqQqrWwZz

("aAbBcCdDeEfFgGhHiIjJkKlLmMNoOpPqQrRsStTuUvVwWxXyYzZ");
("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ");

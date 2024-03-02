"use strict";

// DESCRIPTION:
// A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

// For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

// For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".

function longestPalindrome(str) {
  //Good Luck // Convert the string to lowercase to make it case insensitive
  str = str.toLowerCase();

  // Create a map to store the frequency of characters
  const charCount = new Map();
  for (const char of str) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Count the number of characters with odd frequency
  let oddCount = 0;
  for (const count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // The length of the longest palindrome is the length of the input string
  // minus the number of characters with odd frequency
  return Math.max(1, str.length - oddCount);
}

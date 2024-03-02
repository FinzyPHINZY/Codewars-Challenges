"use strict";

// DESCRIPTION:
// A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

// For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

// For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".

function longestPalindrome(str) {
  var s = str.toLowerCase();
  var arr = "abcdefghijklmnopqrstuvwxyz0123456789";
  var count = 0;
  for (var i = 0; i < arr.length; ++i) {
    var c = 0;
    for (var j = 0; j < s.length; ++j) if (s[j] == arr[i]) c++;
    count += Math.floor(c / 2) * 2;
  }
  return count == s.length ? count : ++count;
}

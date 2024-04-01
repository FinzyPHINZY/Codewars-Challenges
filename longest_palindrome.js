"use strict";

// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

function longestPalindrome(s) {
  //your code here
  if (s.length === 0) return 0; // Edge case: empty string

  let maxLength = 1; // At least one character forms a palindrome
  let start = 0; // Starting index of the current longest palindrome

  // Helper function to expand around center for odd-length palindrome
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const palindromeLength = right - left + 1;
      if (palindromeLength > maxLength) {
        maxLength = palindromeLength;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1); // Check for odd-length palindromes
    expandAroundCenter(i, i + 1); // Check for even-length palindromes
  }

  return maxLength;
}

console.log(longestPalindrome("aa"));
console.log(longestPalindrome("baa"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aab"));
console.log(longestPalindrome("zyabyz"));
console.log(longestPalindrome("BaaBcd"));
console.log(longestPalindrome("baablkj12345432133d"));

console.log(longestPalindrome(""));
console.log(longestPalindrome("Aa"));

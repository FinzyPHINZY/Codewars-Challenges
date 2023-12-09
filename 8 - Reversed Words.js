"use strict";

// DESCRIPTION:
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str) {
  return str.split(" ").reverse().join(" "); // reverse those words
}

console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this"));
console.log(reverseWords("foobar"));
console.log(reverseWords("kata editor"));
console.log(reverseWords("row row row your boat"));
console.log(reverseWords(""));

"use strict";

// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters
// Examples

// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

function countRepeats(str) {
  // code solution
  let count = 0;
  let prevChar = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === prevChar) {
      count++;
    } else {
      prevChar = str[i];
    }
  }
  return count;
}

console.log(countRepeats("AABCCD")); //2);
console.log(countRepeats("AABCCDA")); //,2)
console.log(countRepeats("AaBBCCC")); //3);

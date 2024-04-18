"use strict";

// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// Good luck!

function wordValue(a) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return a
    .map((word) => {
      return word
        .split(" ")
        .join("")
        .split("")
        .map((char, i) => {
          return letters.indexOf(char) + 1;
        })
        .reduce((acc, num) => acc + num, 0);
    })
    .map((num, i) => num * (i + 1));
}

console.log(wordValue(["codewars", "abc", "xyz"])); //, [88, 12, 225]);
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"])); //, [12, 24, 18, 24]);

// iterate a by each string.
// remove spaces
//

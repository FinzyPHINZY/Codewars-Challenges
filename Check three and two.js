"use strict";

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
  //your code here
  const set = new Set(array);
  if (set.size !== 2) return false;

  let wordObj = {};

  array.forEach((char) => {
    if (wordObj[char]) {
      wordObj[char]++;
    } else {
      wordObj[char] = 1;
    }
  });

  let bools = [];

  for (const key in wordObj) {
    if (wordObj[key] === 3) {
      bools.push(true);
    } else if (wordObj[key] === 2) {
      //   return true;
      bools.push(true);
    }
  }

  if (bools.length < 2) return false;

  return bools.every((value) => value === true && value !== null);
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])); //, true);
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"])); // false);
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])); //false );
console.log(checkThreeAndTwo(["c", "b", "b", "b", "b"]));

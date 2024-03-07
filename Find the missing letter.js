"use strict";

// DESCRIPTION:
// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// Test Cases:
// escribe("KataTests", function () {
//   it("exampleTests", function () {
//     Test.assertEquals(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
//     Test.assertEquals(findMissingLetter(["O", "Q", "R", "S"]), "P");
//   });
// });

function findMissingLetter(array) {
  const letters =
    array[0] === array[0].toLowerCase()
      ? "abcdefghijklmnopqrstuvwxyz"
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let first_letter = letters.indexOf(array[0]);

  let newArr = [];

  for (let i = first_letter; i <= array.length + first_letter; i++) {
    newArr.push(letters[i]);
  }
  const difference = newArr.filter((e) => !array.includes(e));
  return difference.join("");
}
// Improved solution:

function findMissingLetter(array) {
  const letters =
    array[0].toLowerCase() === array[0]
      ? "abcdefghijklmnopqrstuvwxyz"
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const firstCharCode = array[0].charCodeAt(0);

  for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt(0) !== firstCharCode + i) {
      return String.fromCharCode(firstCharCode + i);
    }
  }

  // In case no missing letter is found (should not happen given the problem description)
  return null;
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // Should return 'e'
console.log(findMissingLetter(["O", "Q", "R", "S"])); // Should return 'P'

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["i", "j", "k", "m", "n"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));

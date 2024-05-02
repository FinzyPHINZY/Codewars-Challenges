"use strict";

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  return str
    .split(" ")
    .map((word) => word.slice(1) + word[0] + "ay")
    .join(" ")
    .replace("!ay", "!")
    .replace("?ay", "?");
}

// PREP:
// P: takes in a string of words
// R: returns a new string of words containing the first letter of each original word as the last letter of each word and adding "ay" to the end of the word. Leave punctuation marks untouched
// E: line 6-7
// P: loop through each word. split the words by (' ') and map

console.log(pigIt("Pig latin is cool")); //,'igPay atinlay siay oolcay')
console.log(pigIt("This is my string")); //,'hisTay siay ymay tringsay')
console.log(pigIt("Hello world !")); // elloHay orldway !

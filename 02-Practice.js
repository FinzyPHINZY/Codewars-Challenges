// DESCRIPTION:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  // build here
  let tower = [];

  for (let i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - (i - 1));
    const stars = "*".repeat(2 * (1 + i));
    tower.push(spaces + stars + spaces);
  }
  return tower;
}

// console.log(towerBuilder(6))

// Description:
// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function dullThings(arr) {
  const min = arr.indexOf(Math.min(...arr));
  return arr.filter((_, i) => i !== min);
}

// console.log(dullThings([1, 2, 3, 4, 5]));
// console.log(dullThings([5, 3, 2, 1, 4]));
// console.log(dullThings([2, 2, 1, 2, 1]));

("use strict");

// Happy Holidays fellow Code Warriors!
// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order
// Examples
// For this input:

// [
//   "Dasher Tonoyan",
//   "Dancer Moore",
//   "Prancer Chua",
//   "Vixen Hall",
//   "Comet Karavani",
//   "Cupid Foroutan",
//   "Donder Jonker",
//   "Blitzen Claus"
// ]
// You should return this output:

// [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan",
//   "Vixen Hall",
//   "Donder Jonker",
//   "Comet Karavani",
//   "Dancer Moore",
//   "Dasher Tonoyan",
// ]

function sortReindeer(reindeerNames) {}

let input = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus",
];
let output = [
  "Prancer Chua",
  "Blitzen Claus",
  "Cupid Foroutan",
  "Vixen Hall",
  "Donder Jonker",
  "Comet Karavani",
  "Dancer Moore",
  "Dasher Tonoyan",
];
console.log(sortReindeer(input)); //, output);

"use strict";

// DESCRIPTION:
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]
// Explanation of the above:

// Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
// Notes:

// Preserve the order of the original list.
// Return an empty array [] if there is no developer with an "odd" name.
// The input array and first names will always be valid and formatted as in the example above.

// Test Cases:

var list1 = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
  {
    firstName: "Abb",
    lastName: "O.",
    country: "Israel",
    continent: "Asia",
    age: 39,
    language: "Java",
  },
];
//   var answer1 = [
//     { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
//   ];

var list2 = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
];

//   var answer2 = [];

function findOddNames(list) {
  const output = [];
  for (const dev of list) {
    const fName = dev.firstName;
    const fNameCharSum = fName
      .split("")
      .map((char, i) => fName.charCodeAt(i))
      .reduce((sum, num) => sum + num, 0);

    if (fNameCharSum % 2 !== 0) {
      output.push(dev);
    }
  }
  return output;
}

console.log(findOddNames(list1));
// console.log(findOddNames(list2));

function sumCharCodes(str) {
  return str
    .split("")
    .map((char) => char.charCodeAt())
    .reduce((sum, current) => sum + current);
}

function isOdd(n) {
  return n % 2 != 0;
}

function findOddNames(list) {
  return list.filter((person) => {
    return isOdd(sumCharCodes(person.firstName));
  });
}

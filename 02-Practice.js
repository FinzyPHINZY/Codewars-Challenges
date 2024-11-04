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
    const spaces = ' '.repeat(nFloors - (i - 1));
    const stars = '*'.repeat(2 * (1 + i));
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

('use strict');

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

function sortReindeer(reindeerNames) {
  return reindeerNames.sort(
    (a, b) => a.split(' ')[1] - b.split(' ')[1]
    //   {
    //   const nameA = a.split(" ")[1];
    //   const nameB = b.split(" ")[1];

    //   if (nameA > nameB) {
    //     return 1;
    //   } else if (nameA < nameB) {
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    // }
  );
}

// let input = [
//   "Dasher Tonoyan",
//   "Dancer Moore",
//   "Prancer Chua",
//   "Vixen Hall",
//   "Comet Karavani",
//   "Cupid Foroutan",
//   "Donder Jonker",
//   "Blitzen Claus",
// ];
// let output = [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan",
//   "Vixen Hall",
//   "Donder Jonker",
//   "Comet Karavani",
//   "Dancer Moore",
//   "Dasher Tonoyan",
// ];
// console.log(sortReindeer(input)); //, output);

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

function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) =>
    a.split(' ')[1].localeCompare(b.split(' ')[1])
  );
}

let input = [
  'Dasher Tonoyan',
  'Dancer Moore',
  'Prancer Chua',
  'Vixen Hall',
  'Comet Karavani',
  'Cupid Foroutan',
  'Donder Jonker',
  'Blitzen Claus',
];
// let output = [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan",
//   "Vixen Hall",
//   "Donder Jonker",
//   "Comet Karavani",
//   "Dancer Moore",
//   "Dasher Tonoyan",
// ];
// console.log(sortReindeer(input)); //, output);

// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of 'white' or 'yellow'

// or 'purple' or 'red when instantiated.

// ghost = new Ghost();

// ghost.color //=> "white" or "yellow" or "purple" or "red"

var Ghost = function () {
  // your code goes here
  this.color = ['white', 'yellow', 'purple', 'red'][
    Math.floor(Math.random() * 4)
  ];
  this.fruit = ['orange', 'pineapple'];
  return this;
};

// describe("Ghost", () => {
//   it("should be one of the specified colors", () => {
// let colors = ["white", "yellow", "purple", "red"];
//     Test.expect(colors.includes(new Ghost().color));
//   });
// });

// const ghostColor = new Ghost().color;

// console.log(colors.includes(ghostColor));

// DESCRIPTION:
// This is a spin off of my first kata.
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(string) {
  // TODO
  string = string.split(',');
  if (string.length < 3) return null;

  const result = string
    .filter((char, i) => i !== 0 && i !== string.length - 1)
    .join(' ');

  return result;
}

// describe('Sample Tests', function() {
//   function test(string, expected) {
//     it(`string='${string}'`, function() {
//       assert.strictEqual(array(string), expected);
//     });
//   }

// console.log(array("")); //, null);
// console.log(array("1")); //, null);
// console.log(array("A1,B2")); //, null);
// console.log(array("1,2,3")); //, '2');
// console.log(array("1,2,3,4")); //, '2 3');
// console.log(array("A1,B2,C3,D4,E5")); //, 'B2 C3 D4');
// console.log(array("A,1,23,456,78,9,Z")); //, '1 23 456 78 9');

// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// Test Cases:

// describe("basic tests", function () {
//   test(10, 23);
// });

function sumMultiples(limit) {
  // find the numbers that are multiples of 3 or 5 below 'limit';
  let multiples = [];
  for (let i = 0; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  console.log(multiples);
  // return the total
  return multiples.reduce((sum, num) => sum + num, 0);
}

// console.log(sumMultiples(10));

// Task
// Implement a function which accepts 2 arguments: string and separator.
// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
// For example:

function splitAndMerge(string, separator) {
  // split the string by spaces
  // map the result and split each word to individual letters
  // join by the seperator
  // join on the outer level by space

  return string
    .split(' ')
    .map((word) => word.split('').join(separator))
    .join(' ');
}

// console.log(splitAndMerge("My name is John", " ")); // == "M y n a m e i s J o h n";
// console.log(splitAndMerge("My name is John", "-")); // == "M-y n-a-m-e i-s J-o-h-n";
// console.log(splitAndMerge("Hello World!", ".")); // == "H.e.l.l.o W.o.r.l.d.!";
// console.log(splitAndMerge("Hello World!", ",")); // == "H,e,l,l,o W,o,r,l,d,!";

// DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:

// unluckyDays(2015) == 3;
// unluckyDays(1986) == 1;

function unluckyDays(year) {
  //your code here
  let count = 0;
  for (let i = 0; i < 12; i++) {
    let date = new Date(year, i, 13);

    if (date.getDay() === 5) {
      count++;
    }
  }

  return count;
}

// console.log(unluckyDays(2015));
// console.log(unluckyDays(1986));

// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:

// let  input =
//  [[ 0, 1, 2, 3, 4 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]]

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.

function toCsvText(array) {
  // good luck
  console.log(array.join('\n'));
}

const inputArray = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];

// console.log(toCsvText(inputArray));

// DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year) {
  //your code here
  let count = 0;
  // loop through the year and get the dates that match 13
  for (let i = 0; i < 12; i++) {
    let date = new Date(year, i, 13);
    const day = date.getDay();

    day === 5 && count++;
  }
  return count;
}

// console.log(unluckyDays(2015));
// console.log(unluckyDays(1986));

// DESCRIPTION:
// Time to win the lottery!
// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  // count mini-wins
  // for each subarray, {
  // split the string into individual characters and convert them to it's respective character code
  // if any of the character code matches the number, increate the mini win counter.
  //  return winner or loser depending on the mini win count and the win value.
  // }

  const miniWins = ticket
    .map((subArray) => {
      const charCodes = subArray[0]
        .split('')
        .map((_, i) => subArray[0].charCodeAt(i));

      return charCodes.reduce((a, b) => {
        if (b === subArray[1]) {
          return a + 1;
        } else {
          return a;
        }
      }, 0);
    })
    .reduce((a, b) => a + b, 0);

  return miniWins >= win ? 'Winner!' : 'Loser!';
}

// console.log(
//   bingo(
//     [
//       ["ABC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     2
//   )
// ); //, 'Loser!');
// console.log(
//   bingo(
//     [
//       ["ABC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     1
//   )
// ); // 'Winner!');
// console.log(
//   bingo(
//     [
//       ["HGTYRE", 74],
//       ["BE", 66],
//       ["JKTY", 74],
//     ],
//     3
//   )
// ); //, 'Loser!');

// DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  // ... your code ...
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join('');
}

// console.log(cleanString("abc#d##c")); //'ac');
// console.log(cleanString("abc####d##c#")); //, '');
// console.log(cleanString("#######")); // ""
// console.log(cleanString("")); // ""

// DESCRIPTION:
// Time to win the lottery!
// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  let count = 0;
  // ticket.map((subArray) =>
  //   subArray[0].split("").map((char, i) => subArray[0].charCodeAt(i))
  // );

  ticket.forEach((arr) => {
    // arr[0] = arr[0].split("").map((strs, i) => strs.charCodeAt(i));
    // return arr[0];

    if (arr[0].includes(String.fromCharCode(arr[1]))) {
      count++;
    }
  });

  return count >= win ? 'winna' : 'loser';
}

// console.log(
//   bingo(
//     [
//       ["ABC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     2
//   )
// ); //, 'Loser!');
// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1),) // 'Winner!');
// console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)) //, 'Loser!');

('use strict');

// Sort an array by value and index
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

function sortByValueAndIndex(array) {
  return array
    .map((value, i) => ({
      value: value,
      product: value * (i + 1),
    }))
    .sort((a, b) => a.product - b.product)
    .map((arr) => arr.value);
}

// console.log(sortByValueAndIndex([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ];
// console.log(sortByValueAndIndex([23, 2, 3, 4, 5])); // [ 2, 3, 4, 23, 5 ];
// console.log(sortByValueAndIndex([26, 2, 3, 4, 5])); // [ 2, 3, 4, 5, 26 ];
// console.log(sortByValueAndIndex([9, 5, 1, 4, 3])); // [ 1, 9, 5, 3, 4 ];

// DESCRIPTION:
// Time to win the lottery!
// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  let count = 0;
  ticket.forEach((arr) => {
    arr[0] = arr[0].split('');
    console.log(arr[0]);
    if (arr[0].includes(String.fromCharCode(arr[1]))) count++;
  });
  return count >= win ? 'winna' : 'loser';
}

// console.log(
//   bingo(
//     [
//       ["ABC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     2
//   )
// ); //, 'Loser!');
// console.log(
//   bingo(
//     [
//       ["ABC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     1
//   )
// ); // 'Winner!');
// console.log(
//   bingo(
//     [
//       ["HGTYRE", 74],
//       ["BE", 66],
//       ["JKTY", 74],
//     ],
//     3
//   )
// ); //, 'Loser!');

// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of 'white' or 'yellow'

// or 'purple' or 'red when instantiated.

// ghost = new Ghost();

// ghost.color //=> "white" or "yellow" or "purple" or "red"

let colors = ['white', 'yellow', 'purple', 'red'];

var Ghost = function () {
  // your code goes here
  this.color = colors[Math.floor(Math.random() * colors.length)];
  return this;
};

// Test.expect(colors.includes(new Ghost().color));

// const ghost = new Ghost();
// console.log(ghost.color);

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

function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) => {
    return a.split(' ')[1].localeCompare(b.split(' ')[1]);
  });
}

let inputNames = [
  'Dasher Tonoyan',
  'Dancer Moore',
  'Prancer Chua',
  'Vixen Hall',
  'Comet Karavani',
  'Cupid Foroutan',
  'Donder Jonker',
  'Blitzen Claus',
];
// let output = [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan",
//   "Vixen Hall",
//   "Donder Jonker",
//   "Comet Karavani",
//   "Dancer Moore",
//   "Dasher Tonoyan",
// ];
// console.log(sortReindeer(inputNames)); //, output);

// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

function killer(suspectInfo, dead) {
  //your code here...
  for (const key in suspectInfo) {
    if (dead.every((person) => suspectInfo[key].includes(person))) return key;
  }
}

// console.log(
//   killer(
//     {
//       James: ["Jacob", "Bill", "Lucas"],
//       Johnny: ["David", "Kyle", "Lucas"],
//       Peter: ["Lucy", "Kyle"],
//     },
//     ["Lucas", "Bill"]
//   )
// ); // "James"

// console.log(killer({ Brad: [], Megan: ["Ben", "Kevin"], Finn: [] }, ["Ben"])); //"Megan"

// we have a list of the people the suspect met that day
// we have a list of the people that was killed
// i need to iterate over the list of people that the suspect met that day.
// if it includes the everyone in the dead people array, then we have the killer.
// for in loop

// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is fou we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
// Examples

// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

// integer between 0 and 999.
// return an array of the integer in english words. for integers greater than 9, we return each digit in a single word concatenated together. this process will go on till we reacth the equilibrium which is four

// numbersOfLetters(4) --->>> ['four];
// numbersOfLetters(1) --->> ['one', 'three', 'five', 'four]

function numbersOfLetters(num) {
  const result = [];

  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  // conver numbers to word.
  const numToWord = (num) =>
    num
      .toString()
      .split('')
      .map((number) => numbers[number])
      .join('');

  let currentWord = numToWord(num);

  if (currentWord === 'four') {
    result.push(currentWord);

    return result;
  }

  result.push(currentWord);
  while (true) {
    const nextNum = numToWord(currentWord.length);

    result.push(nextNum);

    if (nextNum === 'four') {
      return result;
    } else {
      currentWord = nextNum;
    }
  }
}

// console.log(numbersOfLetters(4))
// console.log(numbersOfLetters(1)) //["one", "three", "five", "four"]);
// console.log(numbersOfLetters(12)) // ["onetwo", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(37)) // ["threeseven", "onezero", "seven", "five", "four"]);
// console.log(numbersOfLetters(311)) //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(999)) //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is fou we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
// Examples

// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

// takes in an integer.
// returns an array of strings. the first being the parameter and the rest being the strings of numbers from the integer parameter to a stable equilibrium.
// numbersOfLetters(1) ---> ['one', 'three', 'five', 'four]

function numbersOfLetters(integer) {
  // code here...
  // bind numbers in a array
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const result = [];

  const numToWord = (integer) =>
    integer
      .toString()
      .split('')
      .map((num) => numbers[num])
      .join('');

  let currentWord = numToWord(integer);

  result.push(currentWord);

  if (currentWord === 'four') {
    return result;
  }

  while (true) {
    const nextNum = numToWord(currentWord.length);
    result.push(nextNum);

    if (nextNum === 'four') {
      return result;
    }

    currentWord = nextNum;
  }
}

// console.log(numbersOfLetters(4))

// console.log(numbersOfLetters(1)) //["one", "three", "five", "four"]);
// console.log(numbersOfLetters(12)) // ["onetwo", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(37)) // ["threeseven", "onezero", "seven", "five", "four"]);
// console.log(numbersOfLetters(311)) //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(999)) //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

function shorterReverseLonger(first, second) {
  const reverseText = (str) => str.split('').reverse().join('');

  return first.length >= second.length
    ? second + reverseText(first) + second
    : first + reverseText(second) + first;
}

// console.log(shorterReverseLonger('first', 'abcde'), 'abcdetsrifabcde')
// console.log(shorterReverseLonger('hello', 'bau'), 'bauollehbau')
// console.log(shorterReverseLonger('fghi', 'abcde'), 'fghiedcbafghi')
// console.log(shorterReverseLonger('hello', ''), 'olleh')
// console.log(shorterReverseLonger('', 'bau'), 'uab')
// console.log(shorterReverseLonger('', ''), '')

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// recieve two strings. could be empty.
// return a new string with the shortest string as the prefix and the suffix while the middle string is the longer string reversed. in cases where a and b have the same length, a is the longer string and b will be the prefix and suffix.
// shorterReverseLonger('hey', 'hello') ---->> heyollehhey
// shorterReverseLonger('cat', 'jar') ---->> jartacjar

function shorterReverseLonger(str1, str2) {
  const reverseStr = (str) => str.split('').reverse().join('');
  return str1 >= str2
    ? str2 + reverseStr(str1) + str2
    : str1 + reverseStr(str2) + str1;
}

// console.log(shorterReverseLonger('first', 'abcde')) //, "abcdetsrifabcde", 'Incorrect answer for a="first", b="abcde"');
// console.log(shorterReverseLonger('hello', 'bau')) //, "bauollehbau"    , 'Incorrect answer for a="hello", b="bau"'  );
// console.log(shorterReverseLonger('fghi', 'abcde')) //, "fghiedcbafghi"  , 'Incorrect answer for a="fghi", b="abcde"' );
// console.log(shorterReverseLonger('hello', '')) //, "olleh"          , 'Incorrect answer for a="hello", b=""'     );
// console.log(shorterReverseLonger('', 'bau')) //, "uab"            , 'Incorrect answer for a="", b="bau"'       );
// console.log(shorterReverseLonger('', '')) //, ""               , 'Incorrect answer for a="", b=""'          );

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// create a function that accepts an array of numbers greater than or equal to zero and strings.
// return a new array with all the strings removed
// filter_list([1,2,4,5,6.'ai]) // [1,2,3,4,5,6]

function filter_list(array) {
  return array.filter((value) => typeof value !== 'string');
}

// console.log(filter_list([1, 2, 'a', 'b']), [1, 2])
// console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15])
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123])

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray function takes in an array of numbers
// return the array sorted with the odd numbers in ascending order and the even numbers at their original positions

function sortArray(arr) {
  // create an output array
  const result = [];

  const oddNumbers = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  // iterate over the input array.
  // if the value is odd, push into result the first value in the oddNumbers array
  //  else push the original value into result array

  for (const num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    } else {
      result.push(oddNumbers.shift());
    }
  }
  return result;
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
// console.log(sortArray([]), [])

// DESCRIPTION:
// Time to win the lottery!
// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
// All inputs will be in the correct format. Strings on tickets are not always the same length.

// the bingo function takes in two parameters. an array of arrays containing a string and an integer,  and a string
// returns Winner! or Loser! depending on the highest of the mini-wins and the win argument
// line 1029

function bingo(ticket, win) {
  // count mini-wins
  let miniWins = 0;
  // min-wins is the number of times the char code in the string matches the integer in the array
  ticket.forEach((subArray) => {
    const [str, num] = subArray;

    const charCodes = str.split('').map((char, i) => str.charCodeAt(i));

    if (charCodes.includes(num)) {
      miniWins++;
    }
  });

  return miniWins >= win ? 'Winner!' : 'Loser!';
}

// console.log(
//   bingo(
//     [
//       ['ABC', 65],
//       ['HGR', 74],
//       ['BYHT', 74],
//     ],
//     2
//   ),
//   'Loser!'
// )
// console.log(
//   bingo(
//     [
//       ['ABC', 65],
//       ['HGR', 74],
//       ['BYHT', 74],
//     ],
//     1
//   ),
//   'Winner!'
// )
// console.log(
//   bingo(
//     [
//       ['HGTYRE', 74],
//       ['BE', 66],
//       ['JKTY', 74],
//     ],
//     3
//   ),
//   'Loser!'
// )

// DESCRIPTION:
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// function nb_year accepts in 4 arguments. p0-population, percent, aug,p-population to equal or surpass
// return the number of years it takes p0 to surpass p
// nb_year(1000, 2, 50, 1200) => 3;

function nb_year(p0, percent, aug, p) {
  // run a while loop
  // while total is less than p, multiply p0 * percent + aug

  let total = p0;

  let count = 0;
  while (total < p) {
    total += total * (percent / 100) + aug;
    count++;
  }

  return count;
}

// console.log(nb_year(1000, 2, 50, 1200), 3)
// console.log(nb_year(1500, 5, 100, 5000), 15)
// console.log(nb_year(1500000, 2.5, 10000, 2000000), 10)

// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
  const match = str.match(/(\d+)$/);

  if (match) {
    const numStr = match[0];
    const prefix = str.slice(0, match.index);

    const num = (parseInt(numStr, 10) + 1).toString();
    const preceedingZeros = numStr.length - num.length;

    const newNumStr =
      preceedingZeros > 0 ? '0'.repeat(preceedingZeros) + num : num;

    return prefix + newNumStr;
  } else {
    return str + 1;
  }
}

// console.log(incrementString('foobar000'), 'foobar001')
// console.log(incrementString('foobar999'), 'foobar1000')
// console.log(incrementString('foobar00999'), 'foobar01000')
// console.log(incrementString('foo'), 'foo1')
// console.log(incrementString('foobar001'), 'foobar002')
// console.log(incrementString('foobar1'), 'foobar2')
// console.log(incrementString('1'), '2')
// console.log(incrementString('009'), '010')
// console.log(incrementString('fo99obar99'), 'fo99obar100')

// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

const sortme = function (names) {
  return names.sort((a, b) => a.localeCompare(b));
};

// console.log(sortme(['Hello', 'there', "I'm", 'fine']), [
//   'fine',
//   'Hello',
//   "I'm",
//   'there',
// ])
// console.log(sortme(['C', 'd', 'a', 'B']), ['a', 'B', 'C', 'd'])
// console.log(sortme(['CodeWars']), ['CodeWars'])
// console.log(sortme([]), [])

// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is fou we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
// Examples

// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

function numbersOfLetters(integer) {
  // code here...
  const numberWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let result = [];

  const numToWords = (num) =>
    num
      .toString()
      .split('')
      .map((val) => numberWords[val])
      .join('');

  let currentWord = numToWords(integer);

  if (currentWord === 'four') {
    result.push(currentWord);
    return result;
  } else {
    result.push(currentWord);

    while (true) {
      let nextWord = numToWords(currentWord.length);
      result.push(nextWord);

      if (nextWord === 'four') {
        break;
      }
      currentWord = nextWord;
    }
    return result;
  }
}

// console.log(numbersOfLetters(4))

// console.log(numbersOfLetters(1)) //["one", "three", "five", "four"]);
// console.log(numbersOfLetters(12)) // ["onetwo", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(37)) // ["threeseven", "onezero", "seven", "five", "four"]);
// console.log(numbersOfLetters(311)) //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(999)) //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
  if (str.length === 1) return String(parseInt(str) + 1);
  const match = str.match(/\d+$/);

  //

  if (match) {
    const prefix = str.slice(0, match.index);
    const numStr = match[0];
    const number = String(parseInt(match[0], 10) + 1);

    const preceedingZeros = numStr.length - number.length;

    const newNumStr =
      preceedingZeros > 0 ? '0'.repeat(preceedingZeros) + number : number;

    return prefix + newNumStr;
  }
  return str + '1';
}

// console.log(incrementString('foobar000'), 'foobar001')
// console.log(incrementString('foobar999'), 'foobar1000')
// console.log(incrementString('foobar00999'), 'foobar01000')
// console.log(incrementString('foo'), 'foo1')
// console.log(incrementString('foobar001'), 'foobar002')
// console.log(incrementString('foobar1'), 'foobar2')
// console.log(incrementString('1'), '2')
// console.log(incrementString('009'), '010')
// console.log(incrementString('fo99obar99'), 'fo99obar100')

// DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// unluckyDays takes in an integer value as a year. is there any chance we get anything other than an integer or an invalid value? it will always be years? okay.
// return the number of days in the given year that is 13th and friday as well.

function unluckyDays(year) {
  //your code here
  let count = 0;

  // find the number of days in a year that are 13
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    console.log(date);
    if (date.getDay() === 5) {
      count++;
    }
  }
  return count;
}

// console.log(unluckyDays(2015))
// console.log(unluckyDays(1986))

// sortList
// takes in a list of object and a sortby(value)
// return the list of objects sorted in descending order by the sortvalue

function sortList(list, sortBy) {
  // iterate through the input using the map method
  return list.sort((item1, item2) => item2[sortBy] - item1[sortBy]);
}

const inputSort = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];

// console.log(sortList(inputSort, 'a'))
// console.log(sortList(inputSort, 'b'))

// modifyMultiply
// takes in a string, an integer => index string, an integer => the number of times the string at the index is to be multiplied
// returns a string of the word at the first integer argument multiplied by the second integer argument joined together with an hyphen

function modifyMultiply(str, loc, num) {
  str = str.split(' ');

  return Array(num).fill(str[loc]).join('-');
}

// console.log(modifyMultiply('This is a string', 3, 5))
// console.log(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10));
// console.log(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",1 ,1), "means");
// console.log(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8), "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance");
// console.log(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5), "around-around-around-around-around");

function shorterReverseLonger(str1, str2) {
  const reverseStr = (str) => str.split('').reverse().join('');

  return str1.length >= str2.length
    ? str2 + reverseStr(str1) + str2
    : str1 + reverseStr(str2) + str1;
}

// console.log(shorterReverseLonger('first', 'abcde') === 'abcdetsrifabcde')
// console.log(shorterReverseLonger('hello', 'bau') === 'bauollehbau')
// console.log(shorterReverseLonger('fghi', 'abcde') === 'fghiedcbafghi')
// console.log(shorterReverseLonger('hello', '') === 'olleh')
// console.log(shorterReverseLonger('', 'bau') === 'uab')
// console.log(shorterReverseLonger('', '') === '')

function test(str) {
  str = str.split(',');

  if (str.length < 3) return null;

  return str.filter((char, i) => i !== 0 && char !== str.at(-1)).join(' ');
}

// console.log(test(''), null)
// console.log(test('1'), null)
// console.log(test('A1,B2'), null)
// console.log(test('1,2,3'), '2')
// console.log(test('1,2,3,4'), '2 3')
// console.log(test('A1,B2,C3,D4,E5'), 'B2 C3 D4')
// console.log(test('A,1,23,456,78,9,Z'), '1 23 456 78 9')

// domainName(url)
// takes in a url string

function domainName(url) {
  // remove https, http://, www.
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');
  return url.split('.')[0];
}

// console.log(domainName('http://google.com'), 'google')
// console.log(domainName('http://google.co.jp'), 'google')
// console.log(domainName('www.xakep.ru'), 'xakep')
// console.log(domainName('https://youtube.com'), 'youtube')

function incrementString(str) {
  const match = str.match(/\d+/);

  console.log(match);

  if (!match) return 'matched';

  const numStr = match[0];
  const prefix = str.slice(0, match.index);

  const newNumStr = (parseInt(numStr, 10) + 1).toString();
  const preceedingZeros = numStr.length - newNumStr.length;

  if (preceedingZeros > 0) {
    return prefix + newNumStr.padStart(numStr.length, '0');
  } else {
    return prefix + newNumStr;
  }
}

// console.log(incrementString('foobar000'), 'foobar001')
// console.log(incrementString('foobar999'), 'foobar1000')
// console.log(incrementString('foobar00999'), 'foobar01000')
// console.log(incrementString('foo'), 'foo1')
// console.log(incrementString('foobar001'), 'foobar002')
// console.log(incrementString('foobar1'), 'foobar2')
// console.log(incrementString('1'), '2')
// console.log(incrementString('009'), '010')
// console.log(incrementString('fo99obar99'), 'fo99obar100')

// sort an array by the product of the index and the value.
// sortByValueAndIndex
// takes in an array of integers.
// returns the same array sorted by the multiplication of the value and it's index.
//

function sortByValueAndIndex(arr) {
  // get the product of the values and index of each item.
  // a  good data structure ought to hold and manipulate data while keeping the relationships between then.

  const arrObjects = [];

  arr.forEach((value, index) => {
    arrObjects.push({ value: value, product: value * (index + 1) });
  });
  console.log(arr, arrObjects);
  return arrObjects
    .sort((a, b) => a.product - b.product)
    .map((obj) => obj.value);
}

// console.log(sortByValueAndIndex([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]) //;
// console.log(sortByValueAndIndex([23, 2, 3, 4, 5]), [2, 3, 4, 23, 5]) //;
// console.log(sortByValueAndIndex([26, 2, 3, 4, 5]), [2, 3, 4, 5, 26]) //;
// console.log(sortByValueAndIndex([9, 5, 1, 4, 3]), [1, 9, 5, 3, 4]) //;

function towerBuilder(nFloors) {
  // build here

  const result = [];

  for (let i = 0; i < nFloors; i++) {
    const spaces = ' '.repeat(nFloors - (i + 1));
    const stars = '*'.repeat(2 * i + 1);
    result.push(spaces + stars + spaces);
  }
  return result;
}

// console.log(towerBuilder(6))

// fn sumOfIntegersInString
// takes in a string (s)
// return the sum of the integers in each string

function sumOfIntegersInString(s) {
  // create a variable for sum and current value.
  // let sum = 0
  // let cur = ''
  // // iterage through s.
  // for (let i = 0; i < s.length; i++) {
  //   const char = s[i]
  //   // check if value is a possible number. if yes add it to current value.
  //   // if not, add current value to sum and turn current value into empty string

  //   if (Number(char) || Number(char) > -1) {
  //     cur += char
  //   } else {
  //     sum += Number(cur)
  //     cur = ''
  //   }
  // }

  // sum += Number(cur)

  // return sum
  // return sum

  return s
    .match(/\d+/g)
    .map(Number)
    .reduce((sum, num) => sum + num);
}

// let exampleTests = [
//   ['12.4', 16],
//   ['h3ll0w0rld', 3],
//   ['2 + 3 = ', 5],
//   [
//     'Our company made approximately 1 million in gross revenue last quarter.',
//     1,
//   ],
//   ['The Great Depression lasted from 1929 to 1939.', 3868],
//   ['Dogs are our best friends.', 0],
//   ['C4t5 are 4m4z1ng.', 18],
//   ['The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog', 3635],
// ];

// exampleTests.forEach((test) =>
//   console.log(sumOfIntegersInString(test[0]), test[1])
// )

// fn incrementString
// takes in a string
// return the number at the end of the string incremented by 1. if theres no number, append 1
// foo => foo1
// foo23 => foo24
// foo99 => foo100

function incrementString(str) {
  const match = str.match(/(\d+)$/);

  if (match) {
    const index = match.index;
    const prefix = str.slice(0, index);
    const numStr = match[0];
    const newNumStr = String(parseInt(numStr, 10) + 1);

    const preceedingZeros = numStr.length - newNumStr.length;
    if (preceedingZeros > 0) {
      return prefix + newNumStr.padStart(numStr.length, '0');
    }

    return prefix + newNumStr;
  } else {
    return str + 1;
  }
}

// console.log(incrementString('foobar000'), 'foobar001')
// console.log(incrementString('foobar999'), 'foobar1000')
// console.log(incrementString('foobar00999'), 'foobar01000')
// console.log(incrementString('foo'), 'foo1')
// console.log(incrementString('foobar001'), 'foobar002')
// console.log(incrementString('foobar1'), 'foobar2')
// console.log(incrementString('1'), '2')
// console.log(incrementString('009'), '010')
// console.log(incrementString('fo99obar99'), 'fo99obar100')

// fn toWeirdCase
// accepts a string
// returns a new string with all the even indexed characters in each word uppercased and all odd indexed characters in each word lowercased.
// edge cases: would it contain only strings? strings and spaces.

// string => StRiNg
// Weird String Case => WeIrD StRiNg CaSe

function toWeirdCase(str) {
  // split input string by spaces to have each words seperately.
  return (
    str
      .split(' ')
      // iterate over each word.
      .map((word) =>
        word
          .split('')
          // for each word, iterate over each char.
          .map((char, i) =>
            // if char index is even, convert to uppercase
            // if char index is odd, convert to lowercase.
            i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
          )
          .join('')
      )

      // join each word together to form a string( result )
      .join(' ')
  );

  // return result
}

// console.log(toWeirdCase('string'));
// console.log(toWeirdCase('Weird string case'));

const binaryToNumber = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    result = result * 2 + value;
  }

  return result;
};

// console.log(binaryToNumber([0, 0, 0, 1]));
// console.log(binaryToNumber([0, 0, 1, 0]));

// takes in an array of objects containing information about developers.
// return an object containing the count of food options selected by the developers in the registration form

var list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
    meal: 'vegetarian',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
    meal: 'standard',
  },
  {
    firstName: 'Ramona',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
    meal: 'vegan',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
    meal: 'vegetarian',
  },
];

const orderFood = function (list) {
  // create an empty object
  const foodOptions = {};

  // iterate through each object in the list
  list.forEach((dev) => {
    const meal = dev.meal;
    console.log(meal);
    // check if the object.meal exists in the result object.
    if (foodOptions[meal]) {
      // if yes, increase the count by one
      foodOptions[meal]++;
    } else {
      // else create it and set it to one
      foodOptions[meal] = 1;
    }
  });

  return foodOptions;
};

// console.log(orderFood(list1));

// fn getIntSum
// takes in a string containing a string of letters and numbers
// returns the sum of the numbers in the string

const getIntSum = function (str) {
  // get the list of integers in the string
  const nums = str.match(/\d+/g);
  console.log(nums);
  if (!nums) {
    return 0;
  }

  return nums.map(Number).reduce((sum, num) => sum + num, 0);
};

// console.log(getIntSum('12.4'), 16);
// console.log(getIntSum('h3ll0w0rld'), 3);
// console.log(getIntSum('2 + 3 = '), 5);
// console.log(
//   getIntSum(
//     'Our company made approximately 1 million in gross revenue last quarter.'
//   ),
//   1
// );
// console.log(getIntSum('The Great Depression lasted from 1929 to 1939.'), 3868);
// console.log(getIntSum('Dogs are our best friends.'), 0);
// console.log(getIntSum('C4t5 are 4m4z1ng.'), 18);
// console.log(
//   getIntSum('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'),
//   363
// );

// fn sortByValueAndIndex
// takes in an array of numbers
// returns the array by sorting the values by the product of (value, index)

const sortWithValueAndIndex = function (arr) {
  return arr
    .map((num, i) => ({ value: num, product: num * (i + 1) }))
    .sort((a, b) => a.product - b.product)
    .map((num) => num.value);
};

// console.log(sortWithValueAndIndex([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ];
// console.log(sortWithValueAndIndex([23, 2, 3, 4, 5])); // [ 2, 3, 4, 23, 5 ];
// console.log(sortWithValueAndIndex([26, 2, 3, 4, 5])); // [ 2, 3, 4, 5, 26 ];
// console.log(sortWithValueAndIndex([9, 5, 1, 4, 3])); // [ 1, 9, 5, 3, 4 ];

// fn numbersOfLetters
// takes in an integer
// returns an array of letters of numbers till there is an equilibrium

const numbersOfLetter = function (int) {
  // create a map of numbers and their corresponding words
  const map = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const result = [];

  // convert integet to letters of numbers
  const numToWord = (num) =>
    num
      .toString()
      .split('')
      .map((value) => map[value])
      .join('');

  let current = numToWord(int);
  // check if it is an equilibrium

  while (true) {
    result.push(current);
    current = numToWord(current.length);

    if (current === 'four') {
      result.push(current);
      break;
    }
  }

  return result;
};

// console.log(numbersOfLetter(1)); //["one", "three", "five", "four"]);
// console.log(numbersOfLetter(12)); // ["onetwo", "six", "three", "five", "four"]);
// console.log(numbersOfLetter(37)); // ["threeseven", "onezero", "seven", "five", "four"]);
// console.log(numbersOfLetter(311)); //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
// console.log(numbersOfLetter(999)); //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

const bubsort = function (haystack) {
  let sorted = false;
  let n = haystack.length - 1;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < n; i++) {
      if (haystack[i] > haystack[i + 1]) {
        const temp = haystack[i];
        haystack[i] = haystack[i + 1];
        haystack[i + 1] = temp;
        sorted = false;
      }
    }
  }

  return haystack;
};

// console.log(bubsort([4.2, 3, 1, 7]));

// given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way

// takes an array of boolean values
// return the index where the crystal ball will break

const twoCrystalBall = function (arr) {
  //  iterate through the array and find the spot where it will break.,
  // to optimize performance, start from the middle of the array. using binary search.
  // except that, we have two crystal balls. so we are only allowed to break it once

  const jmpAmout = Math.floor(Math.sqrt(arr.length));
  let left = 0;
  let right = jmpAmout;

  for (let i = 0; i < arr.length; i += jmpAmout) {
    console.log(arr.slice(i, i + jmpAmout));
  }
};

// console.log(
//   twoCrystalBall([
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     true,
//     true,
//     true,
//     true,
//     true,
//     true,
//     true,
//     true,
//     true,
//   ])
// );

// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementStringg(str) {
  // get the last digits and index of the string using .match
  const match = str.match(/(\d+)$/);

  if (!match) {
    return str + 1;
  }
  const prefix = str.slice(0, match.index);

  const numStr = match[0];

  let newNumStr = (parseInt(numStr, 10) + 1).toString();
  const precedingZerosLength = numStr.length - newNumStr.length;
  let precedingZeros;

  if (precedingZerosLength > 0) {
    precedingZeros = '0'.repeat(precedingZerosLength);
    newNumStr = precedingZeros + newNumStr;
  }

  return prefix + newNumStr;
}

// console.log(incrementStringg('foobar000'), 'foobar001');
// console.log(incrementStringg('foobar999'), 'foobar1000');
// console.log(incrementStringg('foobar00999'), 'foobar01000');
// console.log(incrementStringg('foo'), 'foo1');
// console.log(incrementStringg('foobar001'), 'foobar002');
// console.log(incrementStringg('foobar1'), 'foobar2');
// console.log(incrementStringg('1'), '2');
// console.log(incrementStringg('009'), '010');
// console.log(incrementStringg('fo99obar99'), 'fo99obar100');

// DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year) {
  //your code here
  let count = 0;

  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);

    if (date.getDay() === 5) count++;
  }

  return count;
}

// console.log(unluckyDays(2015));
// console.log(unluckyDays(1986));

// DESCRIPTION:
// Time to win the lottery!
// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  // count miniWins
  let miniWins = 0;
  // check if the character code of any of the chars in the string matches the number.
  ticket.map((arr) =>
    arr[0]
      .split('')
      .map((char, i) => arr[0].charCodeAt(i))
      .map((char) => {
        if (char === arr[1]) {
          miniWins++;
        }
      })
  );
  // check if the miniwins count equals or is greater than the win

  return miniWins >= win ? 'Winner!' : 'Loser!';
}

// console.log(
//   bingo(
//     [
//       ['ABC', 65],
//       ['HGR', 74],
//       ['BYHT', 74],
//     ],
//     2
//   ),
//   'Loser!'
// );
// console.log(
//   bingo(
//     [
//       ['ABC', 65],
//       ['HGR', 74],
//       ['BYHT', 74],
//     ],
//     1
//   ),
//   'Winner!'
// );
// console.log(
//   bingo(
//     [
//       ['HGTYRE', 74],
//       ['BE', 66],
//       ['JKTY', 74],
//     ],
//     3
//   ),
//   'Loser!'
// );

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(s) {
  const match = s[0].match(/\d+/g);

  if (!match) return 0;

  return match.map(Number).reduce((sum, num) => sum + num, 0) === s[1];
}

let exampleTests = [
  ['12.4', 16],
  ['h3ll0w0rld', 3],
  ['2 + 3 = ', 5],
  [
    'Our company made approximately 1 million in gross revenue last quarter.',
    1,
  ],
  ['The Great Depression lasted from 1929 to 1939.', 3868],
  ['Dogs are our best friends.', 0],
  ['C4t5 are 4m4z1ng.', 18],
  ['The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog', 3635],
];

// exampleTests.forEach((input) => {
//   console.log(sumOfIntegersInString(input));
// });

// DESCRIPTION:
// This is a spin off of my first kata.
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(string) {
  // TODO
  string = string.split(',');

  if (string.length < 3) return null;

  return string.slice(1, -1).join(' ');
}

// console.log(array(''), null);
// console.log(array('1'), null);
// console.log(array('A1,B2'), null);
// console.log(array('1,2,3'), '2');
// console.log(array('1,2,3,4'), '2 3');
// console.log(array('A1,B2,C3,D4,E5'), 'B2 C3 D4');
// console.log(array('A,1,23,456,78,9,Z'), '1 23 456 78 9');

// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of 'white' or 'yellow'

// or 'purple' or 'red when instantiated.

// ghost = new Ghost();

// ghost.color //=> "white" or "yellow" or "purple" or "red"

class Ghostt {
  constructor() {
    this.color = ['white', 'yellow', 'purple', 'red'][
      Math.floor(Math.random() * 4)
    ];
  }
}

let newGhost = new Ghostt();

// console.log(newGhost);

// DESCRIPTION:
// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// takes in an object
// returns an array of languages sorted by their value in descending order.

function myLanguages(results) {
  return Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .filter((lang) => lang[1] >= 60)
    .map((lang) => lang[0]);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 }));

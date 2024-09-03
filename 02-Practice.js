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
  let tower = []

  for (let i = 0; i < nFloors; i++) {
    const spaces = ' '.repeat(nFloors - (i - 1))
    const stars = '*'.repeat(2 * (1 + i))
    tower.push(spaces + stars + spaces)
  }
  return tower
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
  const min = arr.indexOf(Math.min(...arr))
  return arr.filter((_, i) => i !== min)
}

// console.log(dullThings([1, 2, 3, 4, 5]));
// console.log(dullThings([5, 3, 2, 1, 4]));
// console.log(dullThings([2, 2, 1, 2, 1]));

;('use strict')

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
  )
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
  )
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
]
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
  ]
  this.fruit = ['orange', 'pineapple']
  return this
}

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
  string = string.split(',')
  if (string.length < 3) return null

  const result = string
    .filter((char, i) => i !== 0 && i !== string.length - 1)
    .join(' ')

  return result
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
  let multiples = []
  for (let i = 0; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i)
    }
  }

  console.log(multiples)
  // return the total
  return multiples.reduce((sum, num) => sum + num, 0)
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
    .join(' ')
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
  let count = 0
  for (let i = 0; i < 12; i++) {
    let date = new Date(year, i, 13)

    if (date.getDay() === 5) {
      count++
    }
  }

  return count
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
  console.log(array.join('\n'))
}

const inputArray = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
]

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
  let count = 0
  // loop through the year and get the dates that match 13
  for (let i = 0; i < 12; i++) {
    let date = new Date(year, i, 13)
    const day = date.getDay()

    day === 5 && count++
  }
  return count
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
        .map((_, i) => subArray[0].charCodeAt(i))

      return charCodes.reduce((a, b) => {
        if (b === subArray[1]) {
          return a + 1
        } else {
          return a
        }
      }, 0)
    })
    .reduce((a, b) => a + b, 0)

  return miniWins >= win ? 'Winner!' : 'Loser!'
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
  let result = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      result.pop()
    } else {
      result.push(s[i])
    }
  }

  return result.join('')
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
  let count = 0
  // ticket.map((subArray) =>
  //   subArray[0].split("").map((char, i) => subArray[0].charCodeAt(i))
  // );

  ticket.forEach((arr) => {
    // arr[0] = arr[0].split("").map((strs, i) => strs.charCodeAt(i));
    // return arr[0];

    if (arr[0].includes(String.fromCharCode(arr[1]))) {
      count++
    }
  })

  return count >= win ? 'winna' : 'loser'
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

;('use strict')

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
    .map((arr) => arr.value)
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
  let count = 0
  ticket.forEach((arr) => {
    arr[0] = arr[0].split('')
    console.log(arr[0])
    if (arr[0].includes(String.fromCharCode(arr[1]))) count++
  })
  return count >= win ? 'winna' : 'loser'
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

let colors = ['white', 'yellow', 'purple', 'red']

var Ghost = function () {
  // your code goes here
  this.color = colors[Math.floor(Math.random() * colors.length)]
  return this
}

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
    return a.split(' ')[1].localeCompare(b.split(' ')[1])
  })
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
]
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
    if (dead.every((person) => suspectInfo[key].includes(person))) return key
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
  const result = []

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
  ]

  // conver numbers to word.
  const numToWord = (num) =>
    num
      .toString()
      .split('')
      .map((number) => numbers[number])
      .join('')

  let currentWord = numToWord(num)

  if (currentWord === 'four') {
    result.push(currentWord)

    return result
  }

  result.push(currentWord)
  while (true) {
    const nextNum = numToWord(currentWord.length)

    result.push(nextNum)

    if (nextNum === 'four') {
      return result
    } else {
      currentWord = nextNum
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
  ]
  const result = []

  const numToWord = (integer) =>
    integer
      .toString()
      .split('')
      .map((num) => numbers[num])
      .join('')

  let currentWord = numToWord(integer)

  result.push(currentWord)

  if (currentWord === 'four') {
    return result
  }

  while (true) {
    const nextNum = numToWord(currentWord.length)
    result.push(nextNum)

    if (nextNum === 'four') {
      return result
    }

    currentWord = nextNum
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
  const reverseText = (str) => str.split('').reverse().join('')

  return first.length >= second.length
    ? second + reverseText(first) + second
    : first + reverseText(second) + first
}

console.log(shorterReverseLonger('first', 'abcde'), 'abcdetsrifabcde')
console.log(shorterReverseLonger('hello', 'bau'), 'bauollehbau')
console.log(shorterReverseLonger('fghi', 'abcde'), 'fghiedcbafghi')
console.log(shorterReverseLonger('hello', ''), 'olleh')
console.log(shorterReverseLonger('', 'bau'), 'uab')
console.log(shorterReverseLonger('', ''), '')

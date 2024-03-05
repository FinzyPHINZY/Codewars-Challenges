"use strict";

const { max } = require("moment");

// This file contains the katas i found tough. It will include the solutions i did without any help and improved solutions that arise to the wider scope of my knowledge as time goes on.

// DESCRIPTION:
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

function partlist(arr) {
  // your code
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    const part1 = [arr.slice(0, i)].join("");
    const part2 = [arr.slice(i)].join("");
    result.push(part1, part2);
  }
  return result;
}

// console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));

// //////////////////////////////////////////////////////////////////////////////////
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
// function seriesSum(n) {
//   for (let s = 0, i = 0; i < n; i++) {
//     s += 1 / 1 + i * 3;
//   }

//   console.log(s.toFixed(2));
//   return s;
// }

// console.log(seriesSum(5));

// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  if (str.length % 2 !== 0) {
    str += "_";
  }
  let result = [];

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  return result;
}

// console.log(solution("abc"));
// console.log(solution("abcdef"));

// DESCRIPTION:
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Test Cases:
// describe("Sample Tests", () => {
//   it("should pass some sample tests", () => {
//     assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
//     assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
//     assert.deepEqual(sortArray([]), []);
//   });
// });

function sortArray(array) {
  const odds = array.filter((num) => num % 2 !== 0).sort();

  let result = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 ? result.push(array[i]) : result.push(odds.shift());
  }

  return result;
}

// console.log(sortArray([5, 3, 2, 8, 1, 4]));

function generateShape(n) {
  return ("#".repeat(n) + "\n").repeat(n);
}

// console.log(generateShape(3));

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
[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********",
];

function towerBuilder(nFloors) {
  // build here

  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - i + 1);
    const stars = "*".repeat(2 * i + 1);
    tower.push(spaces + stars + spaces);
  }

  return tower;
}

// console.log(towerBuilder(16));

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example

filter_list([1, 2, "a", "b"]) == [1, 2];
filter_list([1, "a", "b", 0, 15]) == [1, 0, 15];
filter_list([1, 2, "aasf", "1", "123", 123]) == [1, 2, 123];

function filter_list(arr) {
  return arr.filter((char) => typeof char === "number");
}

// console.log(filter_list([1, 2, "a", "b"]));
// console.log(filter_list([1, "a", "b", 0, 15]));
// console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

// DESCRIPTION:
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

function comp(a, b) {
  return a.map((num) => num * num).every((num) => b.includes(num));
}

// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//   )
// );

// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [132, 14641, 20736, 361, 25921, 361, 20736, 361]
//   )
// );

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
    let day = new Date(year, month, 13);
    if (day.getDay() === 5) count++;
  }

  return count;
}

// console.log(unluckyDays(2015));
// console.log(unluckyDays(1986));

// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  // ...
  if (n < 10) return n;

  let sum = n
    .toString()
    .split("")
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
  // console.log(sum);

  return digitalRoot(sum);
}

// console.log(digitalRoot(16));
// console.log(digitalRoot(942));
// console.log(digitalRoot(132189));
// console.log(digitalRoot(493193));

// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  //code me
  let count = 0;
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((sum, num) => sum * num, 1);
    count++;
  }
  return count;
}

// console.log(persistence(39));
// console.log(persistence(999));
// console.log(persistence(4));

// DESCRIPTION:
// In the following 6 digit number:
// 283910
// 91 is the greatest sequence of 2 consecutive digits.
// In the following 10 digit number:
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.
// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits) {
  if (digits.length <= 5) return digits;
  digits = digits.toString();

  let arr = [];
  for (let i = 0; i <= digits.length - 5; i++) {
    arr.push(digits.slice(i, i + 5));
  }
  return Math.max(...arr.map(Number));
}

// console.log(solution(1234567890));

// DESCRIPTION:
// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
  return Object.entries(results)
    .filter((lang) => lang[1] >= 60)
    .map((lang) => lang[0]);
}

// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
// console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
// console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }));

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

function test(num) {
  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// console.log(test(10));

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(arr) {
  arr = arr.sort();

  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[1];
}

// console.log(stray([1, 1, 2]));
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// DESCRIPTION:
// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".

function meeting(s) {
  // TO uppercase
  s = s
    .toUpperCase()
    // gives it sorted in alphabetical order by last name.
    .split(";")
    .map((name) => name.split(":").reverse().join(", "))
    .sort()
    .join("")("");
  // When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
  return s;
}

// console.log(
//   meeting(
//     "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
//   )
// );

// DESCRIPTION:
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

function comp(a, b) {
  a.map((num) => num * num).every((num) => b.includes(num));
}

// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11][
//       (121, 14641, 20736, 361, 25921, 361, 20736, 361)
//     ]
//   )
// );
// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11][
//       (132, 14641, 20736, 361, 25921, 361, 20736, 361)
//     ]
//   )
// );
// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11][
//       (121, 14641, 20736, 36100, 25921, 361, 20736, 361)
//     ]
//   )
// );

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
    let date = new Date(year, month, 13);
    if (date.getDay() == 5) count++;
  }
  return count;
}

// console.log(unluckyDays(2015));
// console.log(unluckyDays(1986));

// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// PREP
// pARAMETERS
// RETURN
// EXAMPLES
// PSEUDO

function digitalRoot(n) {
  // ...
  if (n < 9) return n;

  let sum = n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

  return digitalRoot(sum);
}

// console.log(digitalRoot(16));
// console.log(digitalRoot(942));
// console.log(digitalRoot(132189));
// console.log(digitalRoot(493193));

// DESCRIPTION:
// In the following 6 digit number:
// 283910
// 91 is the greatest sequence of 2 consecutive digits.
// In the following 10 digit number:
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.
// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// PREP

function solution(digits, length) {
  // split the numbers into 5 sequential digits using loops and put them into and array
  let array = [];
  for (let i = 0; i <= digits.length - length; i++) {
    let sequence = digits.slice(i, i + length);
    array.push(sequence);
  }

  // return the highest digit in the array
  ////// convert array elements to integers
  array = array.map(Number);
  return Math.max(...array);
  // return highestSequence;
}

// console.log(solution("1234567890", 5));
// console.log(solution("283910", 2));

// DESCRIPTION:
// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".

// prep

function meeting(s) {
  // split the names into individuals

  let names = s.split(";");

  // loop through the names and reverse them
  names = names
    .map((name) => name.split(":").reverse().join(", "))
    .sort()
    .join(")(");

  return `(${names})`;
}

// console.log(
//   meeting(
//     "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
//   )
// );

// DESCRIPTION:
// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
  // split results
  // filter by key[value]
  return Object.entries(results)
    .filter(([key, value]) => value > 50)
    .sort((a, b) => b[1] - a[1]);
}

// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
// console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
// console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }));

// DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  text = text.toLowerCase();
  let count = 0;
  let used = [];
  text.split("").forEach((letter) => {
    if (!used.includes(letter) && text.split(letter).length - 1 > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
}

// console.log(duplicateCount("abcde"));
// console.log(duplicateCount("aabbcde"));
// console.log(duplicateCount("aabBcde"));
// console.log(duplicateCount("indivisibility"));
// console.log(duplicateCount("indivisibilities"));
// console.log(duplicateCount("aA11"));
// console.log(duplicateCount("ABBA"));

// DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(multiplicationTable(3), [
//       [1, 2, 3],
//       [2, 4, 6],
//       [3, 6, 9],
//     ]);
//   });
// });

function multiplicationTable(size) {
  let table = [];
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

// console.log(multiplicationTable(3));

// Task
// Implement a function which accepts 2 arguments: string and separator.
// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
// For example:
// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(string, seperator) {
  return string
    .split(" ")
    .map((word) => word.split("").join(seperator))
    .join(" ");
}

// console.log(splitAndMerge("My name is John", " "));
// console.log(splitAndMerge("My name is John", "-"));
// console.log(splitAndMerge("Hello World!", "."));
// console.log(splitAndMerge("Hello World!", ","));

// DESCRIPTION:
// In the following 6 digit number:
// 283910
// 91 is the greatest sequence of 2 consecutive digits.
// In the following 10 digit number:
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.
// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits) {
  // let arr = [];
  // digits = digits.toString();
  // for (let i = 0; i <= digits.length - 5; i++) {
  //   arr.push(digits.slice(i, i + 5));
  // }
  // return Math.max(...arr.map(Number));

  let maxSequence = 0;
  for (let i = 0; i <= digits.length - 5; i++) {
    let sequence = parseInt(digits.substring(i, i + 5));
    if (sequence > maxSequence) {
      maxSequence = sequence;
    }
  }
  return maxSequence;
}

// console.log(solution(1234567890));

// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function nthTerm(num) {
  for (var s = 0, i = 0; i < num; i++) {
    // console.log(i + (1 / 3 + i));
    s += 1 / (1 + i * 3);
  }
  return s.toFixed(2);
}

// console.log(nthTerm(1));
// console.log(nthTerm(2));
// console.log(nthTerm(5));

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
// * Input: [2,2,1,2,1], output = [2,2,2,1

function museum(arr) {
  const output = [];
  let min = arr.indexOf(Math.min(...arr));
  arr.forEach((num, i) => {
    if (i !== min) {
      output.push(num);
    }
  });

  return output;
}

// console.log(museum([1, 2, 3, 4, 5]));
// console.log(museum([5, 3, 2, 1, 4]));
// console.log(museum([2, 2, 1, 2, 1]));

// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function nthTerm(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }
  return sum.toFixed(2);
}

// console.log(nthTerm(1));
// console.log(nthTerm(2));
// console.log(nthTerm(5));

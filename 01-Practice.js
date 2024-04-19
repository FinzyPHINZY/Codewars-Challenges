"use strict";

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

// DESCRIPTION:
// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:
// input:
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
  return array.join("\n");
}

// console.log(
//   toCsvText([
//     [0, 1, 2, 3, 4],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34],
//   ])
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
    const date = new Date(year, month, 13); // returns every day of the year thats 13;
    if (date.getDay() === 5) count++; //5 equals friday. this logs all the dates that is on friday
  }

  return count;
}

// console.log(unluckyDays(2015));
// console.log(unluckyDays(1986));

// DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  // ...
  // split words into an array to enable sorting;
  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d+/) - b.match(/\d+/);
    })
    .join(" ");
}

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
// console.log(order(""));

// DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// describe("order", () => {
//   it("should work corectly", () => {
//     assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//     assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//     assert.strictEqual(order(""), "", "empty input should return empty string" )
//   });
// });

function order(words) {
  // ...
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d+/) - b.match(/\d+/))
    .join(" ");
}

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  // Code here!
  // split string into words
  return string.split(" ").map((word) =>
    word
      .split("")
      .map((char, i) => {
        if (i % 2 === 0) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("")
  );
}

// console.log(toWeirdCase("String"));
// console.log(toWeirdCase("Weird string case"));

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

function nthTeam(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}

// console.log(nthTeam(1));
// console.log(nthTeam(2));
// console.log(nthTeam(5));

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
  let output = [];
  for (let i = 1; i < arr.length; i++) {
    const one = arr.slice(0, i).join(" ");
    const two = arr.slice(i).join(" ");
    output.push([one, two]);
  }

  return output;
}

// console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));

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

function remove(arr) {
  const min = arr.indexOf(Math.min(...arr));
  return arr.filter((num, i) => i !== min);
}

// console.log(remove([1, 2, 3, 4, 5]));
// console.log(remove([5, 3, 2, 1, 4]));
// console.log(remove([2, 2, 1, 2, 1]));

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
    let spaces = " ".repeat(nFloors - i - 1);
    let stars = "*".repeat(2 * i + 1);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}

// console.log(towerBuilder(6));

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

  ticket.forEach((word) => {
    if (word[0].includes(String.fromCharCode(word[1]))) count++;
  });

  return count >= win ? "Winner!" : "Loser!";
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
// );
// console.log(
//   bingo(
//     [
//       ["ABC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     1
//   )
// );
// console.log(
//   bingo(
//     [
//       ["HGTYRE", 74],
//       ["BE", 66],
//       ["JKTY", 74],
//     ],
//     3
//   )
// );

// describe("Tests",()=>{
//   it('Fixed tests', ()=>{
//     assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
//     assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
//     assert.strictEqual(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
//   });
// });

// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!

function dup(s) {
  //..

  return s.map((word) => {
    let new_word = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[i + 1]) new_word += word[i];
    }
    return new_word;
  });
}

// console.log(dup(["abracadabra", "allottee", "assessee"]));
// console.log(dup(["kelless", "keenness"]));

// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

function isRotten(arr) {
  return arr.map((word) => {
    if (word.startsWith("rotten")) return word.substring(6).toLowerCase();
    return word;
  });
}

// console.log(isRotten(["apple", "rottenBanana", "apple"]));

// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!

function dup(s) {
  // s.map((word) => {
  //   for (let i = 0; i < word.length; i++) {
  //     let result = "";
  //     if (word[i] != word[i + 1]) result + word[i];
  //     return result;
  //   }
  // });

  s.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      let result = "";
      if (word[i] != word[i + 1]) result + word[i];
      return result;
    }
  });
}

// console.log(dup(["abracadabra", "allottee", "assessee"]));
// console.log(dup("kelless", "keenness"));

// describe("Basic tests", function(){
// Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
// Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
// Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
// Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
// Test.assertDeepEquals(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
// Test.assertDeepEquals(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
// Test.assertDeepEquals(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
// Test.assertDeepEquals(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);
// });

// DESCRIPTION:
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..
// For example, given the following input array:
var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];
// your function should return the following object (the order of properties does not matter):
// { vegetarian: 2, standard: 1, vegan: 1 }
// Notes:
// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

// var answer = { vegetarian: 2, standard: 1, vegan: 1 };

function orderFood(list) {
  let mealCount = {};

  list.forEach((dev) => {
    const mealOption = dev.meal;
    if (mealCount[mealOption]) {
      mealCount[mealOption]++;
    } else {
      mealCount[mealOption] = 1;
    }
  });
  return mealCount;
}

// console.log(orderFood(list1));

// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!

function dup(s) {
  //..

  return s.map((word) => {
    let result = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[i + 1]) result += word[i];
    }
    return result;
  });
  return result;
}

// console.log(dup(["kelless", "keenness"]));
// console.log(
//   dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
// );

// describe("Basic tests", function(){
// Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
// Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
// Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
// Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
// Test.assertDeepEquals(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
// Test.assertDeepEquals(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
// Test.assertDeepEquals(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
// Test.assertDeepEquals(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);
// });

// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  // Code here!
  return string.split(" ").map((word) => {
    return word
      .split("")
      .map((char, i) => {
        if (i % 2 !== 0) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join("");
  });
}

// P: takes in a string argument
// R: returns a new string with words uppercased and lowercased according to their index
// E:  "String" => "StRiNg"
// P:
// console.log(toWeirdCase("String"));
// console.log(toWeirdCase("Weird string case"));

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
    .filter((res) => res[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map((res) => res[0]);
  // for (const result of Object.entries(results)) {
  //   console.log(result);
  // }
}

// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
// console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
// console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }));

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
  string = string.split(",");

  if (string.length < 3) return null;

  return string
    .filter((char, i) => i !== 0 && i !== string.length - 1)
    .join(" ");
}

// console.log(array(""));
// console.log(array("1"));
// console.log(array("A1,B2"));
// console.log(array("1,2,3"));
// console.log(array("1,2,3,4"));
// console.log(array("A1,B2,C3,D4,E5"));
// console.log(array("A,1,23,456,78,9,Z"));

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
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push([arr.slice(0, i).join(" ")], [arr.slice(i).join(" ")]);
  }
  return result;
}

// console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));

// PREP:
// P: Function takes in an array of words
// R: Return an array of arrays containing the words
// E: just above
// P: create a return arr.loop through the array and add a sliced array of the current word index to the loop index

// DESCRIPTION:
// Time to win the lottery!
// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
// Example ticket:
// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  ticket.map((arr) => arr[0].split("").map((char) => char.charCodeAt(0)));
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
// );
// // console.log(
//   bingo(
//     [
//       ["ABC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     1
//   ),
//   "Winner!"
// );
// console.log(
//   bingo(
//     [
//       ["HGTYRE", 74],
//       ["BE", 66],
//       ["JKTY", 74],
//     ],
//     3
//   ),
//   "Loser!"
// );

// You are to write a function that takes a string as its first parameter. This string will be a string of words.
// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.
// Example
// modifyMultiply("This is a string", 3, 5);

// describe("Tests", () => {
//   it("test", () => {
//   Test.assertEquals(modifyMultiply("This is a string",3 ,5), "string-string-string-string-string", "The string is incorrect");
//   Test.assertEquals(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10), "that-that-that-that-that-that-that-that-that-that");
//   Test.assertEquals(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",1 ,1), "means");
//   Test.assertEquals(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8), "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance");
//   Test.assertEquals(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5), "around-around-around-around-around");

//   });
// });

function modifyMultiply(str, loc, num) {
  //Code here
  return str
    .split(" ")
    .filter((word, i) => i === loc)
    .map((word) => Array(num).fill(word).join("-"))
    .join("");
}

// console.log(modifyMultiply("This is a string", 3, 5));

// PREP
// P: takes in three arguments - str, loc , num. 'str is a string, loc and nums are numbers
// R: returns a string str[loc] times num

// Task
// Implement a function which accepts 2 arguments: string and separator.
// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
// For example:
// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(str, sep) {
  return str
    .split(" ")
    .map((word) => word.split("").join(sep))
    .join(" ");
}

// console.log(splitAndMerge("My name is John", " "));
// console.log(splitAndMerge("My name is John", "-"));
// console.log(splitAndMerge("Hello World!", "."));
// console.log(splitAndMerge("Hello World!", ","));

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

  for (const char of s) {
    if (char === "#") {
      result.pop();
    } else {
      result.push(char);
    }
  }
  return result;
}

// console.log(cleanString("abc#d##c"));
// console.log(cleanString("abc####d##c#"));

// Description:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(str) {
  if (str.length % 2 === 1) {
    return str.charAt(str.length / 2);
  } else {
    const char1 = str.charAt(str.length / 2 - 1);

    const char2 = str.charAt(str.length / 2);
    return char1.concat(char2);
  }
}

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));
// console.log(getMiddle("A"));
// console.log(getMiddle("goat"));
// console.log(getMiddle("yes"));

// You are to write a function that takes a string as its first parameter. This string will be a string of words.
// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.
// Example
// modifyMultiply ("This is a string", 3, 5)

function modifyMultiply(str, loc, num) {
  //Code here
  str = str.split(" ").filter((word, i) => i == loc);
  return Array(num).fill(str).join("-");
}

// console.log(modifyMultiply("This is a string", 3, 5));
// console.log(
//   modifyMultiply(
//     "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
//     8,
//     10
//   )
// );
// console.log(
//   modifyMultiply(
//     "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",
//     1,
//     1
//   )
// );
// console.log(
//   modifyMultiply(
//     "Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care."
//   ),
//   6,
//   8
// );
// console.log(
//   modifyMultiply(
//     "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyabble than the destination."
//   ),
//   2,
//   5
// );

// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  const output = [];
  str = str.length % 2 === 0 ? str : (str += "_").split("");

  for (let i = 0; i < str.length; i += 2) {
    output.push(str[i] + str[i + 1]);
  }
  return output;
}

// console.log(solution("abc"));
// console.log(solution("abcdef"));

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

  for (const char of s) {
    if (char === "#") {
      result.pop();
    } else {
      result.push(char);
    }
  }

  return result;
}

// console.log(cleanString("abc#d##c"));
// console.log(cleanString("abc####d##c#"));

// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  // Code here!
  return string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, i) => {
          if (i % 2 === 0) {
            return char.toUpperCase();
          } else {
            return char.toLowerCase();
          }
        })
        .join("")
    )
    .join(" ");
}

// console.log(toWeirdCase("String"));
// console.log(toWeirdCase("Weird string case"));

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
    const spaces = " ".repeat(nFloors - i - 1);
    const stars = "*".repeat(2 * i + 1);
    tower.push(spaces + stars + spaces);
  }

  return tower;
}

// console.log(towerBuilder(6));

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  //your code here

  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "").split(".")[0];
  return url;
}

// console.log(domainName("http://google.com")); //, "google");
// console.log(domainName("http://google.co.jp")); //, "google");
// console.log(domainName("www.xakep.ru")); // "xakep");
// console.log(domainName("https://youtube.com")); //, "youtube");
// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("http://www.zombie-bites.com"));
// console.log(domainName("https://www.cnet.com"));

// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!

function dup(s) {
  //..
  return s.map((word) =>
    word
      .split("")
      .filter((char, i) => word[i] !== word[i + 1])
      .join("")
  );
}

// console.log(
//   dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
// ); //,['codewars','picaniny','hubububo']);
// console.log(dup(["abracadabra", "allottee", "assessee"])); //,['abracadabra','alote','asese']);
// console.log(dup(["kelless", "keenness"])); //, ['keles','kenes']);
// console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])); //, ['Wolomolo','flodoromonlighters','chuchchi']);
// console.log(dup(["adanac", "soonness", "toolless", "ppellee"])); //, ['adanac','sones','toles','pele']);
// console.log(dup(["callalloo", "feelless", "heelless"])); //, ['calalo','feles','heles']);
// console.log(dup(["putteellinen", "keenness"])); //, ['putelinen','kenes']);
// console.log(dup(["kelless", "voorraaddoosspullen", "achcha"])); //, ['keles','voradospulen','achcha']);

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

function findMissingLetter(array) {
  const letter =
    array[0] === array[0].toUpperCase()
      ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      : "abcdefghijklmopqrstuvwxyz";

  const firstIndex = letter.indexOf(array[0]);
  const lastIndex = firstIndex + array.length + 1;

  return letter
    .slice(firstIndex, lastIndex)
    .split("")
    .filter((char) => !array.includes(char))
    .join("");
}

// console.log(findMissingLeTter(["a", "b", "c", "d", "f"])); // 'e'
// console.log(findMissingLetter(["O", "Q", "R", "S"])); // 'P'

// PREP
// P: Takes in an array of characters which  might be in upperCase or lowerCase
// R: returns a letter thats missing from the correct sequence
// E: up there
// P: get the index of array[0] and add the array length to it

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  //your code here
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

// console.log(domainName("http://google.com")); // "google");
// console.log(domainName("http://google.co.jp")); // "google");
// console.log(domainName("www.xakep.ru")); //, "xakep");
// console.log(domainName("https://youtube.com")); //"youtube");

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
  let output = [];
  for (const char of s) {
    if (char === "#") {
      output.pop();
    } else {
      output.push(char);
    }
    console.log(output);
  }

  return output.join("");
}

// console.log(cleanString("abc#d##c")); //, 'ac');
// console.log(cleanString("abc####d##c#")); //, '');
// console.log(cleanString("###abc#abc#d##c"));

// PREP:
// P: Function takes in a string containing different alphabetic and  multiple octothorpe character
// R: returns a string containing the remainder of the string after each octothorpe character has been used as a backspace
// E: Lime 1851
// P: Loop through the string argument,
// if the char is an octothorpe character, remove the last character in the output array. else add the char to the output array

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
    result.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
  }
  return result;
}

// console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));

// PREP:
// P: takes in an array of strings
// R: returns an array of arrays containing a divided non empty array of strings
// E: Line 1888
// P: loop through the input array of strings;
// divide the array using sequences of positions

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function oddNum(arr) {
  arr = arr.sort((a, b) => a - b);

  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}

// console.log(oddNum([1, 1, 2])); // 2
// console.log(oddNum([17, 17, 3, 17, 17, 17, 17])); // 3

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
    arr[0] = arr[0].split("").map((char, i) => arr[0].charCodeAt(i));
    if (arr[0].includes(arr[1])) count++;
  });
  return count >= win ? "Winner!" : "Loser!";
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
//); //, 'Loser!');
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
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  //code me
  let count = 0;

  while (num > 10) {
    count++;
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b, 1);
  }

  return count;
}

// console.log(persistence(39));
// console.log(persistence(999));
// console.log(persistence(4));

// DESCRIPTION:
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(arr) {
  const oddNumbers = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  const evenNumbers = arr.filter((num) => num % 2 === 0);

  return arr.map((num) => (num % 2 == 0 ? num : oddNumbers.shift()));
}

// console.log(sortArray([7, 1])); // [1, 7]
// console.log(sortArray([5, 8, 6, 3, 4])); //  [3, 8, 6, 5, 4]
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// console.log(sortArray([5, 3, 2, 8, 1, 4])); //, [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0])); //, [1, 3, 5, 8, 0]);
// console.log(sortArray([])); // , []);

// DESCRIPTION:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function countVowel(str) {
  const vowels = "aeiou";
  str = str.toLowerCase();

  // return str.split("").filter((char) => vowels.includes(char)).length;

  return str.split("").reduce((a, b) => {
    if (vowels.includes(b)) {
      return (a += 1);
    } else {
      return a;
    }
  }, 0);
}

// console.log(countVowel("return"));
// console.log(countVowel("lowercase"));
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
//     meal: 'vegetarian' },
// ];
// your function should return the following object (the order of properties does not matter):
// { vegetarian: 2, standard: 1, vegan: 1 }
// Notes:
// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

var answer = { vegetarian: 2, standard: 1, vegan: 1 };

function orderFood(list) {
  // your code here
  let result = {};
  for (let i = 0; i < list.length; i++) {
    // console.log(list[i].meal);
    if (result[list[i].meal] === undefined) {
      result[list[i].meal] = 1;
    } else {
      result[list[i].meal] += 1;
    }
  }
  return result;
}

function orderFood(list) {
  const result = {};

  list.forEach((dev) => {
    const meal = dev.meal;

    if (result[meal] == undefined) {
      result[meal] = 1;
    } else {
      result[meal] += 1;
    }
  });
  return result;
}

// console.log(orderFood(list1)); //, answer);

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(s) {
  const numbers = "1234567890";
  let res = "";
  let sum = 0;

  for (let i = 0; i <= s.length; i += 1) {
    if (numbers.includes(s[i])) {
      res += s[i];
    } else {
      if (res !== "") {
        sum = sum + parseInt(res);
        res = "";
      }
    }
  }
  return sum;
}

// console.log(sumOfIntegersInString("12.4")); //, 16
// console.log(sumOfIntegersInString("h3ll0w0rld")); //, 3
// console.log(sumOfIntegersInString("2 + 3 = ")); //, 5
// console.log(
//   sumOfIntegersInString(
//     "Our company made approximately 1 million in gross revenue last quarter."
//   )
// ); //, 1
// console.log(
//   sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.")
// ); //, 3868
// console.log(sumOfIntegersInString("Dogs are our best friends.")); //, 0
// console.log(sumOfIntegersInString("C4t5 are 4m4z1ng.")); //, 18
// console.log(
//   sumOfIntegersInString(
//     "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
//   )
// ); //, 3635

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// function sumOfIntegersInString(s) {
//   const numbers = "1234567890";
//   let num = "";
//   let sum = 0;

//   for (let i = 0; i <= s.length; i += 1) {
//     if (numbers.includes(s[i])) {
//       num += s[i];
//     } else {
//       if (num !== "") {
//         sum += parseInt(num);
//         num = "";
//       }
//     }
//   }

//   return sum; // what the function name says
// }

function sumOfIntegersInString(s) {
  const numbers = "1234567890";
  let res = "";
  let sum = 0;
  for (let i = 0; i <= s.length; i += 1) {
    if (numbers.includes(s[i])) {
      res += s[i];
    } else {
      if (res !== "") {
        sum = sum + parseInt(res);
        res = "";
      }
    }
  }
  return sum;
}

// console.log(sumOfIntegersInString(["12.4"])); // , 16]
// console.log(sumOfIntegersInString(["h3ll0w0rld"])); //, 3]))
// console.log(sumOfIntegersInString(["2 + 3 = "])); //, 5]))
// console.log(
//   sumOfIntegersInString([
//     "Our company made approximately 1 million in gross revenue last quarter.",
//   ])
// ); //, 1]))
// console.log(
//   sumOfIntegersInString(["The Great Depression lasted from 1929 to 1939."])
// ); //, 3868]))
// console.log(sumOfIntegersInString(["Dogs are our best friends."])); //, 0]))
// console.log(sumOfIntegersInString(["C4t5 are 4m4z1ng."])); //, 18]))
// console.log(
//   sumOfIntegersInString([
//     "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog",
//   ])
// ); //, 3635]))

// DESCRIPTION:
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
//     meal: 'vegetarian' },
// ];
// your function should return the following object (the order of properties does not matter):
// { vegetarian: 2, standard: 1, vegan: 1 }
// Notes:
// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

// describe("Tests", () => {
//   it("test", () => {
var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

//   });
// });

function orderFood(list) {
  let answer = {};
  list.forEach((dev) => {
    console.log(dev.meal);

    if (answer[dev.meal]) {
      answer[dev.meal] += 1;
    } else {
      answer[dev.meal] = 1;
    }
  });

  return answer;
}

// console.log(orderFood(list1)); // answer = { vegetarian: 2, standard: 1, vegan: 1 };

// PREP:
// P: Takes in an array of objects containing information about developers attending the event and their meal preferences
// R: Returns an object containing count of each food options
// E: Above
// P: Loop through each array
// For each object, check if dev.meal already exists in the answer object.
// If yes, increment dev.meal in the answer object by 1
// Else, create a new dev.meal in the answer object and store it's value as 1

// DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  // ...
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/)) // match(/\d+/) and match(/\d/) aren't the same. the first matches one more consecutive digis while the latter matches just one
    .join(" ");
}

// console.log(order("is2 Thi1s T4est 3a")); //, "Thi1s is2 3a T4est")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //, "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order("")); //, "", "empty input should return empty string" )

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  //your code here
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "").split(".")[0];

  return url;
}

// console.log(domainName("http://google.com")); //, "google");
// console.log(domainName("http://google.co.jp")); //, "google");
// console.log(domainName("www.xakep.ru")); //, "xakep") //;
// console.log(domainName("https://youtube.com")); //,  "youtube");

// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!

// function dup(s) {
//   //..
//   return s.map((str) => {
//     let output = "";
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//         output += "";
//       } else {
//         output += str[i];
//       }
//     }

//     return output;
//   });
// }

function dup(s) {
  return s.map((str) => {
    return str
      .split("")
      .filter((char, i) => char !== str[i + 1])
      .join("");
  });
}

// console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])); //,['codewars','picaniny','hubububo']);
// console.log(dup(["abracadabra", "allottee", "assessee"])); //,['abracadabra','alote','asese']);
// console.log(dup(["kelless", "keenness"])); //, ['keles','kenes']);
// console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])); //, ['Wolomolo','flodoromonlighters','chuchchi']);
// console.log(dup(["adanac", "soonness", "toolless", "ppellee"])); //, ['adanac','sones','toles','pele']);
// console.log(dup(["callalloo", "feelless", "heelless"])); //, ['calalo','feles','heles']);
// console.log(dup(["putteellinen", "keenness"])); //, ['putelinen','kenes']);
// console.log(dup(["kelless", "voorraaddoosspullen", "achcha"])); //, ['keles','voradospulen','achcha']);

// PREP:
// P: Takes in an array of strings.
// R: Returns input array containing same strings but with repeated values removed
// E: Provided above
// P: Use a map function to manipulate each element in the array
// P: Loop through each string
// P: Check if each letter is the same as the next.
// P: If yes, return '' else return the char

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
  for (let i = 0; i < nFloors.length; i++) {
    const spaces = " ".repeat(nFloors - i + 1);
    const stars = "*".repeat(2 * (i + 1));
    const floor = spaces + stars + spaces;

    tower.push(floor);
  }
  return tower;
}

// console.log(towerBuilder(6));

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

function removeSmallest(arr) {
  // your code here
  const min = arr.indexOf(Math.min(...arr));
  return arr.filter((num, i) => i !== min);
}

// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([5, 3, 2, 1, 4]));
// console.log(removeSmallest([2, 2, 1, 2, 1]));

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
  //code here
  arr = arr.sort((a, b) => b - a);
  arr = new Set(arr);

  return [...arr].slice(0, 2);
}

// console.log(twoHighest([])); //, [])
// console.log(twoHighest([15])); //, [15])
// console.log(twoHighest([15, 20, 20, 17])); //, [20, 17])
// console.log(
//   twoHighest([
//     67512, 3074, 12811, 12239, 25921, 21664, 19780, 95875, 71359, 85466, 36894,
//     11177, 13197, 95875, 75104, 71915, 7095, 25945, 8608, 88147, 60532, 29569,
//   ])
// ); //: expected [ 95875, 95875 ] to deeply equal [ 95875, 88147 ]

// DESCRIPTION:
// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

function meeting(x) {
  // your code here
  const emptyRoom = x.find((room) => room === "O");
  return emptyRoom == undefined ? "None available!" : x.indexOf(emptyRoom);
}

// console.log(meeting(["X", "O", "X"])); //, 1);
// console.log(meeting(["O", "X", "X", "X", "X"])); //, 0);
// console.log(meeting(["X", "X", "X", "X", "X"])); //, 'None available!');

// PREP
// P: Takes in an array of rooms
// R: Returns the index of the first empty room. If none, return "None available!"
// E: 2537 - 2539
// P: Loop through the array.

// DESCRIPTION:
// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:
// input:
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
  // return array.map((arr) => arr.join(",")).join("\n");
  return array.join("\n");
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);

// PREP:
// P: Takes in a multi-dimensional array containing numbers
// R: returrns the arrays with the brackets removed
// E: available above
// P: Remove the brackets

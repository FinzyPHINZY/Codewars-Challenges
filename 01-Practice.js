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

console.log(generateShape(3));

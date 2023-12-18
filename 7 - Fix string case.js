"use strict";

// DESCRIPTION:
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// Test Cases:
// describe("Basic tests", function () {
//   Test.assertEquals(solve("code"), "code");
//   Test.assertEquals(solve("CODe"), "CODE");
//   Test.assertEquals(solve("COde"), "code");
//   Test.assertEquals(solve("Code"), "code");
// });

function solve(s) {
  //..
  s = s.split("");

  let lowercaseCount = 0;
  let uppercaseCount = 0;
}

console.log(solve("code"));
console.log(solve("CODe"));
console.log(solve("COde"));
console.log(solve("Code"));

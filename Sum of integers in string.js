"use strict";

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(s) {
  // Use a regular expression to match all positive integers
  const numbers = s.match(/\d+/g);
  if (!numbers) return 0;
  const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
}

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

console.log(sumOfIntegersInString("12.4")); //, 16
// console.log(sumOfIntegersInString("h3ll0w0rld")); //, 3
// console.log(sumOfIntegersInString("2 + 3 = ")); //, 5
// console.log(sumOfIntegersInString("Our company made approximately 1 million in gross revenue last quarter.")) //, 1
// console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.")) //, 3868
// console.log(sumOfIntegersInString("Dogs are our best friends.")) //, 0
// console.log(sumOfIntegersInString("C4t5 are 4m4z1ng.")) //, 18
// console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")) //, 363

"use strict";

// DESCRIPTION:
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

function explode(s) {
  // initialize result array to contain all elements
  const result = [];

  //   Split s and iterate over each element
  s.split("").forEach((num) => {
    // push each num into the result array after implementing the repeat method
    result.push(num.repeat(Number(num)));
  });

  //   Return Result
  return result.join("");
}

console.log(explode("312"));
console.log(explode("102269"));

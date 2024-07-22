"use strict";

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value) {
  //...

  const padNums = 5 - String(value).length;
  const newValue = Array(padNums).fill(0).map(Number).join("") + value;

  return `Value is ${newValue}`;
}

console.log(solution(5)); //, "Value is 00005")
console.log(solution(1204)); //, "Value is 01204")
console.log(solution(109)); //, "Value is 00109")
console.log(solution(0)); //, "Value is 00000")

// PREP
// P: Function takes in a number argument
// R: Returns a string of 'Value is ' concatenated with the number as a 5 digit padded number
// E: Available Above
// P: In javascript, theres a padstart and padend function that we can use. so thats all i'll do.

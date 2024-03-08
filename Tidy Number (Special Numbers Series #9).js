"use strict";

// DESCRIPTION:
// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// Test Cases:
// describe("Basic tests", () => {
//   Test.assertEquals(tidyNumber(12), true);
//   Test.assertEquals(tidyNumber(102), false);
//   Test.assertEquals(tidyNumber(9672), false);
//   Test.assertEquals(tidyNumber(2789), true);
//   Test.assertEquals(tidyNumber(2335), true);
// });

function tidyNumber(n) {
  //your code here
  return n == n.toString().split("").map(Number).sort().join("");
}

console.log(tidyNumber(12));
console.log(tidyNumber(102));
console.log(tidyNumber(9672));
console.log(tidyNumber(2789));
console.log(tidyNumber(2335));

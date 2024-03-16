"use strict";

// DESCRIPTION:
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(findLongest([1, 10, 100]), 100);
//     Test.assertEquals(findLongest([9000, 8, 800]), 9000);
//     Test.assertEquals(findLongest([8, 900, 500]), 900);
//   });
// });

function findLongest(array) {
  // code here
  //   convert nums to
  const strNums = [...array.map((num) => num.toString())];
  const length = strNums.map((num) => num.length);
  const highestlength = Math.max(...length);
  return Number(strNums.find((num) => num.length === highestlength));
}

console.log(findLongest([1, 10, 100]));
console.log(findLongest([9000, 8, 800]));
console.log(findLongest([8, 900, 500]));

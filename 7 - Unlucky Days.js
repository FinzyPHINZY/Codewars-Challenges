"use strict";

// DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// describe("Basic Tests",() =>{
// Test.assertEquals(unluckyDays(1586), 1, "should be: 1");
// Test.assertEquals(unluckyDays(1001), 3, "should be: 3");
// Test.assertEquals(unluckyDays(2819), 2, "should be: 2");
// Test.assertEquals(unluckyDays(2792), 2, "should be: 2");
// Test.assertEquals(unluckyDays(2723), 2, "should be: 2");
// Test.assertEquals(unluckyDays(1909), 1, "should be: 1");
// Test.assertEquals(unluckyDays(1812), 2, "should be: 2");
// Test.assertEquals(unluckyDays(1618), 2, "should be: 2");
// Test.assertEquals(unluckyDays(2132), 1, "should be: 1");
// Test.assertEquals(unluckyDays(2065), 3, "should be: 3");
// // })

function unluckyDays(year) {
  //your code here
  let count = 0;

  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) count++;
  }
  return count;
}

console.log(unluckyDays(1586));
console.log(unluckyDays(1001));
console.log(unluckyDays(2819));
console.log(unluckyDays(2792));
console.log(unluckyDays(2723));
console.log(unluckyDays(1909));
console.log(unluckyDays(1812));
console.log(unluckyDays(1618));
console.log(unluckyDays(2132));
console.log(unluckyDays(2065));

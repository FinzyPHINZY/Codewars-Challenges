"use strict";

// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

// Test Cases:
// describe("Sample Test", () => {
//     it("It is not late", () => {
//       assert.isFalse(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
//     });
//     it("It is late", () => {
//       assert.isTrue(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));
//     });
//   });

function periodIsLate(last, today, cycleLength) {
  const diff = Math.abs(last.getTime() - today.getTime());

  return diff / (1000 * 60 * 60 * 24) > cycleLength ? true : false;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));

"use strict";

// DESCRIPTION:
// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// Test Cases:
// describe("Numbers to Letters", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
//       assert.strictEqual(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw');
//       assert.strictEqual(switcher(['4', '24']), 'wc');
//     })
//   });

function switcher(x) {
  let output = "";
  const letters = "zyxwvutsrqponmlkjihgfedcba!?";
  x.forEach((num) => {
    if (parseInt(num) <= letters.length) {
      output += letters[parseInt(num) - 1];
    } else {
      output += " ";
    }
  });
  return output;
}

console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]));
console.log(
  switcher([
    "25",
    "7",
    "8",
    "4",
    "14",
    "23",
    "8",
    "25",
    "23",
    "29",
    "16",
    "16",
    "4",
  ])
);
console.log(switcher(["4", "24"]));

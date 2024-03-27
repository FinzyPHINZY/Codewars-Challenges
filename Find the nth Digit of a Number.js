"use strict";

// DESCRIPTION:
// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

// Test Cases:
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1

var findDigit = function (num, nth) {
  num = Math.abs(num).toString();

  if (num.length < nth) {
    return 0;
  } else if (nth < 1) {
    return -1;
  }
  const output = num
    .split("")
    .reverse()
    .filter((num, i) => i == nth - 1)
    .join("");

  return Number(output);
};

console.log(findDigit(5673, 4));
console.log(findDigit(129, 2));
console.log(findDigit(-2825, 3));
console.log(findDigit(-456, 4));
console.log(findDigit(0, 20));
console.log(findDigit(65, 0));
console.log(findDigit(24, -8));

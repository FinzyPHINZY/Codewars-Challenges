"use strict";

// DESCRIPTION:
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

// Test Cases:
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(usdcny(15), "101.25 Chinese Yuan");
//     assert.strictEqual(usdcny(465), "3138.75 Chinese Yuan");
//   });
// });

function usdcny(usd) {
  const result = (usd * 6.75).toFixed(2);
  return `${result} Chinese Yuan`;
}

console.log(usdcny(15));
console.log(usdcny(465));
console.log(usdcny(3018));

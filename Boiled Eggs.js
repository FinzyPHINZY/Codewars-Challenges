"use strict";

// DESCRIPTION:
// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

// Your Task
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
// Example (Input --> Output)
// 0 --> 0
// 5 --> 5
// 10 --> 10

// Test Cases:

// describe("Boiled Eggs", function () {
//   it("should calculate the cooking time", function () {
//     assert.strictEqual(cookingTime(0), 0, "0 eggs");
//     assert.strictEqual(cookingTime(5), 5, "5 eggs");
//     assert.strictEqual(cookingTime(10), 10, "10 eggs");
//   });
// });

function cookingTime(eggs) {
  // TODO
  const batches = Math.ceil(eggs / 8);
  console.log(batches);

  // Calculate the total cooking time in minutes
  const totalTime = batches * 5;

  return totalTime;
}

console.log(cookingTime(0));
console.log(cookingTime(5));
console.log(cookingTime(10));

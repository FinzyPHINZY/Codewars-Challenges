"use strict";

// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:
// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48
// pointsPer48(5, 17) // 14.1
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

function pointsPer48(ppg, mpg) {
  if (ppg === 0 && mpg === 0) return 0;

  let score = (ppg / mpg) * 48;

  return Number(Number.isInteger(score) ? score : score.toFixed(1));
}
console.log(pointsPer48(12, 20));
console.log(pointsPer48(10, 10));
console.log(pointsPer48(5, 17));
console.log(pointsPer48(0, 0));

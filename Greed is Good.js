"use strict";

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// Note: your solution must not modify the input array.

function score(dice) {
  // Fill me in!
  const counts = [0, 0, 0, 0, 0, 0, 0];

  // Count the occurrences of each dice value
  dice.forEach((value) => counts[value]++);

  // Initialize score
  let score = 0;

  // Score for three of a kind
  const triplesScores = [0, 1000, 200, 300, 400, 500, 600];

  // Add score for three of a kind
  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 3) {
      score += triplesScores[i];
      counts[i] -= 3; // Remove the three dice used for the triple
    }
  }

  // Add score for single 1s and 5s
  score += counts[1] * 100;
  score += counts[5] * 50;

  return score;
}

console.log(score([2, 3, 4, 6, 2])); //, 0); // "Incorrect answer for dice = [2, 3, 4, 6, 2]" );
console.log(score([4, 4, 4, 3, 3])); //, 400); // , "Incorrect answer for dice = [4, 4, 4, 3, 3]" );
console.log(score([2, 4, 4, 5, 4])); //, 450); // , "Incorrect answer for dice = [2, 4, 4, 5, 4]" );

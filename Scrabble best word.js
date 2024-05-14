"use strict";

// You're playing to scrabble. But counting points is hard.

// You decide to create a little script to calculate the best possible value.

// The function takes two arguments :

// `points` : an array of integer representing for each letters from A to Z the points that it pays
// `words` : an array of strings, uppercase

// You must return the index of the shortest word which realize the highest score.
// If the length and the score are the same for two elements, return the index of the first one.

var points = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10,
  10,
];

function calculateScore(word) {
  return word.split("").reduce((acc, char) => {
    return acc + points[char.charCodeAt(0) - "A".charCodeAt(0)];
  }, 0);
}

function getBestWord(points, words) {
  let bestIndex = 0;
  let highestScore = 0;
  let shortestLength = Infinity;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const score = calculateScore(word);

    if (
      score > highestScore ||
      (score === highestScore && word.length < shortestLength)
    ) {
      bestIndex = i;
      highestScore = score;
      shortestLength = word.length;
    }
  }

  return bestIndex;
}

var simpleWords = ["WHO", "IS", "THE", "BEST", "OF", "US"];
var rndmWords = [
  "NOQ",
  "TXAY",
  "S",
  "OM",
  "ESFT",
  "CJUKQ",
  "QL",
  "QO",
  "ASTK",
  "Y",
];
var firstBestWord = ["JGPCWVWFW", "JXHNKBJJG"];

console.log(getBestWord(points, simpleWords)); //,0);
console.log(getBestWord(points, rndmWords)); //,5);
console.log(getBestWord(points, firstBestWord)); //,0);

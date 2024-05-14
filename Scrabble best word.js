"use strict";

// You're playing to scrabble. But counting points is hard.

// You decide to create a little script to calculate the best possible value.

// The function takes two arguments :

// `points` : an array of integer representing for each letters from A to Z the points that it pays
// `words` : an array of strings, uppercase

// You must return the index of the shortest word which realize the highest score.
// If the length and the score are the same for two elements, return the index of the first one.

function getBestWord(points, words) {
  //Return the shortest word realizing the best score
}

var points = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10,
  10,
];
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

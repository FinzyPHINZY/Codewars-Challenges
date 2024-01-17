"use strict";

// DESCRIPTION:
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
  // Implement me!

  const charCountMap = new Map();

  for (const char of text) {
    if (charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char) + 1);
    } else {
      charCountMap.set(char, 1);
    }
  }

  const result = Array.from(charCountMap.entries()).map(([char, count]) => [
    char,
    count,
  ]);

  return result;
};

console.log(orderedCount("abracadabra"));

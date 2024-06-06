"use strict";

// Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

// sortString("foos", "of")       => "oofs"
// sortString("string", "gnirts") => "gnirts"
// sortString("banana", "abn")    => "aaabnn"
// To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

// Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.

// STRINGSSORTINGALGORITHMS

const sortString = (source, order) => {
  return order
    .split("")
    .filter((x, i, a) => a.indexOf(x) == i)
    .map((c) => source.split("").filter((i) => i === c))
    .reduce((acc, a) => acc.concat(a), [])
    .concat(source.split("").filter((c) => !order.includes(c)))
    .join("");
};

console.log(sortString("foos", "of")); //, "oofs");
console.log(sortString("string", "gnirts")); //, "gnirts");
console.log(sortString("banana", "abn")); //, "aaabnn");

// sortString :- takes in two arguments(string - string to modify, ordering - blueprint for modification).
// create return variable - empty string.
//

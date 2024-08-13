"use strict";

// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]

function uniq(a) {
  const output = [];
  a.forEach((char, i) => {
    if (char !== a[i + 1]) output.push(char);
  });
  return output;
}

console.log(uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"])); // ['a','b','c','a','b','c']);
console.log(uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"])); // ['a', 'b', 'c']);

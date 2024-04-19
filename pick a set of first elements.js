"use strict";

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples;
// var arr = ["a", "b", "c", "d", "e"];
// first(arr); //=> ['a'];
// first(arr, 2); //=> ['a', 'b']
// first(arr, 3); //=> ['a', 'b', 'c'];
// first(arr, 0); //=> [];

function first(arr, n = 1) {
  console.log(arr.slice(0, n));
  return arr.slice(0, n);
}

console.log(first(["a", "b", "c", "d", "e"])); //, ["a"]);
console.log(first(["a", "b", "c", "d", "e"], 2)); //, ["a", "b"]);
// console.log(first([958,121,@K?,WYStM,984,pzld?U,577,737,370,447]));

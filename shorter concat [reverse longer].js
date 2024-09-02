'use strict'

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// takes in 2 string parameters.
// returns a string in the form shortest string , longest string reveresed + shortest string. if both strings are equal in length, treat a as the longest

function shorterReverseLonger(a, b) {
  // find the shortest string
  const reverseString = (str) => str.split('').reverse().join('')
  return a.length >= b.length
    ? b + reverseString(a) + b
    : a + reverseString(b) + a
}

console.log(shorterReverseLonger('hey', 'hello'), 'heyollehhey')
console.log(shorterReverseLonger('cat', 'dog'), 'dogtacdog')
console.log(shorterReverseLonger('hello', 'hey'), 'heyollehhey')

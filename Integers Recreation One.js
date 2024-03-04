"use strict";

// DESCRIPTION:
// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see "Sample Tests".

// Note
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// Test Cases:
// describe('Testing...', function(){
//     it("Basic tests",function() {
//       assert.deepEqual(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
//       assert.deepEqual(listSquared(42, 250), [[42, 2500], [246, 84100]])
//       assert.deepEqual(listSquared(250, 500), [[287, 84100]])
//     })
//   })

function listSquared(m, n) {
  function getDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (i !== num / i) {
          divisors.push(num / i);
        }
      }
    }
    return divisors;
  }

  function isSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }

  function sumOfSquaredDivisors(num) {
    return getDivisors(num)
      .map((divisor) => divisor * divisor)
      .reduce((sum, square) => sum + square, 0);
  }

  let result = [];
  for (let i = m; i <= n; i++) {
    const sum = sumOfSquaredDivisors(i);
    if (isSquare(sum)) {
      result.push([i, sum]);
    }
  }

  //   return result;
}

// Sample tests
console.log(listSquared(1, 250));
console.log(listSquared(42, 250));
console.log(listSquared(250, 500));

// console.log(listSquared(1, 246));
console.log(listSquared(1, 250));
// console.log(listSquared(42, 250));
// console.log(listSquared(259, 500));

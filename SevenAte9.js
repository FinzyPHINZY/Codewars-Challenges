'use strict';

// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {
  // code here
  return str;
}

const tests = [
  ['797', '77'],
  ['7979797', '7777'],
  ['165561786121789797', '16556178612178977'],
];

tests.forEach((test) => {
  console.log(sevenAte9(test[0]), test[1]);
});

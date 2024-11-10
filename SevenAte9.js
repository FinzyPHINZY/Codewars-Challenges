'use strict';

// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {
  // code here
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== '9') {
      result += char;
    } else {
      if (str[i - 1] === '7' && str[i + 1] === '7') {
        continue;
      } else {
        result += char;
      }
    }
  }
  return result;
}

const tests = [
  ['797', '77'],
  ['7979797', '7777'],
  ['165561786121789797', '16556178612178977'],
  ['9573486979797979797979797779797979797', '957348697777777777777777'],
];

tests.forEach((test) => {
  const result = sevenAte9(test[0]);
  console.log('Result: ', result);
  console.log(result === test[1]);
});

// takes in a string of numbers
// returns the input number string excluding each digit that is = 9 and has a 7 before and after it
// it has to pass 9. only exclude 9 that has 7 before and after
// if char is not a 9 that has 7 before and after

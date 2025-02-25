// DESCRIPTION:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer, row = integer, result = []) {
  //   return ('+'.repeat(integer) + '\n').repeat(integer).trim()

  // recursive solution
  if (row === 0) return result.join('\n');

  result.push('+'.repeat(integer));

  return generateShape(integer, row - 1, result);
}

// console.log(generateShape(3));

// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
// Examples

// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

function numbersOfLetters(integer) {
  // code here...
  // create a result array.
  // convert integer to words. special rules for integers greater than 9

  const numberWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const numberToWords = (num) => {
    return num
      .toString()
      .split('')
      .map(Number)
      .map((n) => numberWords.at(n))
      .join('');
  };

  const result = [];

  let currentWord = numberToWords(integer);

  if (currentWord === 'four') {
    result.push(currentWord);

    return result;
  } else {
    while (true) {
      const nextWord = numberToWords(currentWord.length);
      result.push(nextWord);

      if (nextWord === 'four') {
        break;
      }

      currentWord = nextWord;
    }
  }

  return result;
}

console.log(numbersOfLetters(4));
console.log(numbersOfLetters(1)); //["one", "three", "five", "four"]);
console.log(numbersOfLetters(12)); // ["onetwo", "six", "three", "five", "four"]);
console.log(numbersOfLetters(37)); // ["threeseven", "onezero", "seven", "five", "four"]);
console.log(numbersOfLetters(311)); //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
console.log(numbersOfLetters(999)); //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is fou we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
// Examples

// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

function numbersOfLetters(integer) {
  // code here...
  const map = [
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
  const results = [];

  const numToWord = (num) => {
    return num
      .toString()
      .split('')
      .map((char) => map.at(Number(char)))
      .join('');
  };

  let currentWord = numToWord(integer);
  results.push(currentWord);

  if (currentWord === 'four') {
    return results;
  } else {
    // loop
    // get a nextword from the currentword and push
    // if its four, return the array and break. else change currentWord  to nextWord
    while (true) {
      const nextWord = numToWord(currentWord.length);
      results.push(nextWord);

      if (nextWord === 'four') {
        break;
      }

      currentWord = nextWord;
    }
  }
  return results;
}

console.log(numbersOfLetters(4)); // ['four']
console.log(numbersOfLetters(1)); //["one", "three", "five", "four"]);
console.log(numbersOfLetters(12)); // ["onetwo", "six", "three", "five", "four"]);
console.log(numbersOfLetters(37)); // ["threeseven", "onezero", "seven", "five", "four"]);
console.log(numbersOfLetters(311)); //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
console.log(numbersOfLetters(999)); //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

// takes in an integer
// returns an array of numbers converted to words (digits written out)
// the converstion of digits is to happen till an equilibrium is attained.
// if no equilibrium we use the length of the word to find the equilibrium

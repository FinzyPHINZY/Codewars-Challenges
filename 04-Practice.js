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

// console.log(numbersOfLetters(4));
// console.log(numbersOfLetters(1)); //["one", "three", "five", "four"]);
// console.log(numbersOfLetters(12)); // ["onetwo", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(37)); // ["threeseven", "onezero", "seven", "five", "four"]);
// console.log(numbersOfLetters(311)); //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(999)); //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

// DESCRIPTION:
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.

// Examples of returns in different languages:

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

function partlist(arr) {
  // your code
  // iterate based on arr length.
  // based on the pointer..split the arr

  const result = [];

  for (let i = 1; i < arr.length; i++) {
    const x = arr.slice(0, i).join(' ');
    const y = arr.slice(i).join(' ');

    // console.log('this is x', x);
    // console.log('this is y', y);

    result.push([x, y]);
  }

  return result;
}

// console.log(partlist(['az', 'toto', 'picaro', 'zone', 'kiwi']));

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(s) {
  const match = s.match(/\d+/g);

  if (!match) return 0;
  return match.map(Number).reduce((sum, num) => sum + num, 0); // what the function name says
}

let = exampleTests = [
  ['12.4', 16],
  ['h3ll0w0rld', 3],
  ['2 + 3 = ', 5],
  [
    'Our company made approximately 1 million in gross revenue last quarter.',
    1,
  ],
  ['The Great Depression lasted from 1929 to 1939.', 3868],
  ['Dogs are our best friends.', 0],
  ['C4t5 are 4m4z1ng.', 18],
  ['The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog', 3635],
];

exampleTests.forEach((test) => {
  console.log(sumOfIntegersInString(test[0]) === test[1]);
});

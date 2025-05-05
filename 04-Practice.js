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

const exampleTests = [
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

// exampleTests.forEach((test) => {
//   console.log(sumOfIntegersInString(test[0]) === test[1]);
// });

// DESCRIPTION:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShapeAgain(integer) {
  return `${'+'.repeat(integer)} \n`.repeat(integer);
}

function generateShapeRecursively(integer, row = integer, result = []) {
  if (row === 0) return result.join('\n');

  result.push('+'.repeat(integer));

  return generateShapeRecursively(integer, row - 1, result);
}

// console.log(generateShapeRecursively(3));

// Implement a function which accepts 2 arguments: string and separator.
// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

// fn splitAndMerge
// takes in two arguments: string and separator
// return the string splited with seperator.
// adjust for edge cases.

// iterate through string and split by space.
// iterate through each splited string and add separator in between.

function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map((str) => str.split('').join(separator))
    .join(' ');
}

// console.log(splitAndMerge('My name is John', ' '));
// console.log(splitAndMerge('My name is John', '-'));
// console.log(splitAndMerge('My name is John', '.'));
// console.log(splitAndMerge('My name is John', ','));

// Sort an array by value and index
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

function sortByValueAndIndex(array) {
  return array
    .map((num, index) => [num, num * (index + 1)])
    .sort((arr1, arr2) => arr1[1] - arr2[1])
    .map((arr) => arr[0]);
}

// console.log(sortByValueAndIndex([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ];
// console.log(sortByValueAndIndex([23, 2, 3, 4, 5])); // [ 2, 3, 4, 23, 5 ];
// console.log(sortByValueAndIndex([26, 2, 3, 4, 5])); // [ 2, 3, 4, 5, 26 ];
// console.log(sortByValueAndIndex([9, 5, 1, 4, 3])); // [ 1, 9, 5, 3, 4 ];

// takes in an array of integers
// return an array of integers. populated with the product of the input and its inddx sorted ascendingly.
// iterate through the input array - for each value. keep track of the value and its product with the index. sort using the product.

// DESCRIPTION:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer) {
  // const shape = [];
  // for (let i = 0; i < integer; i++) {
  //   let row = '';
  //   for (let j = 0; j < integer; j++) {
  //     row += '+';
  //   }

  //   shape.push(row);
  // }

  // return shape.join('\n');

  return ('+'.repeat(integer) + '\n').repeat(integer);
}

// console.log(generateShape(3));

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  // ... your code ...
  // iterate through arguments.
  // if char is not '#', add to result.
  //  else remove the last char in result

  const result = [];

  for (let char of s) {
    if (char === '#') {
      result.pop();
    } else {
      result.push(char);
    }
  }

  return result.join('');
}

// describe('cleanString', () => {
//   it('should work correctly', () => {
//     assert.strictEqual(cleanString('abc#d##c'), 'ac');
//     assert.strictEqual(cleanString('abc####d##c#'), '');
//   });
// });

// console.log(cleanString('abc#d##c'));
// console.log(cleanString('abc####d##c#'));

// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is fou we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
// Examples

// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

function numbersOfLetterss(integer) {
  // code here...
  const result = [];

  const map = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const numToString = (num) => {
    return num
      .toString()
      .split('')
      .map((x) => map[x])
      .join('');
  };

  let currentWord = numToString(integer);
  result.push(currentWord);

  if (currentWord === 'four') {
    return result;
  }

  while (currentWord !== 'four') {
    const newWord = numToString(currentWord.length);
    result.push(newWord);

    currentWord = newWord;
  }

  return result;
}

// console.log(numbersOfLetters(4));

// console.log(numbersOfLetters(1)); //["one", "three", "five", "four"]);
// console.log(numbersOfLetters(12)); // ["onetwo", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(37)); // ["threeseven", "onezero", "seven", "five", "four"]);
// console.log(numbersOfLetters(311)); //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(999)); //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

// In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.
// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.
// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000

function greatestSequenceDigits(number, query) {
  if (!number || !query) {
    return 'Invalid parameters';
  }

  const arr = [];

  const numStr = number.toString();

  for (let i = 0; i < numStr.length; ++i) {
    const val = numStr.slice(i, i + query);
    arr.push(val);
  }

  return Math.max(...arr);
}

// console.log(greatestSequenceDigits(1234567890, 5));
// console.log(greatestSequenceDigits(283910, 2));

// DESCRIPTION:
// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

// Examples
// 7 ==> return "Balanced"
// Explanation:
// middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.
// 295591 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 55
// sum of all digits to the left of the middle digit(s) -> 11
// sum of all digits to the right of the middle digit(s) -> 10
// 11 and 10 are not equal, so it's not balanced.
// 959 ==> return "Balanced"
// Explanation:
// middle digit(s): 5
// sum of all digits to the left of the middle digit(s) -> 9
// sum of all digits to the right of the middle digit(s) -> 9
// 9 and 9 are equal, so it's balanced.
// 27102983 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 02
// sum of all digits to the left of the middle digit(s) -> 10
// sum of all digits to the right of the middle digit(s) -> 20
// 10 and 20 are not equal, so it's not balanced.

// Test Cases:

// describe("Check less than thousand", function () {
//   it("Check balanced number", function () {
//     Test.assertEquals(balancedNum(7), "Balanced");
//     Test.assertEquals(balancedNum(959), "Balanced");
//     Test.assertEquals(balancedNum(13), "Balanced");
//     Test.assertEquals(balancedNum(432), "Not Balanced");
//     Test.assertEquals(balancedNum(424), "Balanced");
//   });
//   it("Check Larger number", function () {
//     Test.assertEquals(balancedNum(1024), "Not Balanced");
//     Test.assertEquals(balancedNum(66545), "Not Balanced");
//     Test.assertEquals(balancedNum(295591), "Not Balanced");
//     Test.assertEquals(balancedNum(1230987), "Not Balanced");
//     Test.assertEquals(balancedNum(56239814), "Balanced");
//   });
// });

function balancedNum(num) {
  // get middle number index

  const numStr = num.toString();

  const length = numStr.length;

  if (length < 3) return 'Balanced';

  // function to sum numbers in a string;
  const sumNums = (n) => {
    // console.log(n.split('').map(Number).reduce(()=>));
    return n
      .split('')
      .map(Number)
      .reduce((sum, num) => {
        return sum + num;
      }, 0);
  };

  // get sum of left and right numbers

  if (length % 2 !== 0) {
    const left = numStr.slice(0, length / 2);
    const right = numStr.slice(-length / 2, length);

    const leftSum = sumNums(left);
    const rightSum = sumNums(right);

    return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
  }

  const left = numStr.slice(0, length / 2 - 1);
  const right = numStr.slice(-(length / 2) + 1, length);

  const leftSum = sumNums(left);
  const rightSum = sumNums(right);

  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}

// console.log(balancedNum(7));
// console.log(balancedNum(959));
// console.log(balancedNum(13));
// console.log(balancedNum(432));
// console.log(balancedNum(424));

// console.log(balancedNum(1024));
// console.log(balancedNum(66545));
// console.log(balancedNum(295591));
// console.log(balancedNum(1230987));
// console.log(balancedNum(56239814));

// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
// Notes

//     If the array is null/nil/None or empty you should return empty array ([]).
//     The rotten fruit name will be in this camelcase (rottenFruit).
//     The returned array should be in lowercase.

// Test.assertDeepEquals(removeRotten(["apple","banana","kiwi","melon","orange"]), ["apple","banana","kiwi","melon","orange"])
// Test.assertDeepEquals(removeRotten(["rottenApple","rottenBanana","rottenApple","rottenPineapple","rottenKiwi"]), ["apple","banana","apple","pineapple","kiwi"])
// Test.assertDeepEquals(removeRotten([]), [],"empty array returns empty array")
// Test.assertDeepEquals(removeRotten(null), [],"null returns empty array")
// Test.assertDeepEquals(removeRotten(), [])
// Test.assertDeepEquals(removeRotten(["apple","rottenBanana","rottenApple","pineapple","kiwi"]), ["apple","banana","apple","pineapple","kiwi"])

// const fruit = ["apple", "tomato", "mango", "kiwi","banana", "strawberry", "melon", "blueberry",
// "rottenBlueberry", "rottenMelon", "rottenApple", "rottenTomato", "rottenMango", "rottenKiwi", "rottenBanana", "rottenStrawberry"]

function removeRotten(fruits) {
  // iterate through the fruits array.
  return fruits.map((fruit) => fruit.replace('rotten', '').toLowerCase());
}

// console.log(
//   removeRotten(['apple', 'rottenBanana', 'rottenApple', 'pineapple', 'kiwi']),
//   ['apple', 'banana', 'apple', 'pineapple', 'kiwi']
// );

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

function shorterReverseLonger(a, b) {
  // check if a and b has the same length
  // if true, return b+reversed(a)+b
  if (a.length === b.length) {
    return `${b}${a.split('').reverse().join('')}${b}`;
  }
  // else
  // find shorter
  let shorter;
  let longer;
  if (a.length > b.length) {
    shorter = b;
    longer = a;
  } else {
    shorter = a;
    longer = b;
  }
  // return shorter+reverse(longer)+shorter
  return `${shorter}${longer.split('').reverse().join('')}${shorter}`;
}

// console.log(shorterReverseLonger('first', 'abcde'), 'abcdetsrifabcde');
// console.log(shorterReverseLonger('hello', 'bau'), 'bauollehbau');
// console.log(shorterReverseLonger('fghi', 'abcde'), 'fghiedcbafghi');
// console.log(shorterReverseLonger('hello', ''), 'olleh');
// console.log(shorterReverseLonger('', 'bau'), 'uab');
// console.log(shorterReverseLonger('', ''), '');

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likeSystem(arr) {
  if (arr.length === 0) return 'no one likes this';
  if (arr.length === 1) return `${arr[0]} likes this`;
  if (arr.length === 2) return `${arr[0]} and ${arr[1]} like this`;
  if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;

  return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
}

// console.log(likeSystem([]));
// console.log(likeSystem(['Peter']));
// console.log(likeSystem(['Jacob', 'Alex']));
// console.log(likeSystem(['Max', 'John', 'Mark']));
// console.log(likeSystem(['Alex', 'Jacob', 'Mark', 'Max']));
// console.log(likeSystem(['Jacob', 'Alex', 'Alex', 'Jacob', 'Mark', 'Max']));

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

const filter_list = (arr) => {
  // takes in an array of non-negative integers and strings
  // returns a new array with the strings removed
  // iterate through the array
  // check it the value is a string
  // exclude it.

  return arr.filter((char) => typeof char === 'number');
};

// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1, 'a', 'b', 0, 15]));
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

// DESCRIPTION:
// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:

// input:
//  [[ 0, 1, 2, 3, 4 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]]

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.

function toCsvText(array) {
  // good luck
  return array.join('\n');
}

// console.log(
//   toCsvText([
//     [0, 1, 2, 3, 4],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34],
//   ])
// );

// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

function killer(suspectInfo, dead) {
  //your code here...
  // takes in two arguments; an object containing the suspects and who they saw; and an array of the victims
  // iterate through the obbject(suspectInfo) and find who has seen all the victims.

  for (const suspect in suspectInfo) {
    const isKiller = dead.every((value) =>
      suspectInfo[suspect].includes(value)
    );

    if (isKiller) return suspect;
  }
}

// console.log(
//   killer(
//     {
//       James: ['Jacob', 'Bill', 'Lucas'],
//       Johnny: ['David', 'Kyle', 'Lucas'],
//       Peter: ['Lucy', 'Kyle'],
//     },
//     ['Lucas', 'Bill']
//   )
// ); // "James"

// console.log(killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben'])); //"Megan

// DESCRIPTION:
// Time to win the lottery!
// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  // iterate through the ticket
  // for each array in ticket, convert each character in the first element to an array of character code

  const letterToCode = (char) => {
    return char.charCodeAt(0);
  };

  let totalWins = 0;

  for (const arr of ticket) {
    const convert = arr[0]
      .split('')
      .map((char) => letterToCode(char))
      .filter((val) => val === arr[1]);

    totalWins += convert.length;
  }

  console.log(totalWins);
  return totalWins >= win ? 'Winner!' : 'Loser!';
}

// console.log(
//   bingo(
//     [
//       ['ABC', 65],
//       ['HGR', 74],
//       ['BYHT', 74],
//     ],
//     2
//   ),
//   'Loser!'
// );
// console.log(
//   bingo(
//     [
//       ['ABC', 65],
//       ['HGR', 74],
//       ['BYHT', 74],
//     ],
//     1
//   ),
//   'Winner!'
// );
// // console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function oddArray(arr) {
  const sortedArr = arr.sort();

  if (sortedArr[0] === sortedArr[1]) {
    return sortedArr[sortedArr.length - 1];
  }

  return sortedArr[0];
}

// console.log(oddArray([1, 1, 2]));
// console.log(oddArray([17, 17, 3, 17, 17, 17, 17]));

// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

const sortme = (names) => {
  return names.sort((a, b) => a.toLowerCase() - b.toLowerCase());
};

// console.log(sortme(['Hello', 'there', "I'm", 'fine']), [
//   'fine',
//   'Hello',
//   "I'm",
//   'there',
// ]);
// console.log(sortme(['C', 'd', 'a', 'B']), ['a', 'B', 'C', 'd']);
// console.log(sortme(['CodeWars']), ['CodeWars']);
// console.log(sortme([]), []);

// DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year) {
  //your code here
  let dayCount = 0;
  // find the 13th day of each month
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) dayCount++;
  }

  return dayCount;
}

// console.log(unluckyDays(2015));
// console.log(unluckyDays(1986));

// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
  const match = str.match(/(\d+)$/);

  if (!match) {
    return `${str}1`;
  }

  const matchStr = str.slice(0, match.index);
  const matchNum = str.slice(match.index);

  const formattedNum = (Number(matchNum) + 1).toString();

  const zeroCount = matchNum.length - formattedNum.length;

  const preceedingZeros = '0'.repeat(zeroCount > 0 ? zeroCount : 0);

  const result = matchStr + preceedingZeros + formattedNum;

  return result;
}

// console.log(incrementString('foobar000'), 'foobar001');
// console.log(incrementString('foobar999'), 'foobar1000');
// console.log(incrementString('foobar00999'), 'foobar01000');
// console.log(incrementString('foo'), 'foo1');
// console.log(incrementString('foobar001'), 'foobar002');
// console.log(incrementString('foobar1'), 'foobar2');
// console.log(incrementString('1'), '2');
// console.log(incrementString('009'), '010');
// console.log(incrementString('fo99obar99'), 'fo99obar100');

// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:

//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//     dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!

function dup(s) {
  //..
  // fn dup
  // takes in an array (s);
  // returns the array with each element (remove duplicate consecutive characters)
  // loop through the array
  // for each item, create a result variable.
  // if(the current char is not the same with the next, add it to the vary)

  // push the result var into the output array

  const result = [];

  for (const word of s) {
    let duplicateRemoved = '';
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char !== word[i + 1]) {
        duplicateRemoved += char;
      }
    }
    result.push(duplicateRemoved);
  }

  return result;
}

// console.log(
//   dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']),
//   ['codewars', 'picaniny', 'hubububo']
// );
// console.log(dup(['abracadabra', 'allottee', 'assessee']), [
//   'abracadabra',
//   'alote',
//   'asese',
// ]);
// console.log(dup(['kelless', 'keenness']), ['keles', 'kenes']);
// console.log(dup(['Woolloomooloo', 'flooddoorroommoonlighters', 'chuchchi']), [
//   'Wolomolo',
//   'flodoromonlighters',
//   'chuchchi',
// ]);
// console.log(dup(['adanac', 'soonness', 'toolless', 'ppellee']), [
//   'adanac',
//   'sones',
//   'toles',
//   'pele',
// ]);
// console.log(dup(['callalloo', 'feelless', 'heelless']), [
//   'calalo',
//   'feles',
//   'heles',
// ]);
// console.log(dup(['putteellinen', 'keenness']), ['putelinen', 'kenes']);
// console.log(dup(['kelless', 'voorraaddoosspullen', 'achcha']), [
//   'keles',
//   'voradospulen',
//   'achcha',
// ]);

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

function partlist2(arr) {
  // your code
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const part1 = arr.slice(0, i + 1);
    const part2 = arr.slice(i + 1);

    const combined = [part1.join(' '), part2.join(' ')];
    result.push(combined);
  }

  return result;
}

// console.log(partlist2(['az', 'toto', 'picaro', 'zone', 'kiwi']));

// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is fou we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
// Examples

// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

function numbersOfLetters2(integer) {
  // code here...

  const map = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const result = [];

  const numToString = (num) => {
    return num
      .toString()
      .split('')
      .map((x) => map[x])
      .join('');
  };

  // check if current value is an equilibrium.
  // if yes; return the result.

  // else, push to the result array
  // create a while loop. if the current value is an equilibrium, return the result.
  // else, convert to newword, push to array and run again.

  let currentWord = numToString(integer);

  result.push(currentWord);

  if (currentWord === 'four') {
    return result;
  }

  while (true) {
    const newWord = numToString(currentWord.length);
    result.push(newWord);

    if (newWord === 'four') {
      break;
    }

    currentWord = newWord;
  }

  return result;
}

// console.log(numbersOfLetters2(4));

// console.log(numbersOfLetters2(1)); //["one", "three", "five", "four"]);
// console.log(numbersOfLetters2(12)); // ["onetwo", "six", "three", "five", "four"]);
// console.log(numbersOfLetters2(37)); // ["threeseven", "onezero", "seven", "five", "four"]);
// console.log(numbersOfLetters2(311)); //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
// console.log(numbersOfLetters2(999)); //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  //your code here
  //  http:// , https:// or www. with an empty string
  // split remaining string by '. and return the first value

  return url
    .replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .split('.')[0];
}

console.log(domainName('http://google.com'), 'google');
console.log(domainName('http://google.co.jp'), 'google');
console.log(domainName('www.xakep.ru'), 'xakep');
console.log(domainName('https://youtube.com'), 'youtube');

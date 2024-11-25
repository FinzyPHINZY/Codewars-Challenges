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

// console.log(numbersOfLetters(4)); // ['four']
// console.log(numbersOfLetters(1)); //["one", "three", "five", "four"]);
// console.log(numbersOfLetters(12)); // ["onetwo", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(37)); // ["threeseven", "onezero", "seven", "five", "four"]);
// console.log(numbersOfLetters(311)); //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
// console.log(numbersOfLetters(999)); //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);

// takes in an integer
// returns an array of numbers converted to words (digits written out)
// the converstion of digits is to happen till an equilibrium is attained.
// if no equilibrium we use the length of the word to find the equilibrium

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
  for (const [suspect, contacts] of Object.entries(suspectInfo)) {
    const amITheKiller = dead.every((name) => contacts.includes(name));

    if (amITheKiller) {
      return suspect;
    }
  }
}

// fn killer
// takes in an object <string, array> and an array of the dead people.
// returns a string - the object key whose array contains all the dead people.
// iterate through the object. using .every(), find the person whose name contains every dead person

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

// console.log(killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben'])); //"Megan"

// DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  // ...
  return words
    .split(' ')
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]))
    .join(' ');
}

// console.log(order('is2 Thi1s T4est 3a') === 'Thi1s is2 3a T4est');
// console.log(
//   order('4of Fo1r pe6ople g3ood th5e the2') ===
//     'Fo1r the2 g3ood 4of th5e pe6ople'
// );
// console.log(order('') === '', 'empty input should return empty string');

// DESCRIPTION:
// In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.
// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.
// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits) {
  if (digits.length < 5) {
    return digits;
  }

  // iterate through the digits.
  digits = digits.toString();
  n = digits.length;

  let maxSequence = 0;

  for (let i = 0; i <= n - 5; ++i) {
    const sequence = parseInt(digits.slice(i, i + 5));

    if (sequence > maxSequence) {
      maxSequence = sequence;
    }
  }
  return maxSequence;
}

// takes in a number
// returns the greatest consecutive 5 digits that can be found in the number
// iterate through the digits.
// create an array of 5 consecutive digits
// return the highest

// console.log(solution(1234567890));

// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function pair(str) {}

console.log(pair('abc'));
console.log(pair('abcdef'));

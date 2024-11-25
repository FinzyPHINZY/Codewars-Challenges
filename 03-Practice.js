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

console.log(
  killer(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
); // "James"

console.log(killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben'])); //"Megan"

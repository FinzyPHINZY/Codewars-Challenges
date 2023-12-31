"use strict";

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(titleCase(""), "");
//     Test.assertEquals(
//       titleCase("a clash of KINGS", "a an the of"),
//       "A Clash of Kings"
//     );
//     Test.assertEquals(
//   titleCase("THE WIND IN THE WILLOWS", "The In"),
//   "The Wind in the Willows"
// );
//     Test.assertEquals(titleCase("the quick brown fox"), "The Quick Brown Fox");
//   });
// });

// function titleCase(title, minor) {
//   let words = title.toLowerCase().split(" ");
//   let output = "";
//   if (minor) {
//     minor = minor.toLowerCase();
//     for (let word of words) {
//       // console.log(word, word.slice(1));
//       if (!minor.includes(word) ) {
//         word = word[0].toUpperCase() + word.slice(1);
//         output += " " + word;
//       } else {
//         output += " " + word;
//       }
//     }
//   } else {
//     for (let word of words) {
//       // console.log(word, word.slice(1));

//       word = word[0].toUpperCase() + word.slice(1);
//       output += " " + word;
//     }
//   }

//   return output.charAt(0).toUpperCase() + output.slice(1);
// }

// console.log(titleCase("a clash of KINGS", "a an the of"));
// console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
// console.log(titleCase("the quick brown fox"), "");

function titleCase(title, minor) {
  let words = title.toLowerCase().split(" ");
  let wordUpper = [];

  if (minor) {
    // convert minor words into lowercase
    minor = minor.toLowerCase();
    for (let w of words) {
      if (!minor.includes(w)) {
        wordUpper.push(w[0].toUpperCase() + w.slice(1));
      } else {
        wordUpper.push(w.toLowerCase());
      }
    }
  } else {
    for (let w of words) {
      wordUpper.push(w[0].toUpperCase() + w.slice(1));
    }
  }

  let result = wordUpper.join(" ");

  return result[0].toUpperCase() + result.slice(1);
}

console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"), "");

// console.log(titleCase("a clash of KINGS"));
// console.log(titleCase("THE WIND IN THE WILLOWS"));
// console.log(titleCase("the quick brown fox"));

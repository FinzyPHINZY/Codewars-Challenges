"use strict";
// Given a standard english sentence passed in as a string, write a method that will return a sentence made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

// All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.
// All words that begin with an upper case letter should come after that, and should be sorted in descending order.
// If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded.

// Example
// For example, given the input string "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!", your method should return "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut". Lower case letters are sorted a -> l -> l -> o -> o -> t and upper case letters are sorted V -> T -> O -> M -> L -> C.

function sort(sentence) {
  //...
  // Remove punctuation using a regex that matches non-alphabetic characters (except spaces)
  const cleanedSentence = sentence.replace(/[^\w\s]/g, "");

  // Split the cleaned sentence into words
  const words = cleanedSentence.split(/\s+/);

  // Separate words into lowercase and uppercase arrays
  const lowercaseWords = words.filter(
    (word) => word[0] && word[0] === word[0].toLowerCase()
  );
  const uppercaseWords = words.filter(
    (word) => word[0] && word[0] === word[0].toUpperCase()
  );

  // Sort the lowercase words in ascending order
  lowercaseWords.sort((a, b) => a.localeCompare(b));

  // Sort the uppercase words in descending order
  uppercaseWords.sort((a, b) => b.localeCompare(a));

  // Combine the sorted arrays
  const sortedWords = [...lowercaseWords, ...uppercaseWords];

  // Join the sorted words into a sentence and return
  return sortedWords.join(" ");
}

console.log(
  sort(
    "I, habitan of the Alleghanies, treating of him as he is in himself in his own rights"
  ),
  "as habitan he him himself his in in is of of own rights the treating I Alleghanies"
);
console.log(
  sort(
    "take up the task eternal, and the burden and the lesson",
    "and and burden eternal lesson take task the the the up"
  )
);
console.log(
  sort(
    "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!"
  )
), //  "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut","sentence may end with a punctuation"))
  console.log("Pioneers, O Pioneers!"); // , "Pioneers Pioneers O","sentence may end with a punctuation")

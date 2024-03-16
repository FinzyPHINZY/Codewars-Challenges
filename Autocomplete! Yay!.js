"use strict";

// DESCRIPTION:
// It's time to create an autocomplete function! Yay!

// The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

// Example:

// autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
// For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

// For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

function autocomplete(input, dictionary) {
  input = input.toLowerCase().replace(/[^a-z]/g, "");
  return dictionary
    .filter((word) => word.slice(0, input.length).toLowerCase() == input)
    .slice(0, 5);
}

console.log(
  autocomplete("ai", [
    "airplane",
    "airport",
    "airplane",
    "airport",
    "airplane",
    "airport",
    "apple",
    "ball",
  ])
);

// PREP
// P: Takes in two arguments, an input(string) and dictionary(array of strings)
// R: returns an array of strings that startsWith the input. result must not be more than 5
// E: autocomplete('ai', ['airplane','airport','apple','ball'])
// P: Loop through the dictionary and filter words that starts with the input. If result.length is more than 5, return just 5 of the elements in the result

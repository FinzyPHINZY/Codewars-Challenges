// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(inputString) {
  const wordsArray = inputString.split(" ");
  console.log(wordsArray);
  const reversedWordsArray = wordsArray.map((word) => {
    return word.split("").reverse().join("");
  });
  return reversedWordsArray.join(" ");
}

console.log(reverseWords("This is an example!")); // Output: "sihT si na !elpmaxe"
console.log(reverseWords("double  spaces")); // Output: "elbuod  secaps"

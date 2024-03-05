// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// describe("Tests", () => {
//     it("test1", () => {
//       var string = "The quick brown fox jumps over the lazy dog."
//       assert.strictEqual(isPangram(string), true)
//     })
//     it("test2", () => {
//       var string = "This is not a pangram"
//       assert.strictEqual(isPangram(string), false)
//     });
//   });

// function isPangram(str) {
//   // Convert the string to lowercase
//   str = str.toLowerCase();

//   // Create an object to store the occurrence of each letter
//   const letterCounts = {};

//   // Iterate through the string and update the letterCounts object
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (/[a-z]/.test(char)) {
//       letterCounts[char] = (letterCounts[char] || 0) + 1;
//     }
//   }

//   // Check if all 26 letters of the alphabet are present
//   return Object.keys(letterCounts).length === 26;
// }

// Test cases
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello, World!")); // false

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    console.log(string.indexOf(x) !== -1);
    return string.indexOf(x) !== -1;
  });
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram"));

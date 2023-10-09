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

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    console.log(string.indexOf(x) !== -1);
    return string.indexOf(x) !== -1;
  });
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram"));

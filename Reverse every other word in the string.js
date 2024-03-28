"use strict";

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// Test Cases:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
//   Test.assertEquals(reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")
//     });
//   });

function reverse(str) {
  //WRITE SOME MAGIC
  return str.split(" ").map((word, i) => {
    if (i % 2 !== 0) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });
}

console.log(reverse("Reverse this string, please!"));
console.log(reverse("I really don't like reversing strings!"));

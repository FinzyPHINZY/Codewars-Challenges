"use strict";

// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

// Test Cases:
// describe("Tests suite", function () {
//   it("sample tests", function () {
//     doTest("Hi!", "Hi!");
//     doTest("Hi!!!", "Hi!");
//     doTest("!Hi", "Hi!");
//     doTest("!Hi!", "Hi!");
//     doTest("Hi! Hi!", "Hi Hi!");
//     doTest("Hi", "Hi!");
//   });
// });

function remove(string) {
  //coding and coding....
  let lastIndex = string.length - 1;

  // Remove exclamation marks from the end of the string
  while (lastIndex >= 0 && string[lastIndex] === "!") {
    lastIndex--;
  }

  string = string.substring(0, lastIndex + 1);

  // Add one exclamation mark at the end of the string if needed
  if (string[lastIndex] !== "!") {
    string += "!";
  }

  return string;
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));

"use strict";

// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// Test Cases:
// it("It should works for basic tests", function () {
//   doTest("Hi!", "Hi");
//   doTest("Hi!!!", "Hi");
//   doTest("!Hi", "!Hi");
//   doTest("!Hi!", "!Hi");
//   doTest("Hi! Hi!", "Hi! Hi");
//   doTest("Hi", "Hi");
// });

function remove(string) {
  let lastChar = string.length - 1;
  if (string[lastChar] !== "!") return string;

  while (string[lastChar] === "!") {
    lastChar--;
  }

  return string.substring(0, lastChar + 1);
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));

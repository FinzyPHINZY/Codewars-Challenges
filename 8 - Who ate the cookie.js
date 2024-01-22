"use strict";

// DESCRIPTION:
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
//     Test.assertEquals(cookie(26), "Who ate the last cookie? It was Monica!");
//     Test.assertEquals(cookie(2.3), "Who ate the last cookie? It was Monica!");
//     Test.assertEquals(cookie(true), "Who ate the last cookie? It was the dog!");
//   });
// });

function cookie(x) {
  // ...
  const eater =
    typeof x === "string"
      ? "Zach"
      : typeof x === "number"
      ? "Monica"
      : "the dog";
  return `Who ate the last cookie? It was ${eater}!`;
}

console.log(cookie("Ryan"));
console.log(cookie(26));
console.log(cookie(2.3));
console.log(cookie(true));

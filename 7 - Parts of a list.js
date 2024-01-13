"use strict";

// DESCRIPTION:
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

// Test Cases;

// describe("partlist", function () {
//   it("1st Basic tests", function () {
//     testing(partlist(["I", "wish", "I", "hadn't", "come"]), [
//       ["I", "wish I hadn't come"],
//       ["I wish", "I hadn't come"],
//       ["I wish I", "hadn't come"],
//       ["I wish I hadn't", "come"],
//     ]);
//     testing(partlist(["cdIw", "tzIy", "xDu", "rThG"]), [
//       ["cdIw", "tzIy xDu rThG"],
//       ["cdIw tzIy", "xDu rThG"],
//       ["cdIw tzIy xDu", "rThG"],
//     ]);
//     testing(partlist(["vJQ", "anj", "mQDq", "sOZ"]), [
//       ["vJQ", "anj mQDq sOZ"],
//       ["vJQ anj", "mQDq sOZ"],
//       ["vJQ anj mQDq", "sOZ"],
//     ]);
//   });
// });

function partlist(arr) {
  // your code
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    const part1 = arr.slice(0, i).join(" ");
    const part2 = arr.slice(i).join(" ");
    console.log("PART1: " + part1 + "\n " + "PART2: " + part2);

    result.push([part1, part2]);
  }

  return result;
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"])); //[["I", "wish I hadn't come"],["I wish", "I hadn't come"],["I wish I", "hadn't come"],["I wish I hadn't", "come"],]

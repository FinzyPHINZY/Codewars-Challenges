"use strict";

// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

// Test Cases:
// describe("Well of Ideas - Harder Version", () => {
//     it("Testing for fixed tests", () => {
//       assert.deepEqual(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
//       assert.deepEqual(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!');
//       assert.deepEqual(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');
//     });
//   });

function well(x) {
  const goodLength = x
    .flat()
    .map((idea) => {
      if (typeof idea == "string") {
        return idea.toLowerCase();
      } else {
        return idea;
      }
    })
    .filter((idea) => idea == "good").length;

  return goodLength < 1
    ? "Fail"
    : goodLength > 2
    ? "I smell a series!"
    : "Publish!";

  //   less than 1 :fail
  //  more than 2 : series
}

console.log(
  well([
    ["bad", "bAd", "bad"],
    ["bad", "bAd", "bad"],
    ["bad", "bAd", "bad"],
  ])
);
console.log(
  well([
    ["gOOd", "bad", "BAD", "bad", "bad"],
    ["bad", "bAd", "bad"],
    ["GOOD", "bad", "bad", "bAd"],
  ])
);
console.log(
  well([["gOOd", "bAd", "BAD", "bad", "bad", "GOOD"], ["bad"], ["gOOd", "BAD"]])
);

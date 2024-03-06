"use strict";

// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Test Cases:
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(well(["bad", "bad", "bad"]), "Fail!");
//     assert.strictEqual(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
//     assert.strictEqual(
//       well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
//       "I smell a series!"
//     );
//   });
// });

function well(x) {
  // check the number of good in the array
  // we can do this by looping over the array and count
  const goods = x.reduce((acc, rad) => {
    if (rad === "good") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return goods < 1 ? "Fail!" : goods <= 2 ? "Publish!" : "I smell a series!";
}

const well = (x) => {
  const good_count = x.filter((x) => x == "good").length;
  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);

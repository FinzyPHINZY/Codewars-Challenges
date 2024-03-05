"use strict";

// DESCRIPTION:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertDeepEquals(towerBuilder(1), ["*"]);
//     Test.assertDeepEquals(towerBuilder(2), [" * ", "***"]);
//     Test.assertDeepEquals(towerBuilder(3), ["  *  ", " *** ", "*****"]);
//   });
// });

function towerBuilder(nFloors) {
  // build here
  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - i - 1);
    const stars = "*".repeat(2 * i + 1);
    const floor = spaces + stars + spaces;
    tower.push(floor);
  }

  return tower;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));

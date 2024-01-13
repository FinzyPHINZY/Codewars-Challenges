"use strict";

// Task
// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
//   you
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example (address, n --> output)
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// 1, 3 --> 6
// 3, 3 --> 4
// 2, 3 --> 5
// 3, 5 --> 8

// Test Cases:

// describe("Examples", function () {
//   it("(1,3) --> 6", function () {
//     assert.strictEqual(overTheRoad(1, 3), 6);
//   });
//   it("(3,3) --> 4", function () {
//     assert.strictEqual(overTheRoad(3, 3), 4);
//   });
//   it("2,3) --> 5", function () {
//     assert.strictEqual(overTheRoad(2, 3), 5);
//   });
//   it("(3,5) --> 8", function () {
//     assert.strictEqual(overTheRoad(3, 5), 8);
//   });
//   it("(7,11) --> 16", function () {
//     assert.strictEqual(overTheRoad(7, 11), 16);
//   });
//   it("(23633656673,310027696726) --> 596421736780", function () {
//     assert.strictEqual(overTheRoad(23633656673, 310027696726), 596421736780);
//   });
// });

function overTheRoad(address, n) {
  //code here
}

console.log(overTheRoad(1, 3));
console.log(overTheRoad(3, 3));
console.log(overTheRoad(2, 3));
console.log(overTheRoad(3, 5));
console.log(overTheRoad(7, 11));
console.log(overTheRoad(23633656673, 310027696726));

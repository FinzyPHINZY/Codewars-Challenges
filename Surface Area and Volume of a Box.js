"use strict";

// DESCRIPTION:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//  Test Cases
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(getSize(4, 2, 6), [88, 48]);
//     assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
//     assert.deepEqual(getSize(4, 2, 6)[0], 88);
//     assert.deepEqual(getSize(4, 2, 6)[1], 48);
//   });
// });

// 2lw+2lh+2hw (length * width + length * height + width * height)

function getSize(width, height, depth) {
  const surfaceArea = 2 * (depth * width + depth * height + width * height);
  const volume = width * height * depth;
  return [surfaceArea, volume];
}

console.log(getSize(4, 2, 6));
console.log(getSize(10, 10, 10));

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// describe("Tests", function () {
//   it("Basic tests", function () {
//     assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
//     assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
//     assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);
//     assert.strictEqual(findDifference([4, 4, 7], [3, 9, 3]), 31);
//     assert.strictEqual(findDifference([15, 20, 25], [10, 30, 25]), 0);
//   });
// });

function findDifference(a, b) {
  let aTimes = a[0] * a[1] * a[2];
  let bTimes = b[0] * b[1] * b[2];

  return aTimes - bTimes;
}

console.log(findDifference([4, 4, 7], [3, 9, 3]));

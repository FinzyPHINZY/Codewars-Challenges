// Description:

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//     assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//     assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//     assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
//   });
// });

function arrayPlusArray(arr1, arr2) {
  let result = 0;

  arr1.forEach((num) => {
    result += num;
  });

  arr2.forEach((num) => {
    result += num;
  });
  return result;
}

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

console.log(typeof arrayPlusArray([100, 200, 300], [400, 500, 600]));

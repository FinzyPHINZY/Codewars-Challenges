// Description:

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(solution([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10]);
//     assert.deepEqual(solution(null), []);
//     assert.deepEqual(solution([]), []);
//     assert.deepEqual(solution([20, 2, 10]), [2, 10, 20]);
//     assert.deepEqual(solution([2, 20, 10]), [2, 10, 20]);
//   });
// });
//
function solution(nums) {
  if (nums === null) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}

console.log(solution([1, 2, 3, 10, 5]));

console.log(solution([20, 2, 10]));
console.log(solution(null));

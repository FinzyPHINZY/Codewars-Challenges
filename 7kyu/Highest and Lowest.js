// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

// describe("Example tests", () => {
//   it("Test 1", () => {
//     assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//   });
//   it("Test 2", () => {
//     assert.strictEqual(highAndLow("1 2 3"), "3 1");
//   });
// });

function highAndLow(numbers) {
  // ...
  const numArray = numbers.split(" ").map(Number);
  const highest = Math.max(...numArray);
  const lowest = Math.min(...numArray);
  return highest + " " + lowest;
}

console.log(highAndLow([8, 3, -5, 42, -1, 0, 0, -9, 4, 7, 4, -4]));
console.log(highAndLow([42]));
console.log(highAndLow([1, 9, 3, 4, -5]));
console.log(highAndLow([1, 2, -3, 4, 5]));
console.log(highAndLow([1, 2, 3, 4, 5]));

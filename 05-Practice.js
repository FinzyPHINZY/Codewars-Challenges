// DESCRIPTION:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer) {
  return `${'+'.repeat(integer)}${'\n'}`.repeat(integer);
}

// console.log(generateShape(3));
// console.log(generateShape(5));

// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

function deepCount(a) {
  let count = 0;

  for (const char of a) {
    count++;
    if (Array.isArray(char)) {
      count += deepCount(char);
    }
  }

  return count;
}

console.log(deepCount([])); //, 0, "Expected 0");
console.log(deepCount([1, 2, 3])); //, 3, "Expected 3");
console.log(deepCount(['x', 'y', ['z']])); //, 4, "Expected 4");
console.log(deepCount([1, 2, [3, 4, [5]]])); //, 7, "Expected 7");
console.log(deepCount([[[[[[[[[]]]]]]]]])); //, 8, "Expected 8");

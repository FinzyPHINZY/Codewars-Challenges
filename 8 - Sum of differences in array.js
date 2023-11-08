// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  //Sort the array in descending order of the elements
  if (arr.length <= 1) return 0;

  arr = arr.sort((a, b) => b - a);

  // Initialize the sum of differences
  let sum = 0;

  // Calculate the sum of differences between consecutive pairs
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }

  return sum;
}

sumOfDifferences = (arr) =>
  arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);

console.log(sumOfDifferences([2, 1, 10])); //9
console.log(sumOfDifferences([-3, -2, -1])); //2
console.log(sumOfDifferences([-17, 17])); //34*
console.log(sumOfDifferences([])); //0
console.log(sumOfDifferences([0])); //0
console.log(sumOfDifferences([-1])); //0
console.log(sumOfDifferences([-4, -8, -7, -4])); //4
console.log(sumOfDifferences([-1, -1])); //0
console.log(sumOfDifferences([1, -12, 13, -13])); //26

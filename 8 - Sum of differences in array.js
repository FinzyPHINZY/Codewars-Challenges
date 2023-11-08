// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  //Sort the array in descending order of the elements
  arr = arr.sort((a, b) => b - a);

  //Bind calculations in variables
  let output1 = arr[0] - arr[1];
  let output2 = arr[1] - arr[2];

  return output1 + output2;
}

console.log(sumOfDifferences([2, 1, 10]));

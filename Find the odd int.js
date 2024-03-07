// Description:

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// Fundamentals

function findOdd(A) {
  let result = 0;
  for (let num of A) {
    result ^= num;
  }
  return result;
}

// result ^= num;: This line performs the XOR operation between the current value of result and the current value of num. The XOR operation is denoted by the ^ symbol. This operation is used to determine the number that appears an odd number of times in the array. Since XORing a number with itself gives 0, and XORing a number with 0 gives the number itself, only the number that appears an odd number of times will remain in the result variable after all iterations.

// Write a function that calculates the average numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length == 0) return 0;
  let result = 0;
  for (num of array) {
    result += num;
  }
  return result / array.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));

// console.log(findAverage([]));

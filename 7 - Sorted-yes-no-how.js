// ESCRIPTION:
// Complete the method which accepts an arrayay of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the arrayay are sorted in an ascending order
// "yes, descending" - if the numbers in the arrayay are sorted in a descending order
// "no" - otherwise
// You can assume the arrayay will always be valid, and there will always be one correct answer.

//Test Cases

// describe("isSortedAndHow", function() {

//     it("[1, 2]", function() {
//       Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
//     });

//     it("[15, 7, 3, -8]", function() {
//       Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
//     });

//     it("[4, 2, 30]", function() {
//       Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
//     });

//   });

function isSortedAndHow(array) {
  if (array.length <= 2) {
    if (array[0] > array[1]) {
      return "yes, descending";
    } else if (array[0] < array[1]) {
      return "yes, ascending";
    }
  } else {
    if (array[0] > array[1] && array[1] > array[2]) {
      return "yes, descending";
    } else if (array[0] < array[1] && array[1] < array[2]) {
      return "yes, ascending";
    } else {
      return "no";
    }
  }
}
console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([-8877, -2803, 1048, 4104, 5869, 7093, 9399]));

function isSortedAndHow(array) {
  // Check if the array is sorted in ascending order
  if (
    array.every((value, index, arr) => index === 0 || value >= arr[index - 1])
  ) {
    return "yes, ascending";
  }
  // Check if the array is sorted in descending order
  else if (
    array.every((value, index, arr) => index === 0 || value <= arr[index - 1])
  ) {
    return "yes, descending";
  }
  // If neither ascending nor descending, then the array is not sorted
  else {
    return "no";
  }
}

function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? "yes, descending"
    : "no";
}

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

// loop through and check if array is lesss or higher than
// function checkOrder(array) {
//   let ascendingOrder = array.sort((a, b) => a > b);
//   console.log(ascendingOrder);
//   let descendingOrder = array.sort((a, b) => b > a);
//   console.log(descendingOrder);
//   if (array === ascendingOrder) {
//     return "ascending";
//   } else if (array === descendingOrder) {
//     return "descending";
//   } else {
//     return "no";
//   }
// }

// console.log(checkOrder([1, 2]));
// console.log(checkOrder([15, 7, 3, -8]));

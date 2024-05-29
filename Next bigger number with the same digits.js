"use strict";

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
  //your code here
  // Convert the number to a string to work with the digits
  const digits = n.toString().split("");
  const len = digits.length;

  // Step 1: Find the pivot
  let pivot = -1;
  for (let i = len - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      pivot = i;
      break;
    }
  }

  // If no pivot is found, return -1 (no larger number possible)
  if (pivot === -1) return -1;

  // Step 2: Find the smallest digit on right of pivot that is larger than the pivot
  let swap = len - 1;
  for (let i = len - 1; i > pivot; i--) {
    if (digits[i] > digits[pivot]) {
      swap = i;
      break;
    }
  }

  // Step 3: Swap the pivot with this digit
  [digits[pivot], digits[swap]] = [digits[swap], digits[pivot]];

  // Step 4: Sort the digits to the right of the pivot
  const right = digits.splice(pivot + 1).sort((a, b) => a - b);
  const result = digits.concat(right).join("");

  // Convert back to number and return
  return parseInt(result, 10);
}

console.log(nextBigger(12)); //21)
console.log(nextBigger(513)); //,531)
console.log(nextBigger(2017)); //),2071)
console.log(nextBigger(414)); //,441)
console.log(nextBigger(144)); //,414)

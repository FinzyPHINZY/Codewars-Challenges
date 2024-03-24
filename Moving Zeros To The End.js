"use strict";

// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// test Cases
// moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];

function moveZeros(arr) {
  let count = 0;
  let output = [];
  arr.forEach((e) => {
    if (e === 0) {
      count++;
    } else {
      output.push(e);
    }
  });

  const zeros = [];
  for (let i = 0; i < count; i++) {
    zeros.push(0);
  }

  return output.concat(zeros);
}

function moveZeros(arr) {
  return arr
    .filter((char) => char !== 0)
    .concat(arr.filter((char) => char === 0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// PREP
// P: contains an array of various elements
// R: returns an array of elements with the zeros moved to the end of the array as well as the other elements maintaining thier orginal position
// E: moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];
// P: We can sort this in multiple ways. we can populate a new array with the elements that arent equal to zero and add an array containing zeros up to the zeros count in the function argument

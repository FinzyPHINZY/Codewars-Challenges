// "use strict";

// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

// TEst Cases:
// describe("Sum of Pairs", function(){
//     it("Example Tests", function(){
//       assert.deepEqual(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
//       assert.deepEqual(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
//       assert.deepEqual(sumPairs([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
//       assert.deepEqual(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
//       assert.deepEqual(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
//       assert.deepEqual(sumPairs([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
//       assert.deepEqual(sumPairs([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
//       assert.deepEqual(sumPairs([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");
//     });
//   });

function sumPairs(ints, s) {
  let seen = new Set();

  for (let i = 0; i < ints.length; i++) {
    let complement = s - ints[i];
    if (seen.has(complement)) {
      return [complement, ints[i]];
    }
    seen.add(ints[i]);
    console.log(seen);
  }

  return undefined;
}

// PREP
// P: takes in an arrray of numbers and a single number.
// R: returns an array containing two numbers whose sum equals the second argument
// E: [1, 4, 8, 7, 3, 15], 8) --->[1, 7]
// P: we can try it by finding the first lowest number that is less than the second argument then find a number whose addtion would equal s. we can also loop through the array and group two elements and pick the first one that matched the second argument
// Constraints: need to select the lowest number

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
console.log(sumPairs([20, -13, 40], -7));
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([4, -2, 3, 3, 4], 8));
console.log(sumPairs([0, 2, 0], 0));
console.log(sumPairs([5, 9, 13, -3], 10));

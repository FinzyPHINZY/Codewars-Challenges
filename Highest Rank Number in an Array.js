"use strict";

// DESCRIPTION:
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// Test Cases:
// describe("Sample tests", function () {
//   it("should test", function () {
//     var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
//     assert.strictEqual(highestRank(arr), 12);
//   });
// });

function highestRank(arr) {
  const frequencyMap = {};

  arr.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let maxFrequency = 0;
  let result = 0;

  for (const num in frequencyMap) {
    const frequency = frequencyMap[num];

    if (
      frequency > maxFrequency ||
      (frequency === maxFrequency && num >= result)
    ) {
      maxFrequency = frequency;
      result = Number(num);
    }
  }

  return result;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));

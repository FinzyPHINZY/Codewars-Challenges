// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// Notes

//     You may consider that there will not be any empty arrays/vectors.

let min = function (list) {
  let minValue = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < minValue) {
      minValue = list[i];
    }
  }
  return minValue;
};

let max = function (list) {
  let maxValue = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > maxValue) {
      maxValue = list[i];
    }
  }
  return maxValue;
};

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

console.log(min([4, 6, 2, 1, 9, 63, -134, 566])); // Output: 566
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // Output: -134

console.log(max([56, 30, 29, 0])); // Output: -110
console.log(min([56, 30, 29, 0])); // Output: 56

console.log(max([42, 54, 65, 87, 0])); // Output: 0
console.log(min([42, 54, 65, 87, 0])); // Output: 87

console.log(max([5])); // Output: 5
console.log(min([5])); // Output: 5

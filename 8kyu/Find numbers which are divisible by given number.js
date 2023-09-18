// Description:

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)

// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6];

function divisibleBy(numbers, divisor) {
  let arr = [];
  //   for (let i = numbers[0]; i <= numbers.length; i++) {
  //     if (i % divisor === 0) {
  //       arr.push(i);
  //     }
  //   }

  for (const num of numbers) {
    if (num % divisor === 0) {
      arr.push(num);
    }
  }
  return arr;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4));
console.log(divisibleBy([0], 4));

console.log(divisibleBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
console.log(divisibleBy([1, 3, 5], 2));

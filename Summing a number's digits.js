// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number) {
  // turn number into a string and split
  number = String(99).split("");

  let result = 0;

  number.forEach((num) => {
    result += Number(num);
  });

  return Math.abs(result);
}

console.log(sumDigits(99));

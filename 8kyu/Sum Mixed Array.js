// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += Number(x[i]);
    // console.log(result);
  }
  console.log(result);
}

sumMix([15, 20, 28, "24"]);

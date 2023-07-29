// Description:

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  // Convert the integer to a string and split it into an array of characters
  //   const digitsArray = n.toString().split("");
  const digitsArray = String(n).split("");
  console.log(digitsArray);

  // Sort the array in descending order
  const sortedDigitsArray = digitsArray.sort((a, b) => b - a);
  console.log(sortedDigitsArray);

  // Join the sorted array back into a single string
  const sortedString = sortedDigitsArray.join("");
  console.log(sortedString);

  // Convert the string back to an integer and return it
  const result = parseInt(sortedString, 10);
  return result;
}

// Test cases
console.log(descendingOrder(42145)); // Output: 54421
// console.log(descendingOrder(145263)); // Output: 654321
// console.log(descendingOrder(123456789)); // Output: 987654321

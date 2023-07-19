// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  //Good luck!
  if (a === b) {
    return a;
  }

  // Swap a and b if a is greater than b
  if (a > b) {
    [a, b] = [b, a];
  }

  // Calculate the sum of integers using the formula for the sum of an arithmetic series
  // Sum = (first_term + last_term) * number_of_terms / 2
  const numberOfTerms = Math.abs(b - a) + 1;
  console.log(numberOfTerms);
  const sumOfTerms = ((a + b) * numberOfTerms) / 2;

  return sumOfTerms;
}

console.log(getSum(7, 25));

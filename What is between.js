// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  // your code here
  let output = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      output.push(i);
    }
  }
  return output;
}

console.log(between(-2, 4));
console.log(between(1, 4));

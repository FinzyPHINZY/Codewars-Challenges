// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647
// Examples

//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

// fn groupByCommas
// takes in an integer (n)
// returns the integers seperated by commas after every 3 digits
// edge cases: n < 4? return n

const groupByCommas = function (n) {
  n = n.toString();
  if (n.length < 4) return n;

  let count = n.length;
  let result = [];
  n = n.split('').reverse();

  while (count > 3) {
    for (let i = 0; i < 3; i++) {
      result.push(n.shift());
    }
    result.push(',');
    count -= 3;
  }

  result = result.join('').concat(n.join(''));

  return result.split('').reverse().join('');
};

console.log(groupByCommas(10));
console.log(groupByCommas(1000000));
console.log(groupByCommas(35235235));

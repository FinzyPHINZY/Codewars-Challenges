// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

function century(year) {
  // Finish this :
  result = year / 100;
  return Math.ceil(result);
}

console.log(century(1901));

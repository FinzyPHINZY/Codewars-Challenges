"use strict";

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
  // code must go here
}

console.log(whatCentury("1999")); // "20th"
console.log(whatCentury("2011")); // "21st"
console.log(whatCentury("2154")); // "22nd"
console.log(whatCentury("2259")); // "23rd"
console.log(whatCentury("1124")); // "12th"
console.log(whatCentury("2000")); // "20th"
const number = Math.ceil(parseInt(year) / 100);

if (number % 100 >= 11 && number % 100 <= 13) {
  return number + "th";
}

switch (number % 10) {
  case 1:
    return number + "st";
  case 2:
    return number + "nd";
  case 3:
    return number + "rd";
  default:
    return number + "th";
}

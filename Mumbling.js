// Description:

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.
// Fundamentals
// Strings
// Puzzles

function accum(s) {
  // your code
  s = s.toUpperCase();

  // Initialize an empty array to store the modified characters
  const result = [];

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    // Create a repeated string based on the current character and position
    const repeatedChar = s[i] + s[i].toLowerCase().repeat(i);

    // Push the repeated character to the result array
    result.push(repeatedChar);
  }

  // Join the modified characters with dashes and return the result
  return result.join("-");
}

console.log(accum("abc"));

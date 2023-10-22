// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string

function alphabetPosition(text) {
  const result = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase(); // Convert to lowercase for consistent comparison

    if (char >= "a" && char <= "z") {
      const position = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
      result.push(position);
    }
  }

  return result.join(" "); // Join the positions with spaces and return as a string
}

// function alphabetPosition(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++) {
//     var code = text.toUpperCase().charCodeAt(i);
//     if (code > 64 && code < 91) result += code - 64 + " ";
//   }

//   return result.slice(0, result.length - 1);
// }

const input = "The sunset sets at twelve o' clock.";
const output = alphabetPosition(input);
console.log(output); // Output: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

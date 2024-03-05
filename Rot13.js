"use strict";

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Test Cases:

// describe("Tests", function() {
//     it("Sample tests", function() {
//       for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
//         assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
//       }
//     });
//   });

function rot13(message) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char >= "A" && char <= "Z") {
      // For uppercase letters
      result += String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
    } else if (char >= "a" && char <= "z") {
      // For lowercase letters
      result += String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
    } else {
      // For non-letter characters
      result += char;
    }
  }
  return result;
}

console.log(rot13("test"));
console.log(rot13("Test"));

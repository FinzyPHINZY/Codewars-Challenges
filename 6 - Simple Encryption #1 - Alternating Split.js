"use strict";

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// This kata is part of the Simple Encryption Series:

// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty
// Have fun coding it and please don't forget to vote and rank this kata! :-)

function encrypt(text, n) {
  if (text === "" || n <= 0) {
    return text;
  }

  for (let i = 0; i < n; i++) {
    let oddChars = "";
    let evenChars = "";

    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 1) {
        oddChars += text[j];
      } else {
        evenChars += text[j];
      }
    }

    text = oddChars + evenChars;
  }

  return text;
}

function decrypt(encryptedText, n) {
  if (encryptedText === "" || n <= 0) {
    return encryptedText;
  }

  const mid = Math.floor(encryptedText.length / 2);

  for (let i = 0; i < n; i++) {
    const oddChars = encryptedText.slice(0, mid);
    const evenChars = encryptedText.slice(mid);

    let decryptedText = "";

    for (let j = 0; j < mid; j++) {
      decryptedText += evenChars[j] + oddChars[j];
    }

    if (encryptedText.length % 2 !== 0) {
      decryptedText += evenChars[mid];
    }

    encryptedText = decryptedText;
  }

  return encryptedText;
}

// Examples
console.log(encrypt("012345", 1)); // "135024"
console.log(encrypt("012345", 2)); // "304152"
console.log(encrypt("012345", 3)); // "012345"

console.log(encrypt("01234", 1)); // "13024"
console.log(encrypt("01234", 2)); // "32104"
console.log(encrypt("01234", 3)); // "20314"

// Decryption examples
console.log(decrypt("135024", 1)); // "012345"
console.log(decrypt("304152", 2)); // "012345"
console.log(decrypt("012345", 3)); // "012345"

console.log(decrypt("13024", 1)); // "01234"
console.log(decrypt("32104", 2)); // "01234"
console.log(decrypt("20314", 3)); // "01234"

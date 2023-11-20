// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = function (text) {
  // Solution here!
  // Split the input text into words
  const words = text.split(" ");

  // Encrypt each word according to the rules
  const encryptedWords = words.map((word) => {
    if (word.length === 0) {
      return "";
    }

    const firstCharCode = word.charCodeAt(0);
    let encryptedWord = firstCharCode.toString();

    if (word.length > 1) {
      // Swap the second letter with the last letter
      encryptedWord +=
        word[word.length - 1] + word.substring(2, word.length - 1) + word[1];
    }

    return encryptedWord;
  });

  // Join the encrypted words into a string and return
  return encryptedWords.join(" ");
};

console.log(encryptThis("A"));
console.log(encryptThis("A wise old owl lived in an oak"));

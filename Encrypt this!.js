// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.

// Examples:

const encryptThis = function (text) {
  return text
    .split(' ')
    .map((word) => {
      if (word.length === 1) {
        return word.charCodeAt(0);
      } else if (word.length === 2) {
        return word.charCodeAt(0) + word[1];
      } else {
        const firstCharCode = word.charCodeAt(0);
        const secondChar = word[word.length - 1];
        const lastChar = word[1];
        return firstCharCode + secondChar + word.slice(2, -1) + lastChar;
      }
    })
    .join(' ');
};
console.log(encryptThis('Hello'), '72olle');
console.log(encryptThis('good'), '103doo');
console.log(encryptThis('hello world'), '104olle 119drlo');
console.log(encryptThis('A'), '65');
// console.log(
//   encryptThis('A wise old owl lived in an oak'),
//   '65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
// );
// console.log(
//   encryptThis('The more he saw the less he spoke'),
//   '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'
// );
// console.log(
//   encryptThis('The less he spoke the more he heard'),
//   '84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare'
// );
// console.log(
//   encryptThis('Why can we not all be like that wise old bird'),
//   '87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri'
// );
// console.log(
//   encryptThis('Thank you Piotr for all your help'),
//   '84kanh 121uo 80roti 102ro 97ll 121ruo 104ple'
// );

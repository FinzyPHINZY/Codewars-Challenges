"use strict";

// DESCRIPTION:
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

function decipherThis(str) {
  //have fun!
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let code = "";
    let j = 0;
    while (!isNaN(parseInt(word[j]))) {
      code += word[j];
      j++;
    }

    let char = String.fromCharCode(parseInt(code));

    word = char + word.slice(j);

    if (word.length > 2) {
      let secondLetter = word[1];
      let lastLetter = word[word.length - 1];
      word = char + lastLetter + word.slice(2, -1) + secondLetter;
    }

    words[i] = word;
  }

  return words.join(" ");
}

// Test Cases:
console.log(decipherThis("72olle 103doo 100ya"));
console.log(decipherThis("82yade 115te 103o"));
console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
);
console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka"));
console.log(decipherThis("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"));
console.log(decipherThis("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"));
console.log(
  decipherThis("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")
);
console.log(decipherThis("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"));

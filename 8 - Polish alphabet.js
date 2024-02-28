"use strict";

// DESCRIPTION:
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// Test Cases:
// describe("Tests", () => {
//   correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski";
//   correctPolishLetters("Lech Wałęsa"), "Lech Walesa";
//   correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie";
// });

function correctPolishLetters(string) {
  // your code
  const polishLetters = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  // Replace Polish letters with their counterparts without diacritics
  return string.replace(/[ąćęłńóśźż]/g, (letter) => polishLetters[letter]);
}

console.log(correctPolishLetters("Jędrzej Błądziński"));
console.log(correctPolishLetters("Lech Wałęsa"));
console.log(correctPolishLetters("Maria Skłodowska-Curie"));

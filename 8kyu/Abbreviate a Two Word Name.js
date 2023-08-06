// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(abbrevName("Sam Harris"), "S.H");
//     assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
//     assert.strictEqual(abbrevName("Evan Cole"), "E.C");
//     assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
//     assert.strictEqual(abbrevName("David Mendieta"), "D.M");
//   });
// });

function abbrevName(name) {
  // code away
  // Take the first letter of each name
  // Convert to uppercase
  // Return the letters with a dot in between them.
  // Initials equals first letter of each word
  const initials = name.split(" ");

  let firstLetter = initials[0].charAt(0);
  let secondLetter = initials[1].charAt(0);

  firstLetter = firstLetter.toUpperCase();
  secondLetter = secondLetter.toUpperCase();

  return `${firstLetter}.${secondLetter}`;
}

// const words = "The quick";

// const initials = words.split(" ");

// console.log(initials);

// console.log(initials[0], initials[1]);

// let firstLetter = initials[0].charAt(0);
// let secondLetter = initials[1].charAt(0);

// firstLetter = firstLetter.toUpperCase();
// secondLetter = secondLetter.toUpperCase();

// console.log(firstLetter, secondLetter);

// console.log(`${firstLetter}.${secondLetter}`);

console.log(abbrevName("The house"));

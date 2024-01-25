"use strict";

// DESCRIPTION:
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// Test Cases;
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(contamination("abc", "z"), "zzz");
    Test.assertEquals(contamination("", "z"), "");
    Test.assertEquals(contamination("abc", ""), "");
    Test.assertEquals(contamination("_3ebzgh4", "&"), "&&&&&&&&");
    Test.assertEquals(contamination("//case", " "), "      ");
  });
});

function contamination(text, char) {
  // Code here ;)
}

console.log(contamination("abc", "z"));
console.log(contamination("", "z"));
console.log(contamination("abc", ""));
console.log(contamination("_3ebzgh4", "&"));
console.log(contamination("//case", " "));

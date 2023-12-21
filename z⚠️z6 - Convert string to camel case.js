"use strict";

// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// Test Cases:

// describe("Tests", () => {
//     it("test", () => {
//       assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
//       assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
//       assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
//       assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
//     });
//   });

function toCamelCase(str) {
  // Check if string is empty
  if (!str) return str;
  return str.replace(/[-_](.)/g, function (match, group1) {
    return group1.toLowerCase();
  });
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
console.log(toCamelCase(""));
// if (i === 0) {
//   e.slice(0);
// }

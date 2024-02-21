"use strict";

// DESCRIPTION:
// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(combineNames("James", "Stevens"), "James Stevens");
//   });
// });

function combineNames(firstName, secondName) {
  return firstName.concat(" ", secondName);
}

console.log(combineNames("James", "Steve"));

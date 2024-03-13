"use strict";

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?"
// "No?" --> "No?"

// Test Cases:
describe("Ensure question", () => {
  it("Fixed tests", () => {
    assert.strictEqual(ensureQuestion(""), "?", "Expected: '?'");
    assert.strictEqual(ensureQuestion("Yes"), "Yes?", "Expected: '?'");
    assert.strictEqual(ensureQuestion("No?"), "No?", "Expected: '?'");
  });
});

function ensureQuestion(s) {
  // Code here
}

console.log(ensureQuestion(""));
console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));

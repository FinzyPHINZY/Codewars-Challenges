"use strict";

// DESCRIPTION:
// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
// Test Cases:

describe("Sample tests", function () {
  it("Should pass sample tests", function () {
    assert.strictEqual(solution({ a: 1, b: 2 }), "a = 1,b = 2");
    assert.strictEqual(solution({ a: "b", b: "a" }), "a = b,b = a");
    assert.strictEqual(solution({ 0: "a", b: 2 }), "0 = a,b = 2");
    assert.strictEqual(solution({ b: 1, c: 2, e: 3 }), "b = 1,c = 2,e = 3");
    assert.strictEqual(solution({}), "");
  });
});

function solution(pairs) {
  // TODO: complete
}

console.log(solution({ a: 1, b: 2 }));
console.log(solution({ a: "b", b: "a" }));
console.log(solution({ 0: "a", b: 2 }));
console.log(solution({ b: 1, c: 2, e: 3 }));
console.log(solution({}));

"use strict";

// DESCRIPTION:
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

// Test Cases:
// it("Basic tests", () => {
//   assert.strictEqual("test case".camelCase(), "TestCase");
//   assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
//   assert.strictEqual("say hello".camelCase(), "SayHello");
//   assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
//   assert.strictEqual("".camelCase(), "");
// });

String.prototype.camelCase = function () {
  //your code here
  //   if (this.length < 1) return this;

  return (
    this.split(" ")
      // .map((str) => str[0].toUpperCase() + str.slice(1))
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join("")
  );
};

console.log("test case".camelCase());
console.log("camel Case method".camelCase());
console.log("say hello".camelCase());
console.log("camel case word".camelCase());
console.log("".camelCase());

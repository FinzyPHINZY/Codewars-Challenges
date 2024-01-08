"use strict";

// DESCRIPTION:
// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(add(1)(3), 4, "add one to three equals four");
//   });
// });

function add(n) {
  function addFunc(x) {
    return n + x;
  }
  return addFunc(3);
}

console.log(add(3));

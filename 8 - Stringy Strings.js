// "use strict";
// DESCRIPTION:
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// Test Cases:

// it("Should return a string", function () {
//   Test.assertEquals(typeof stringy(3),"string","Make sure it's a string not a number (the function is called stringy after all!)"
//   );
// });

// it("Should start with a 1", function () {
//   Test.assertEquals( stringy(3)[0],"1", "Whoops your string doesnt start with a 1?"
//   );
// });

// it("Should have the correct length", function () {
//   for (let i = 0; i < 10; ++i) {
//     let parameter = (Math.random() * 50 + 1) | 0;
//     Test.assertEquals(  stringy(parameter).length,parameter,"Wrong length on " + parameter
//     );
//   }
// });

function stringy(size) {
  const result = [];
  for (let i = 1; i <= size; i++) {
    result.push(i % 2 == 0 ? "0" : "1");
  }

  return result.join("");
}

console.log(stringy(3));
console.log(stringy(6));

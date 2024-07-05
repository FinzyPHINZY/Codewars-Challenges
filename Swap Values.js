"use strict";

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues() {
  var args = Array.prototype.slice.call(arguments)[0];
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

// describe("Tests", () => {
//     it("test", () => {
//   var arr = [1,2]
//   swapValues(arr);
//   Test.assertEquals(arr[0], 2, "Failed swapping numbers")
//   Test.assertEquals(arr[1], 1, "Failed swapping numbers")

//     });
//   });

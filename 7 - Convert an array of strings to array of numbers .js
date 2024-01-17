"use strict";

// DESCRIPTION:
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// describe("Example tests", () => {
//   it('Running toNumberArray("1.1","2.2","3.3")...', function () {
//     assert.sameOrderedMembers(
//       toNumberArray(["1.1", "2.2", "3.3"]),
//       [1.1, 2.2, 3.3]
//     );
//   });
// });

function toNumberArray(stringarray) {
  const output = [];
  for (let i = 0; i < stringarray.length; i++) {
    output.push(parseFloat(stringarray[i], 10));
  }
  return output;
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]));

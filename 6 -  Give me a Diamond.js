// "use strict";

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// Test Cases:
// describe("diamond()", function () {
//   it("Valid diamonds", () => {
//     assert.strictEqual(diamond(1), "*\n");
//     assert.strictEqual(diamond(3), " *\n***\n *\n");
//     assert.strictEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
//   });

//   it("Invalid diamonds", () => {
//     assert.strictEqual(diamond(2), null);
//     assert.strictEqual(diamond(-3), null);
//     assert.strictEqual(diamond(0), null);
//   });
// });

function diamond(n) {
  if (n <= 0 || n % 2 === 0) {
    return null;
  }

  let diamondString = "";
  const halfSize = Math.floor(n / 2) + 1;

  for (let i = 1; i <= n; i++) {
    const spaces = Math.abs(halfSize - i);
    const stars = n - 2 * spaces;

    diamondString += " ".repeat(spaces) + "*".repeat(stars) + "\n";
  }

  return diamondString;
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(2));
console.log(diamond(-3));
console.log(diamond(0));

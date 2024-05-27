"use strict";

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  // Helper function to clamp a value between 0 and 255
  function clamp(value) {
    return Math.max(0, Math.min(255, value));
  }

  // Helper function to convert a number to a two-character hex string
  function toHex(value) {
    let hex = value.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  }

  // Clamping the values
  r = clamp(r);
  g = clamp(g);
  b = clamp(b);

  // Converting to hex and concatenating the results
  return toHex(r) + toHex(g) + toHex(b);
}

// function doTest(r, g, b, expected) {
//   const actual = rgb(r, g, b);
//   const message = `for r = ${r} g = ${g} b = ${b}`;
//   strictEqual(actual, expected, message);
// }

console.log(0, 0, 0); // '000000')
console.log(0, 0, -20); // '000000')
console.log(300, 255, 255); // 'FFFFFF')
console.log(173, 255, 47); // 'ADFF2F')

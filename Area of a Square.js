"use strict";

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A) {
  if (A === 0) return 0;
  const r = (2 * A) / Math.PI;
  const area = r * r;
  return Math.round(area * 100) / 100;
}
console.log(squareArea(2)); //, 1.62, 1e-2);
console.log(squareArea(0)); //, 0, 1e-2);
console.log(squareArea(14.05)); //, 80, 1e-2);

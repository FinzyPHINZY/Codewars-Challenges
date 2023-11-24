"use strict";

// DESCRIPTION:
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular.

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

// Test Case:
// Test.assertEquals(new Ball().ballType, "regular");
// Test.assertEquals(new Ball("super").ballType, "super");

var Ball = function (ballType) {
  // your code goes here
  this.ballType = ballType || "regular";
};

console.log(Ball("regular"));
console.log(Ball("super"));

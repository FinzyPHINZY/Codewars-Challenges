"use strict";

// DESCRIPTION:
// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

// Test Cases:
// Test.assertEquals(sumStrings("123", "456"), "579");

function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(sumStrings("123", "456"));
console.log(sumStrings("", "5"));
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);

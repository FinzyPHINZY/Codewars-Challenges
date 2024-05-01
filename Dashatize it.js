"use strict";

// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  return num
    .toString()
    .replace(/([13579])/g, "-$1-")
    .replace(/--/g, "-")
    .replace(/^-|-$/g, "");
}

console.log(dashatize(274)); // "2-7-4");
console.log(dashatize(5311)); // "5-3-1-1");
console.log(dashatize(86320)); // "86-3-20");
console.log(dashatize(974302)); // "9-7-4-3-02");
console.log(dashatize(0)); // "0");
console.log(dashatize(-1)); // "1");
console.log(dashatize(-28369)); // "28-3-6-9");

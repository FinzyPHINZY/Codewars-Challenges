"use strict";

// DESCRIPTION:
// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kels

function capMe(names) {
  //   return names.map((name) => {
  //     return name
  //       .split("")
  //       .map((char, i) => {
  //         if (i === 0) {
  //           return char.toUpperCase();
  //         } else {
  //           return char.toLowerCase();
  //         }
  //       })
  //       .join("");
  //   });

  return names.map((name) => name[0].toUpperCase() + name.slice(1));
}

console.log(capMe(["jo", "nelson", "jurie"]));
console.log(capMe(["KARLY", "DANIEL", "KELSEY"]));

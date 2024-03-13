"use strict";

// DESCRIPTION:
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

// describe("Fixed Test", () => {
//     it("Should work for valid strings", () => {
//       assert.deepEqual(evenChars ("1234"), ["2", "4"])
//       assert.deepEqual(evenChars (";;;--"), [";", "-"])
//       assert.deepEqual(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])
//     })
//     it("Should work for invalid strings", () => {
//       assert.deepEqual(evenChars ("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva"), "invalid string")
//       assert.deepEqual(evenChars ("a"), "invalid string")
//       assert.deepEqual(evenChars (""), "invalid string")
//     })
//   })

function evenChars(string) {
  //keep coding!
  return string.length < 2 || string.length > 100
    ? "invalid string"
    : string.split("").filter((char, i) => i % 2 !== 0);
}

console.log(evenChars("1234"));
console.log(evenChars(";;;--"));
console.log(evenChars("abcdefghijklm"));
console.log(
  evenChars(
    "aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva"
  )
);
console.log(evenChars("a"));
console.log(evenChars(""));

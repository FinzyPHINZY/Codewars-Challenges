// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else if (char === char.toLowerCase()) {
        return char.toUpperCase();
      }
      return char;
    })
    .join("");
};

function altCase(str) {
  str = str.split("");

  let result = str.map((e) => {
    if (e === e.toUpperCase()) {
      return e.toLowerCase();
    } else {
      return e.toUpperCase();
    }
    // return e;
  });
  return result.join("");
}

// console.log("hello WORLD".toAlternatingCase());
console.log(altCase("HeLlo wOrld"));

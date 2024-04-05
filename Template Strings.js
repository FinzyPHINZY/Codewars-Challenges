"use strict";

// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

var templateStrings = function (noun, adjective) {
  return `${noun} are ${adjective}`;
};

console.log(templateStrings("Animals", "Good")); //, 'Animals are Good', 'templateStrings(\'Animals\', \'Good\')')
console.log(templateStrings("You", "special")); // 'You are special', 'templateStrings(\'You\', \'special\')')
console.log(templateStrings("lives", "frozen")); //, 'lives are frozen', 'templateStrings(\'lives\', \'frozen\')')

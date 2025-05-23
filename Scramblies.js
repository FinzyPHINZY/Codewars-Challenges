"use strict";

// DESCRIPTION:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// Test Cases:

//   assert.strictEqual(scramble('rkqodlw',           'world'      ), true );
//   assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
//   assert.strictEqual(scramble('katas',             'steak'      ), false);
//   assert.strictEqual(scramble('scriptjavx',        'javascript' ), false);
//   assert.strictEqual(scramble('scriptingjava',     'javascript' ), true );
//   assert.strictEqual(scramble('scriptsjava',       'javascripts'), true );
//   assert.strictEqual(scramble('javscripts',        'javascript' ), false);
//   assert.strictEqual(scramble('jscripts',          'javascript' ), false);
//   assert.strictEqual(scramble('aabbcamaomsccdd',   'commas'     ), true );
//   assert.strictEqual(scramble('commas',            'commas'     ), true );
//   assert.strictEqual(scramble('sammoc',            'commas'     ), true )

function scramble(str1, str2) {
  const count = {};

  // Count the occurrences of each character in str1
  for (const char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  // Subtract the occurrences of each character in str2
  for (const char of str2) {
    if (!count[char]) return false; // If character not found or count becomes negative, return false
    count[char]--;
  }

  return Object.values(count).every((value) => value >= 0);
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptjavx", "javascript"));
console.log(scramble("scriptingjava", "javascript"));
console.log(scramble("scriptsjava", "javascripts"));
console.log(scramble("javscripts", "javascript"));
console.log(scramble("jscripts", "javascript"));
console.log(scramble("aabbcamaomsccdd", "commas"));
console.log(scramble("commas", "commas"));
console.log(scramble("sammoc", "commas"));

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//Test Cases
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
//       assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano');
//       assert.strictEqual(high('take me to semynak'), 'semynak');
//       assert.strictEqual(high('aa b'), 'aa');
//       assert.strictEqual(high('b aa'), 'b');
//       assert.strictEqual(high('bb d'), 'bb');
//       assert.strictEqual(high('d bb'), 'd');
//       assert.strictEqual(high('aaa b'), 'aaa');
//     })
//   });

// Pseudo-Code
// 1. function to calculate score of words
// 2. split array into parts separated by spaces

function wordScore(word) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += word.charCodeAt(i) - 96;
  }
  return score;
}

function high(x) {
  const words = x.split(" ");
  let result = [];

  for (const word of words) {
    result.push(wordScore(word));
  }

  let highestScore = Math.max(...result);
  let highestScoreIndex = result.indexOf(highestScore);

  return words[highestScoreIndex];
}

console.log(high("man i need a taxi up to ubud")); //taxi
console.log(high("aa b"));
console.log(high("b aa"));
console.log(high("what time are we climbing up the volcano")); // volcano

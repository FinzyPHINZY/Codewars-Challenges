// Description:

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//       assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
//       assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
//     })
//   })

function findShort(s) {
  // Split words.
  // Loop through each word and checking its length

  const newStr = s.split(" ");
  let resultArr = [];

  for (let i = 0; i < newStr.length; i++) {
    resultArr.push(newStr[i].length);
  }
  return Math.min(...resultArr);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

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
  const newStr = s.split(" ");
  let resultArr = [];

  for (let i = 0; i < newStr.length; i++) {
    resultArr.push(newStr[i].length);
  }

  return Math.min(...resultArr);
}

function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

function findShort(s) {
  // body
  const newStr = s.split(" ");

  newStr.sort((a, b) => a.length - b.length);
  console.log(newStr);
  return newStr[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3
console.log(findShort("Let's travel abroad shall we")); // 2

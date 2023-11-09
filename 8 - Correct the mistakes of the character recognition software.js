// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Test Cases
// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(correct("L0ND0N"), "LONDON");
//     assert.strictEqual(correct("DUBL1N"), "DUBLIN");
//     assert.strictEqual(correct("51NGAP0RE"), "SINGAPORE");
//     assert.strictEqual(correct("BUDAPE5T"), "BUDAPEST");
//     assert.strictEqual(correct("PAR15"), "PARIS");
//   });
// });

function correct(string) {
  // your code here

  string = string.replace(/5/g, "S");

  // Replace 0 with O
  string = string.replace(/0/g, "O");

  // Replace 1 with I
  string = string.replace(/1/g, "I");

  return string;
}

console.log(correct("DUBL1N"));
console.log(correct("BUDAPE5T"));
console.log(correct("51NGAPORE"));
console.log(correct("L0ND0N"));
console.log(correct("PAR15"));

// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// Test Cases
// describe("maskify", function () {
//   it("should work for some examples", function () {
//     Test.assertEquals(maskify("4556364607935616"), "############5616");
//     Test.assertEquals(maskify("1"), "1");
//     Test.assertEquals(maskify("11111"), "#1111");
//   });
// });

function maskify(cc) {
  // Check if the string has more than 4 characters
  if (cc.length > 4) {
    // Use the repeat method to create a string of '#' characters
    let maskedPart = "#".repeat(cc.length - 4);

    // Concatenate the masked part with the last four characters
    return maskedPart + cc.slice(-4);
  } else {
    // If the string has 4 or fewer characters, return it as is
    return cc;
  }
}

console.log(maskify("4556364607935616")); // "############5616"
console.log(maskify("1")); // "1"
console.log(maskify("11111")); //  "#1111"

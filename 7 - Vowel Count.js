// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Test Cases:
// describe("Vowels Count Tests", function () {
//   it("should return 5 for 'abracadabra'", function () {
//     assert.strictEqual(getCount("abracadabra"), 5);
//   });
// });

function getCount(str) {
  //   forEach loop

  let count = 0;
  let vowels = "aeiou";
  str = str.split("");
  str.forEach((e) => {
    if (vowels.includes(e)) {
      count += 1;
    }
  });
  return count;

  // Reduce Method

  const vowels2 = ["a", "e", "i", "o", "u"];

  return str.split("").reduce((total, i) => {
    if (vowels2.includes(i)) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);
}
console.log(getCount("abracadabra"));

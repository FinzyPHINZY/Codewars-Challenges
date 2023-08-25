// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
// describe("Vowels Count Tests",function(){
//     it("should return 5 for 'abracadabra'",function(){
//       assert.strictEqual(getCount("abracadabra"), 5) ;
//     });

function getCount(str) {
  str = str.toLowerCase();

  // Define the set of vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // Initialize a count variable for vowels
  let vowelCount = 0;

  // Loop through each character in the string
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(getCount("kjqfkqjsnaaduihwjklbbeeeasuuioanm"));

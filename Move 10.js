// fn moveTen
// takes in a string (s) with a length no less than 1. will all chars be lowercased? yes
// returns a shallow copy of s with every letter moved forward by 10 in the alphabetical order

const moveTen = function (s) {
  let output = ''

  // create a string representation of alphabets
  const letters = 'abcdefghijklmnopqrstuvwxyz'

  // iterate through each letter in s
  for (const char of s) {
    // check against the alphabetical listing.
    // add 10 to the current index of the alphabet.
    const charIndex = letters.indexOf(char) + 10

    if (charIndex < 26) {
      output += letters[charIndex]
    } else {
      // if the new index is greater than 26, return the character and the index of the difference
      const difference = charIndex - 26
      output += letters[difference]
    }
  }

  // optimize for space and time

  return output
}

console.log(moveTen('testcase') === 'docdmkco')
console.log(moveTen('codewars') === 'mynogkbc')
console.log(moveTen('exampletesthere') === 'ohkwzvodocdrobo')

// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  // Convert the number to a string to work with its digits
  const numStr = num.toString();
  const numDigits = numStr.length;

  console.log(numDigits);

  // Initialize an empty array to store the expanded form parts
  const expandedParts = [];

  // Loop through each digit of the number
  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);

    //   Check if the digit is greater than 0
    if (digit > 0) {
      //   Calculate the place value (e.g., 10^position)
      const placeValue = Math.pow(10, numDigits - i - 1);

      //   Calculate the expanded form part and push it to the array
      expandedParts.push(digit * placeValue);
    }
  }

  // Join the expanded form parts with ' + ' and return as a string
  //   return expandedParts.join(" + ");
}

// Another way to solve:
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

// Test cases
console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'

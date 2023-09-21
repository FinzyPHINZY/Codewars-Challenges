// Description:

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN(pin) {
//     const pinLength = pin.length;

//     if (pinLength !== 4 && pinLength !== 6) {
//       return false; // PIN should be either 4 or 6 digits long
//     }

//     for (const char of pin) {
//       if (isNaN(char)) {
//         return false; // PIN should consist of digits only
//       }
//     }

//     return true; // PIN is valid
//   }

function validatePIN(pin) {
  const pinLength = pin.length;

  if (pinLength !== 4 && pinLength !== 6) {
    return false; // PIN should be either 4 or 6 digits long
  }

  for (const char of pin) {
    if (isNaN(char)) {
      return false; // PIN should consist of digits only
    }
  }

  return true; // PIN is valid
}

// Test cases
console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("a234")); // false
console.log(validatePIN("123")); // false

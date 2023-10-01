// Description:

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number) {
  //Write your own Code!

  switch (number) {
    case (number = 1):
      return "One";
    case (number = 2):
      return "Two";
    case (number = 3):
      return "Three";
    case (number = 4):
      return "Four";
    case (number = 5):
      return "Five";
    case (number = 6):
      return "Six";
    case (number = 7):
      return "Seven";
    case (number = 8):
      return "Eight";
    case (number = 9):
      return "Nine";

    default:
      return "Zero";
  }
}

console.log(switchItUp(1));
console.log(switchItUp(2));
console.log(switchItUp(3));
console.log(switchItUp(4));
console.log(switchItUp(5));
console.log(switchItUp());

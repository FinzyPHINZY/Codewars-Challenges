function evenOrOdd(number) {
  //Pseudo Code
  //Takes in 'number' arguement
  //checks if the number is divisible by 2 without a remainder
  //returns odd or even

  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(13));

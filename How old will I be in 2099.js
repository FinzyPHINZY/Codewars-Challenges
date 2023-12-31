// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

// Errors after first test:
// Expected: 'You are 1 year old.', instead got: 'You are 1 years old.'
// Expected: 'You will be born in 1 year.', instead got: 'You will be born in 1 years.'

function calculateAge(birthYear, currentYear) {
  // enter your code here.
  //   if currentYear is greater than birthyear, return You are ${curentyear - birthyear } years old
  //   if birthyear is greater than currentYear, return you will be born in  .... years.
  // if birthYear equals current Year, return you were born this very year!

  if (currentYear > birthYear) {
    if (currentYear - birthYear > 1) {
      return `You are ${currentYear - birthYear} years old.`;
    } else {
      return `You are ${currentYear - birthYear} year old.`;
    }
  } else if (currentYear < birthYear) {
    if (birthYear - currentYear > 1) {
      return `You will be born in ${birthYear - currentYear} years.`;
    } else {
      return `You will be born in ${birthYear - currentYear} year.`;
    }
  } else {
    return `You were born this very year!`;
  }
}

console.log(calculateAge(2012, 2016));
console.log(calculateAge(2000, 1990));
console.log(calculateAge(3400, 3400));

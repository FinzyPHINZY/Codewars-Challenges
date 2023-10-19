// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function

// Loop through the arguement and get the index of the letters in uppercase and put them in an array

function solution(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    if (currentChar == currentChar.toUpperCase()) {
      result += " ";
    }
    result += currentChar;
  }
  return result;
}

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));

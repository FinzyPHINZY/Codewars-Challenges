// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null

// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null

// 3 values: number, string, number
// return the result of the corresponding mathematical function or null;
// calculate(2, "+", 2) should return 4.
// calculate(2, "-", 2) should return 0.
// calculate(2, '*', 2) should return 4.

function calculate(first, second, third) {
  const mathematicalSymbol = ['+', '-', '*', '/']

  return !['+', '-', '*', '/'].includes(second) ||
    (second === '/' && third === 0)
    ? null
    : eval(`${first} ${second} ${third}`)
}

console.log(calculate(3.2, '+', 8)) // 11.2, '3.2 + 8 = 11.2')
console.log(calculate(3.2, '-', 8)) // -4.8, '3.2 - 8 = -4.8')
console.log(calculate(3.2, '/', 8)) // 0.4, '3.2 / 8 = .4')
console.log(calculate(3.2, '*', 8)) // 25.6, '3.2 * 8 = 25.6')
console.log(calculate(-3, '+', 0)) // -3, '-3 + 0 = -3')
console.log(calculate(-3, '-', 0)) // -3, '-3 - 0 = -3')
console.log(calculate(-3, '/', 0)) // null, '-3 / 0 = null')
console.log(calculate(-3, '*', 0)) // 0, '-3 * 0 = 0')
console.log(calculate(-3, 'w', 0)) // null, '-3 w 0 = null')

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]

// More examples in the test cases.

// fn solve
// takes in a string of various characters.
// returns the count of uppercase letters, lowercase letters, numbers and special characters

const solve = function (str) {
  let uc = 0
  let lc = 0
  let n = 0
  let sc = 0
  for (let i = 0; i < str.length; ++i) {
    const unicode = str.charCodeAt(i)
    if (unicode > 96 && unicode <= 122) {
      lc++
    } else if (unicode >= 65 && unicode <= 90) {
      uc++
    } else if (unicode >= 48 && unicode <= 57) {
      n++
    } else {
      sc++
    }
  }
  return [uc, lc, n, sc]
}

console.log(solve('4!{3}@3079`6[1'), [0, 0, 8, 6])
console.log(solve('aAbBcC'), [3, 3, 0, 0])
console.log(solve('Codewars@codewars123.com'), [1, 18, 3, 2])
console.log(solve('bgA5<1d-tOwUZTS8yQ'), [7, 6, 3, 2])
console.log(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H'), [9, 9, 6, 9])
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15, 8, 6, 9])
console.log(solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe'), [10, 7, 3, 6])
console.log(solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft'), [7, 13, 4, 10])

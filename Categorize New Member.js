'use strict'

// a function that takes in an array. the array contains other subarrays which contain the age and handicap
// to be a senior officer, age has to be at least 55 and handicap has to be at least 7
// if not a senior, the officer would be open
// return a new array containing open or senior depending on the return of the subarray
// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]] ,["Open", "Open", "Senior", "Open", "Open", "Senior"]))

function openOrSenior(data) {
  return data.map((arr) => {
    const [age, handicap] = arr

    if (age >= 55 && handicap > 7) {
      return 'Senior'
    } else {
      return 'Open'
    }
  })
}

console.log(
  openOrSenior(
    [
      [18, 20],
      [45, 2],
      [61, 12],
      [37, 6],
      [21, 21],
      [78, 9],
    ],
    ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']
  )
)

// implement bubble sort
// fn bubble
// takes in an array of integers.
// returns a list of snapshots after every change in the array during sorting

const bubble = function (arr) {
  const output = []
  // implement bubble sort
  let n = arr.length
  let sorted = false

  while (!sorted) {
    sorted = true

    for (let i = 0; i < n; ++i) {
      // check for mismatch
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp

        sorted = false
        output.push([...arr])
      }
    }

    n -= 1
  }

  return output
}

console.log(bubble([1, 2, 4, 3]))
console.log(bubble([2, 1, 4, 3]))

// console.log(bubble([4, 2, 7, 1, 3]))

// takes in a string
// returns a nested array. containing the ascii code, the count of the char, and an array of the starting and ending indices of the characters
// s1 = "1111aa994bbbb1111AAAAAFF?<mmMaaaaaaaaaaaaaaaaaaaaaaaaabf" => ["97", 25, [29,53]]

const findLongestSubstr = function (s) {
  // create an array for each substring.
  const substrings = s.match(/(\w)\1*/g)

  const longestCount = Math.max(...substrings.map((x) => x.length))

  const longestSubStr = substrings.find((x) => x.length === longestCount)

  // find the longest substring
  // create a nested array of the relevant values.
  const startIndex = 0
  const endIndex = 0

  return [longestSubStr.charCodeAt(0), longestCount]
}

// console.log(
//   findLongestSubstr('1111aa994bbbb1111AAAAAFF?<mmMaaaaaaaaaaaaaaaaaaaaaaaaabf')
// ) // ["97", 25, [29,53]]

const binarySearch = function (arr, needle) {
  // create two pointers - left and right
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === needle) {
      return mid
    } else if (needle < arr[mid]) {
      console.log(arr.slice(0, mid))

      right = mid - 1
    } else {
      console.log(arr.slice(mid))

      left = mid + 1
    }
  }

  return -1
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8))

// the useEffect hook is used to tell react to do something after render. the function passed would be remembered and called after the DOM updates.
// dependency array is the second parameter of the useEffect function. it is used to define the parameters that triggers a re render

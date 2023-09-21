// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  //your code here
  //Using loops to iterate the array
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;

  //Using filter.
  //   return arr.filter((_, index) => index % 2 === 0);

  //Using reduce

  //   return arr.reduce((result, currentElement, index) => {
  //     if (index % 2 === 0) {
  //       result.push(currentElement);
  //     }
  //     return result;
  //   }, []);
}

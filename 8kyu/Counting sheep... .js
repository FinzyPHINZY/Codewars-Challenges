// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  if (!Array.isArray(arrayOfSheep)) {
    // If the input is not an array, return 0 (no sheep).
    return 0;
  }

  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      // Increment the count if the element is true (sheep is present).
      count++;
    }
  }

  return count;
}

const arrayOfSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(arrayOfSheep));

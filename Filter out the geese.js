// Description:

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  //   let arr = [];

  //   // return an array containing all of the strings in the input array except those that match strings in geese

  //   for (key of birds) {
  //     if (!geese.includes(key)) {
  //       arr.push(key);
  //     }
  //   }

  //   return arr;

  return birds.filter((b) => !geese.includes(b));
}

console.log(
  gooseFilter([
    "Mallard",
    "Barbary",
    "Hook Bill",
    "African",
    "Blue Swedish",
    "Crested",
  ])
);

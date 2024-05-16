"use strict";

// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

//  // should return false
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

function isArray(o) {
  return Array.isArray(o);
}

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.

  if (!isArray(other)) {
    return false;
  }

  if (this.length !== other.length) {
    return false;
  }

  for (let i = 0; i < this.length; i++) {
    const thisElement = this[i];
    const otherElement = other[i];

    if (isArray(thisElement) && isArray(otherElement)) {
      // Both are arrays, check their structure recursively
      if (!thisElement.sameStructureAs(otherElement)) {
        return false;
      }
    } else if (isArray(thisElement) !== isArray(otherElement)) {
      // One is an array and the other is not
      return false;
    }
    // If both are not arrays, continue checking next elements
  }

  return true;
};

console.log([1, 1, 1].sameStructureAs([2, 2, 2])); //, "[1,1,1] same as [2,2,2]");
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]])); //, "[1,[1,1]] same as [2,[2,2]]");
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2])); //, "[1,[1,1]] not same as [[2,2],2]");
console.log([1, [1, 1]].sameStructureAs([2, [2]])); //, "[1,[1,1]] not same as [2,[2]]");
console.log([[[], []]].sameStructureAs([[[], []]])); //, "[[[],[]]] same as [[[],[]]]");
console.log([[[], []]].sameStructureAs([[1, 1]])); //, "[[[],[]]] not same as [[1,1]]");
console.log([1, [[[1]]]].sameStructureAs([2, [[[2]]]])); //, "[1,[[[1]]]] same as [2,[[[2]]]]");
console.log([].sameStructureAs(1)); //, "[] not same as 1");
console.log([].sameStructureAs({})); //, "[] not same as {}");
console.log([1, "[", "]"].sameStructureAs(["[", "]", 1])); //, "[1,'[',']'] same as ['[',']',1]");
console.log([1, 2].sameStructureAs([[3], 3])); //, "[1,2] not same as [[3],3]" );

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

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
};

assert.isTrue([1, 1, 1].sameStructureAs([2, 2, 2])); //, "[1,1,1] same as [2,2,2]");
assert.isTrue([1, [1, 1]].sameStructureAs([2, [2, 2]])); //, "[1,[1,1]] same as [2,[2,2]]");
assert.isNotTrue([1, [1, 1]].sameStructureAs([[2, 2], 2])); //, "[1,[1,1]] not same as [[2,2],2]");
assert.isNotTrue([1, [1, 1]].sameStructureAs([2, [2]])); //, "[1,[1,1]] not same as [2,[2]]");
assert.isTrue([[[], []]].sameStructureAs([[[], []]])); //, "[[[],[]]] same as [[[],[]]]");
assert.isNotTrue([[[], []]].sameStructureAs([[1, 1]])); //, "[[[],[]]] not same as [[1,1]]");
assert.isTrue([1, [[[1]]]].sameStructureAs([2, [[[2]]]])); //, "[1,[[[1]]]] same as [2,[[[2]]]]");
assert.isNotTrue([].sameStructureAs(1)); //, "[] not same as 1");
assert.isNotTrue([].sameStructureAs({})); //, "[] not same as {}");
assert.isTrue([1, "[", "]"].sameStructureAs(["[", "]", 1])); //, "[1,'[',']'] same as ['[',']',1]");
assert.isNotTrue([1, 2].sameStructureAs([[3], 3])); //, "[1,2] not same as [[3],3]" );

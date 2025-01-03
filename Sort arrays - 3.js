"use strict";

// This time the input is a sequence of course-ids that are formatted in the following way:

// name-yymm
// The return of the function shall first be sorted by yymm, then by the name (which varies in length).

// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
const sortme = function (courses) {
  return courses.sort((a, b) => {
    const [nameA, yymmA] = a.split("-");
    const [nameB, yymmB] = b.split("-");

    if (yymmA === yymmB) {
      return nameA.localeCompare(nameB); // Sort by name if yymm is the same
    }
    return yymmA.localeCompare(yymmB); // Sort by yymm
  });
};

console.log(sortme(["web-1305", "site-1305", "web-1304", "site-1304"])); //, ["site-1304", "web-1304", "site-1305", "web-1305"])
// console.log(
//   sortme([
//     "aeb-1305",
//     "site-1305",
//     "play-1215",
//     "web-1304",
//     "site-1304",
//     "beb-1305",
//   ])
// ); // //, ["play-1215", "site-1304", "web-1304", "aeb-1305", "beb-1305", "site-1305"])
console.log(sortme([]), []);
// console.log(sortme(["aeb-1305", "aeb-1305"]), ["aeb-1305", "aeb-1305"]);

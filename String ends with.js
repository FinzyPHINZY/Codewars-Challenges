// function solution(str, ending) {
//   // TODO: complete 
//   if (str.endsWith(ending)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(solution("abcde", "cde"));

solution = (str, ending) => (str.endsWith(ending) ? true : false);

console.log(solution("abcde", "cde"));

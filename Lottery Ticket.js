"use strict";

// DESCRIPTION:
// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// count wins
// check if wins is more or less than win
// loop through string and convert them to charcode nums. str.split('').map((e, i) =>{str.charCodeAt(i)})

// Test Cases:
// describe("Tests",()=>{
//     it('Fixed tests', ()=>{
//     (bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
//       (bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
//       (bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
//     });
//   });

function bingo(ticket, win) {
  let output = [];
  let count = 0;
  ticket.forEach((arr) => {
    arr[0] = arr[0].split("").map((e, i) => arr[0].charCodeAt(i));
    if (arr[0].includes(arr[1])) count++;
  });
  return count >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
);
console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  )
);
console.log(
  bingo(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  )
);

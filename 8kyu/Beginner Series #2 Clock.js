// Clock shows h hours, m minutes, and s seconds after midnight.

// Your task is to write a function that returns the time since midnight in milliseconds.

// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59

function past(h, m, s) {
  //#Happy Coding! ^_^
  //hours * 3600000 + minutes * 60000 + seconds * 1000
  let output = h * 3600000 + m * 60000 + s * 1000;
  console.log(output);
}
past(0, 1, 1);
past(1, 1, 1);
past(0, 0, 0);
past(1, 0, 1);
past(1, 0, 0);

// assert.strictEqual(past(0, 1, 1), 61000);
// assert.strictEqual(past(1, 1, 1), 3661000);
// assert.strictEqual(past(0, 0, 0), 0);
// assert.strictEqual(past(1, 0, 1), 3601000);


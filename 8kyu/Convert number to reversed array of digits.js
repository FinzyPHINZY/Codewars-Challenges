// Description:
// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  //code here

  let stringN = String(n);
  console.log(typeof stringN);
  let split = stringN.split("");
  console.log(split);

  let reverse = split.reverse();
  console.log(reverse);
  let returnArr = [];
  for (let i = 0; i < reverse.length; i++) {
    let loopOutput = Number(reverse[i]);
    console.log(typeof loopOutput);
    returnArr.push(loopOutput);
  }
  return returnArr;
}

console.log(digitize(1234));

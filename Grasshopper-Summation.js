const summation = function (num) {
  // Code here
  let total = 0;
  for (i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};

console.log(summation(10));

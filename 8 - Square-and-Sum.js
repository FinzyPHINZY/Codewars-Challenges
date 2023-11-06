function squareSum(numbers) {
  var result = 0;
  numbers.forEach(function (num) {
    result += num * num;
  });

  return result;
}

console.log(squareSum([1, 2, 2]));

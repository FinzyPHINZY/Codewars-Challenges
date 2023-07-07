function squareSum(numbers) {
  var result = 0;
  numbers.forEach(function (num) {
    result += num * num;
  });
  //   for (var i = 0; i < numbers.length; i++) {
  //     // result += numbers[i] * numbers[i];
  //     result = result + numbers[i] * numbers[i];
  //   }
  return result;
}

console.log(squareSum([1, 2, 2]));

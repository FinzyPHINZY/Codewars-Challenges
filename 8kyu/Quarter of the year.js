// const quarterOf = (month) => {
//   // Your code here
//   if (month <= 3) {
//     return `month ${month} is part of the first quarter`;
//   } else if (month > 3 && month <= 6) {
//     return `month ${month} is part of the second quarter`;
//   } else if (month > 6 && month <= 9) {
//     return `month ${month} is part of the third quarter`;
//   } else if (month > 9 && month <= 12) {
//     return `month ${month} is part of the fourth quarter`;
//   }
// };

const quarterOf = (month) => {
  // Your code here

  const quarter = Math.ceil(month / 3);
  return quarter;
};

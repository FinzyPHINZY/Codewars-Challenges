"use strict";

// Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

// Your job is to help her out.

// Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

// If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"

function countDays(d) {
  //have fun with coding! :
  // Get today's date
  const today = new Date();

  // Round the time portion of the dates to compare only the dates
  const roundedToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const roundedEventDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());

  // Calculate the difference in milliseconds between the two dates
  const difference = roundedEventDate.getTime() - roundedToday.getTime();

  // Convert milliseconds to days and round it
  const daysDifference = Math.round(difference / (1000 * 60 * 60 * 24));

  // Check conditions and return appropriate message
  if (daysDifference < 0) {
    return "The day is in the past!";
  } else if (daysDifference === 0) {
    return "Today is the day!";
  } else {
    return `${daysDifference} days`;
  }
}

console.log(countDays(new Date("February 28, 2016"))); //, "The day is in the past!");
console.log(countDays(new Date())); //, "Today is the day!");

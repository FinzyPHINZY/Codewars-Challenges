"use strict";

// DESCRIPTION:
// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

// Test Cases:
// describe("Tests", () => {
//   it("test", () => {
//     var john = new Person("john", 34);
//     Test.assertEquals(john.info, "johns age is 34");
//   });
// });

class Person {
  constructor(name, age) {
    (this._name = name), (this._age = age);
  }

  get info() {
    return `${this._name}s age is ${this._age}`;
  }
}

const john = new Person("john", 34);
console.log(john._name, john._age);

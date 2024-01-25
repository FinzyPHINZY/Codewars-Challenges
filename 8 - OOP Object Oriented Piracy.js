"use strict";

// DESCRIPTION:
// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

// You begin with writing a generic Ship class / struct:

// class Ship {
//   constructor(draft, crew) {
//     this.draft = draft
//     this.crew = crew
//   }
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// const titanic = new Ship(15, 10);
// Task
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false
// Good luck and may you find GOOOLD!

// Test Cases
// describe('Captain, we see some ships!', () => {
//     it("Empty ship (draft: 0, crew: 0)", () => {
//       let emptyShip = new Ship(0,0);
//       assert.isFalse(emptyShip.isWorthIt());
//     });
//     it("A worth ship (draft: 100, crew: 20)", () => {
//       let aWorthyShip = new Ship(100,20);
//       assert.isTrue(aWorthyShip.isWorthIt());
//     });
//   });

class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  //YOUR CODE HERE...
  isWorthIt() {
    const crewDraft = this.crew * 1.5;
    return this.draft - crewDraft > 20;
  }
}

let emptyShip = new Ship(0, 0);
let aWorthyShip = new Ship(100, 20);
let ship1 = new Ship(35, 10); //false
let ship2 = new Ship(35, 20); //false
let ship3 = new Ship(156, 96); // false

console.log(emptyShip.isWorthIt());
console.log(aWorthyShip.isWorthIt());
console.log(ship1.isWorthIt());
console.log(ship2.isWorthIt());
console.log(ship3.isWorthIt());

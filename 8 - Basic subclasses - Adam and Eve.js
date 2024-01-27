"use strict";

// DESCRIPTION:
// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

// Test Cases
// describe("GodTest", function () {
//   it("Adam should be a Man", function () {
//     let humans = God.create();
//     Test.assertEquals(
//       humans[0] instanceof Man,
//       true,
//       "Expected Adam to be a Man"
//     );
//   });
// });

class God {
  /**
   * @returns Human[]
   */
  static create() {
    // code
  }
}

class Human {
  constructor() {
    this.species = "Human";
  }
}

class Man extends Human {
  constructor() {
    super();
    this.gender = "Man";
  }
}

class Woman extends Human {
  constructor() {
    super();
    this.gender = "Woman";
  }
}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    const adam = new Man();
    const eve = new Woman();
    return [adam, eve];
  }
}

// Example usage:
const humans = God.create();
console.log(humans); // [Man { species: 'Human', gender: 'Man' }, Woman { species: 'Human', gender: 'Woman' }]

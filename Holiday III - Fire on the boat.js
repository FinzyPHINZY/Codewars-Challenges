"use strict";

// DESCRIPTION:
// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

// Test Cases:
// describe("Holiday III - Fire on the boat", () => {
//     it("Fixed tests", () => {
//       assert.strictEqual(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
//       assert.strictEqual(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
//       assert.strictEqual(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");
//     });
//   });

function fireFight(s) {
  return s.replaceAll("Fire", "~~");
}

console.log(
  fireFight(
    "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
  )
);
console.log(fireFight("Mast Deck Engine Water Fire"));
console.log(
  fireFight(
    "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"
  )
);

// PREP
// P: The function takes in a string arguement "s" containing multiple words
// R: Returns a string - the arguement 's' but after replacing each word that === 'fire' with '~~'
// E: fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~"
// P: Itereate through each word in the string, checking for 'fire and replacing it with '~~'

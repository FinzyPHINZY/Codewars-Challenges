"use strict";

// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string", 3, 5)

// Test Cases:
// describe("Tests", () => {
//     it("test", () => {
//     Test.assertEquals(modifyMultiply("This is a string",3 ,5), "string-string-string-string-string", "The string is incorrect");
//     Test.assertEquals(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10), "that-that-that-that-that-that-that-that-that-that");
//     Test.assertEquals(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",1 ,1), "means");
//     Test.assertEquals(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8), "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance");
//     Test.assertEquals(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5), "around-around-around-around-around");

//     });
//   });

function modifyMultiply(str, loc, num) {
  //Code here
  return str
    .split(" ")
    .filter((word, i) => i === loc)
    .map((word) => Array(num).fill(word).join("-"))
    .join("");
}

console.log(modifyMultiply("This is a string", 3, 5));
console.log(
  modifyMultiply(
    "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
    8,
    10
  )
);
console.log(
  modifyMultiply(
    "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",
    1,
    1
  )
);
console.log(
  modifyMultiply(
    "Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",
    6,
    8
  )
);
console.log(
  modifyMultiply(
    "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
    2,
    5
  )
);

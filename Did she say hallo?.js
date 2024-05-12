"use strict";

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

function validateHello(greetings) {
  greetings = greetings.toLowerCase();
  const helloWords = [
    "hello",
    "ciao",
    "salut",
    "hallo",
    "hola",
    "ahoj",
    "czesc",
  ];
  return helloWords.some((word) => greetings.includes(word));
}

console.log(validateHello("ahoj")); //, true);
console.log(validateHello("meh")); // false);
console.log(
  validateHello(
    "yoU? la HeLLo CZEsc, PAsa ARe Hello tSchUSs HastA ciaO haStA sAlut! tReS? hoW. tres, TscHUsS. dOING. trES wie Ciao: tsCHuSS."
  )
);

"use strict";

// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// Test Cases:
{
  // describe("Basic tests", function(){
  //     Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
  //     Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
  //     Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
  //     Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
  //     Test.assertDeepEquals(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
  //     Test.assertDeepEquals(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
  //     Test.assertDeepEquals(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
  //     Test.assertDeepEquals(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);
  //     });
}

function dup(s) {
  //..
  return s.map((word) => {
    let result = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[i + 1]) result += word[i];
    }
    return result;
  });
}

console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
);
console.log(dup(["abracadabra", "allottee", "assessee"]));
console.log(dup(["kelless", "keenness"]));
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]));
console.log(dup(["adanac", "soonness", "toolless", "ppellee"]));
console.log(dup(["callalloo", "feelless", "heelless"]));
console.log(dup(["putteellinen", "keenness"]));
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"]));

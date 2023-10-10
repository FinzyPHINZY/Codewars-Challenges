// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
  //coding and coding....

  const vowels = "aeiouAEIOU";

  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      s[i] = "!";
    }
  }

  return s.join("");
}

function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

console.log(replace("Hi!"));
console.log(replace("!Hi! Hi!"));
console.log(replace("aeiou"));

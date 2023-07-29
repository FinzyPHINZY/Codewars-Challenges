// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  return words.join(" "); //hello world this is great
  //   return words.join(""); // helloworldthisisgreat
  //   return words.join(); //hello,world,this,is,great
  //   return words.join("."); //hello.world.this.is.great
  // const result =
  //   return "";
}

console.log(smash(["hello", "world", "this", "is", "great"]));

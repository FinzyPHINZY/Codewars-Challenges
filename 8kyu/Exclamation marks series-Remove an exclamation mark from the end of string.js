// Description:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
function remove(string) {
  //coding and coding....
  //   if string ends '!'. remove it from string

  if (string.endsWith("!")) {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

console.log(remove("hi!!! hi!g"));

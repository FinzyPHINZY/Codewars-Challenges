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
  const splited = string.split("");
  let newString = "";
  for (const str of splited) {
    if (str !== "!") {
      newString += str;
    }
  }
  return newString;
}

console.log(remove("hi! hi!"));

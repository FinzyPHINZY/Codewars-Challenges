function doubleChar(str) {
  // let doubleChar = "";
  // for (let i = 0; i < str.length; i++) {
  //   doubleChar += str[i].repeat(2);
  // }
  // return doubleChar;

  str
    .split("")
    .map((e) => e.repeat(2))
    .join(" ");
}

console.log(doubleChar("Hello World"));

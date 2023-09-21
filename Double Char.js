function doubleChar(str) {
  let doubleChar = "";
  for (let i = 0; i < str.length; i++) {
    doubleChar += str[i] + str[i];
  }
  return doubleChar;
}

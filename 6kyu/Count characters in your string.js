// Description:

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const charCounts = {};

  for (const char of string) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  return charCounts;
}

// Let's break down and explain the code step by step:

// 1. `function countCharacters(inputString) {`: This line defines the function `countCharacters` that takes one parameter, `inputString`, which is the string for which we want to count the characters.

// 2. `const charCounts = {};`: This line initializes an empty object called `charCounts`. This object will be used to store the counts of each character in the `inputString`.

// 3. `for (const char of inputString) {`: This line starts a loop that iterates through each character in the `inputString`. For each character, it assigns the value to the variable `char`.

// 4. `charCounts[char] = (charCounts[char] || 0) + 1;`: This line increments the count of the current character (`char`) in the `charCounts` object. Let's break down this step further:

//    - `charCounts[char]`: This represents the current count of the character in the `charCounts` object. If the character does not exist as a property in the object, it will be `undefined`.

//    - `(charCounts[char] || 0)`: This is a logical OR operation (`||`) that checks if the current count of the character is truthy (i.e., not `undefined`, `null`, 0, or an empty string). If it is truthy, it uses the current count. Otherwise, it defaults to 0.

//    - `+ 1`: After obtaining the current count (or defaulting to 0 if the character is not yet in the object), we add 1 to the count to increment it.

//    Overall, this line increments the count of the character `char` in the `charCounts` object.

// 5. `}`: This closes the `for...of` loop.

// 6. `return charCounts;`: Finally, the function returns the `charCounts` object, which contains the counts of each character in the input string.

// To illustrate the function's behavior, let's use the provided example:

// Input:
// ```javascript
// countCharacters('aba')
// ```

// Step-by-step explanation:
// 1. The function starts with an empty `charCounts` object.

// 2. The loop iterates through each character in the input string `'aba'`.
//    - For the first character `'a'`, it is not yet present in the `charCounts` object, so its count defaults to 0 and then increments by 1. `charCounts` becomes `{ 'a': 1 }`.
//    - For the second character `'b'`, it is not yet present in the `charCounts` object, so its count defaults to 0 and then increments by 1. `charCounts` becomes `{ 'a': 1, 'b': 1 }`.
//    - For the third character `'a'`, it is already present in the `charCounts` object with a count of 1. So, its count increments by 1, making `charCounts` become `{ 'a': 2, 'b': 1 }`.

// 3. The function returns the `charCounts` object, which contains the counts of each character in the input string: `{ 'a': 2, 'b': 1 }`.

// The function correctly counts all the occurring characters in the input string. If the string is empty, the resulting object is an empty object literal `{}`.

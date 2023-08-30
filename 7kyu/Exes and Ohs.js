// Description:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);

function XO(str) {
  //code here
  const lowerCaseStr = str.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === "x") {
      xCount++;
    } else if (lowerCaseStr[i] === "o") {
      oCount++;
    }
  }

  return xCount === oCount;
}

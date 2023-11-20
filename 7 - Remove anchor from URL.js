// Description:

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  // TODO: complete
  // Split the input string at the '#' character
  //   const parts = url.split("#");

  // Return the first part (the URL before the anchor)
  // console.log(parts);
  //   return parts[0];

  return url.split("#")[0];
}

console.log(removeUrlAnchor("www.codewars.com#about"));

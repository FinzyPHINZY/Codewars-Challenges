"use strict";

// Safen User Input Part I - htmlspecialchars

// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).
// Mission

// Your mission is to implement a function that converts the following potentially harmful characters:

//     < --> &lt;
//     > --> &gt;
//     " --> &quot;
//     & --> &amp;

// Good luck :D

function htmlspecialchars(formData) {
  // Insert your code here
  //   const specialChars = {
  //     "<": "&lt;",
  //     ">": "&gt;",
  //     '"': "&quot;",
  //     "&": "&amp;",
  //   };

  //   let result = "";
  //   for (const char of formData) {
  //     if (char in specialChars) {
  //       result += specialChars[char];
  //     } else {
  //       result += char;
  //     }
  //   }

  //   return result;

  return formData
    .replace("<", "&lt;")
    .replace(">", "&gt;")
    .replace('"', "&quot;")
    .replace("&", "&amp;");
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));
//("&lt;h2&gt;Hello World&lt;/h2&gt;");
console.log(htmlspecialchars("Hello, how would you & I fare?")),
  //      "Hello, how would you &amp; I fare?"
  console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?')),
  //      "How was &quot;The Matrix&quot;?  Did you like it?"
  console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"));
//      "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"

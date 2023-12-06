"use strict";

// DESCRIPTION:
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
  res = /^[a-z]+$/.test(username);
  return res;
}

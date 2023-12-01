"use strict";

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// Test Cases:
// it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
// it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
// it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));

function defineSuit(card) {
  // good luck
  if (card.slice(-1) === "♠") {
    return "spades";
  } else if (card.slice(-1) === "♦") {
    return "diamonds";
  } else if (card.slice(-1) === "♥") {
    return "hearts";
  } else {
    return "clubs";
  }
}

function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };
  return s[card.charAt(card.length - 1)];
}

console.log(defineSuit("Q♠"));
console.log(defineSuit("9♦"));
console.log(defineSuit("J♥"));

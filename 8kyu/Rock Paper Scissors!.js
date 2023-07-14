// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  const getMsg1 = "Player 1 won!";
  const getMsg2 = "Player 2 won!";

  //   if (p1 === 'rock' && p2 === 'scissors') {
  //     return getMsg1;
  //   } else if (p1 === 'scissors' && p2 === 'paper') {
  //     return getMsg1;
  //   }  else if (p1 === 'paper' && p2 === 'rock') {
  //     return getMsg1;
  //   } else if(p1 === 'scissors' && p2 === 'rock') {
  //     return getMsg2;
  //   } else if(p1 === 'paper' && p2 === 'scissors') {
  //     return getMsg2;
  //   } else if(p1 === 'rock' && p2 === 'paper') {
  //     return getMsg2;
  //   } else {
  //     return 'Draw!'
  //   }

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return getMsg1;
  } else if (
    (p1 === "scissors" && p2 === "rock") ||
    (p1 === "paper" && p2 === "scissors") ||
    (p1 === "rock" && p2 === "paper")
  ) {
    return getMsg2;
  } else {
    return "Draw!";
  }
};

console.log(rps("scissors", "rock"));

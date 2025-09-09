// const choice = ["Rock", "Paper", "scissor"];

// function getComputerChoice() {
//   const random = Math.floor(Math.random() * choice.length);
//   return random;
// }

// function getHumanChoice() {
//   return prompt("Enter the move ");
// }

// function playRound(humanChoice, computerChoice, hScore, cScore) {
//   humanChoice = humanChoice.toLowerCase();
//   computerChoice = choice[computerChoice].toLowerCase();
//   // console.log(humanChoice);
//   // console.log(computerChoice);
//   console.log(
//     `Your Move : ${humanChoice} || Computer move : ${computerChoice}`
//   );
//   switch (humanChoice) {
//     case "rock":
//       if (computerChoice === "paper") {
//         console.log("You loose");
//         cScore++;
//       } else if (computerChoice === "scissor") {
//         console.log("You won");
//         hScore++;
//       } else {
//         console.log("Its a Tie");
//       }
//       break;

//     case "paper":
//       if (computerChoice === "scissor") {
//         console.log("You loose");
//         cScore++;
//       } else if (computerChoice === "rock") {
//         console.log("You won");
//         hScore++;
//       } else {
//         console.log("Its a Tie");
//       }
//       break;

//     case "scissor":
//       if (computerChoice === "paper") {
//         console.log("You won");
//         hScore++;
//       } else if (computerChoice === "rock") {
//         console.log("You loose");
//         cScore++;
//       } else {
//         console.log("Its a Tie");
//       }
//       break;

//     default:
//       console.log("You enter invalid move");

//       break;
//   }

//   return { hScore, cScore };
// }

// function playGame() {
//   let hScore = 0;
//   let cScore = 0;
//   for (let index = 0; index < 5; index++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     let newScore = playRound(humanSelection, computerSelection, hScore, cScore);
//     hScore = newScore.hScore;
//     cScore = newScore.cScore;
//   }

//   console.log(`Final Score: You ${hScore} - Computer ${cScore}`);
//   if (hScore > cScore) {
//     console.log("🎉 You Won the Game!");
//   } else if (hScore < cScore) {
//     console.log("😢 You Lost the Game!");
//   } else {
//     console.log("🤝 It's a Tie Overall!");
//   }
// }

// playGame();


const arr = [1,2,3,8,4,5]
console.log(Math.max(arr));

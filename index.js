let hScore = 0;
let cScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const choices = document.querySelectorAll(".moves");
let ourScore = document.getElementById("ourScore");
let compScore = document.getElementById("compScore");
let finalResult = document.querySelector(".finalResult");

let yCh = document.getElementById("yCh")
let cCh = document.getElementById("cCh")

const choice = ["Rock", "Paper", "scissor"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * choice.length);
  return choice[random].toLowerCase();
}

choices.forEach((c) => {
  c.addEventListener("click", () => {
    if (roundsPlayed < maxRounds) {
      const userMove = c.getAttribute("id");
      const compMove = getComputerChoice();

      yCh.innerHTML = userMove;
      cCh.textContent = compMove

      playRound(userMove, compMove);
      roundsPlayed++;

    updateScore()


      if (roundsPlayed === maxRounds) {
        showResult();
      }
    }
  });
});


function updateScore(){
    ourScore.textContent = hScore
    compScore.textContent = cScore
}

function playRound(humanChoice, computerChoice) {

  console.log(
    `Your Move : ${humanChoice} || Computer move : ${computerChoice}`
  );
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        console.log("You loose");
        cScore++;
      } else if (computerChoice === "scissor") {
        console.log("You won");
        hScore++;
      } else {
        console.log("Its a Tie");
      }
      break;

    case "paper":
      if (computerChoice === "scissor") {
        console.log("You loose");
        cScore++;
      } else if (computerChoice === "rock") {
        console.log("You won");
        hScore++;
      } else {
        console.log("Its a Tie");
      }
      break;

    case "scissor":
      if (computerChoice === "paper") {
        console.log("You won");
        hScore++;
      } else if (computerChoice === "rock") {
        console.log("You loose");
        cScore++;
      } else {
        console.log("Its a Tie");
      }
      break;

    default:
      console.log("You enter invalid move");

      break;
  }

  return { hScore, cScore };
}

function showResult() {
   if (hScore > cScore) {
    finalResult.textContent = "🎉 You Won the Game!";
    finalResult.classList.add("text-green-600", "font-bold");
  } else if (hScore < cScore) {
    finalResult.textContent = "😢 You Lost the Game!";
    finalResult.classList.add("text-red-600", "font-bold");
  } else {
    finalResult.textContent = "🤝 It's a Tie Overall!";
    finalResult.classList.add("text-yellow-600", "font-bold");
  }
}

// function playGame() {
//   console.log("Play");

//   let hScore = 0;
//   let cScore = 0;
//   for (let index = 0; index < 5; index++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     console.log("hs", humanSelection);

//     let newScore = playRound(humanSelection, computerSelection, hScore, cScore);
//     hScore = newScore.hScore;
//     cScore = newScore.cScore;
//   }

//   console.log(`Final Score: You ${hScore} - Computer ${cScore}`);
// }

// playGame();

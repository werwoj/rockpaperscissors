const rulesButton = document.querySelector(".rules");
const closeButton = document.querySelector(".close");
const Popup = document.querySelector(".popup");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const mainPage = document.querySelector(".main-page");
const resultPage = document.querySelector(".result-page");
const playerMove = document.querySelector(".player-move");
const computerMove = document.querySelector(".computer-move");
const winText = document.querySelector(".win");
const playAgaintBtn = document.querySelector(".play-again");
let playerMoveInfo;
let computerMoveInfo;
const scoreResult = document.querySelector(".score-result");
let score = 0;

openPopup = () => {
Popup.style.visibility = "visible";
}
closePopup = () => {
    Popup.style.visibility = "hidden";
}
createRandomMove = () => {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1)
    {
        computerMoveInfo = "rock"
   computerMove.innerHTML =  `<img src="./images/icon-rock.svg" alt="rock" class="rock-img">` ;}
    else if (randomNumber === 2) 
    {
        computerMoveInfo = "paper"
    computerMove.innerHTML = `<img src="./images/icon-paper.svg" alt="paper" class="paper-img">`; }
    else if (randomNumber === 3)
    {
        computerMoveInfo = "scissors"
    computerMove.innerHTML = `<img src="./images/icon-scissors.svg" alt="scissors" class="scissors-img">`;
}
}

paperMove = () => {
mainPage.classList.add("none");
resultPage.classList.remove("none");
playerMove.innerHTML = '<img src="./images/icon-paper.svg" alt="paper" class="paper-img">';
playerMoveInfo = "paper";
createRandomMove();
whoWin()
}
scissorsMove = () => {
    mainPage.classList.add("none");
    resultPage.classList.remove("none");
    playerMove.innerHTML = `<img src="./images/icon-scissors.svg" alt="scissors" class="scissors-img">`;
    playerMoveInfo = "scissors";
    createRandomMove();
    whoWin()
    }


rockMove = () => {
        mainPage.classList.add("none");
        resultPage.classList.remove("none");
        playerMove.innerHTML = `<img src="./images/icon-rock.svg" alt="rock" class="rock-img">`;
        playerMoveInfo = "rock";
        createRandomMove();
        whoWin()
        }

whoWin = () => {
    if(playerMoveInfo === computerMoveInfo) {
winText.innerHTML = `It's a draw!`;
winText.style.color = "blue";

    }
    else if (
        (playerMoveInfo === "paper" && computerMoveInfo === "scissors") ||
        (playerMoveInfo === "rock" && computerMoveInfo === "paper") ||
        (playerMoveInfo === "scissors" && computerMoveInfo === "rock")) {
        winText.style.color = "red";
        winText.innerHTML = "you lost!";
        score--
        setTimeout(() => {
            scoreResult.innerHTML = `${score}`;
        }, 3000);
    } else {
        winText.style.color = "greenyellow";
        winText.innerHTML = "you won!";
        score++ 
        setTimeout(() => {
            scoreResult.innerHTML = `${score}`;
        }, 3000);
          
}
}

playAgain = () => {
    mainPage.classList.remove("none");
resultPage.classList.add("none");
}

rulesButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
paperBtn.addEventListener("click", paperMove);
scissorsBtn.addEventListener("click", scissorsMove);
rockBtn.addEventListener("click", rockMove);
playAgaintBtn.addEventListener("click", playAgain);
const gameForm = document.querySelector(".number-game_form");
const gameInput = document.querySelector(".number-game_form input ");
const gameAlert = document.querySelector(".alert-game");
const mathQuestion = document.querySelector(".math-question");

const countDown = document.getElementById("count-down");
const resetButton = document.querySelector("button");


const HIDDEN_KEY = "hidden";

const mathOne = Math.floor(Math.random() * 100);
const mathTwo = Math.floor(Math.random() * 100);
const mathCalc = mathOne + mathTwo;

let count = 10;
function timer() {
    countDown.innerText = count;
  if (count <= 0) {
    clearInterval(timer);
    gameAlert.innerText = "game over";
    // resetButton.classList.remove(HIDDEN_KEY);
    gameAlert.removeEventListener("click", handleGameAlert);
  } else {
    count--;
  }
}

function reloadPage() {
    location.reload();
}


function againQuestion() {
    const mathQuestionText = mathOne + "+" + mathTwo + "=";
    mathQuestion.innerText = mathQuestionText;
}


function timeSetAlert() {
    gameAlert.classList.toggle(HIDDEN_KEY);
    mathQuestion.classList.toggle(HIDDEN_KEY);
    gameForm.classList.toggle(HIDDEN_KEY);
    countDown.classList.toggle(HIDDEN_KEY);
    // resetButton.classList.add(HIDDEN_KEY);
}

function startGame(event) {
    event.preventDefault();
    const numberValue = gameInput.value;
    if(mathCalc == numberValue) {
        mathQuestion.innerText = `You are genius`;
    } else {
        mathQuestion.innerText = `❌Again❌`;
        // setTimeout(handleGameAlert, 1500);
        setTimeout(againQuestion, 1000)
    }
    gameInput.value = "";
}

function handleGameAlert() {
    timeSetAlert();
    againQuestion();
    setTimeout(timeSetAlert, 10000);
    timer();
    setInterval(timer, 1000);
} 


resetButton.addEventListener("click", reloadPage);

gameForm.addEventListener("submit", startGame);
gameAlert.addEventListener("click", handleGameAlert);




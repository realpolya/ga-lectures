/*
Rock, Paper, Scissors
INSTRUCTIONS

User Stories:
- As a user, I want to see a landing page when I arrive at the website, 
so I know I’m in the right place.
- As a user, I want to see clearly labeled buttons for “Rock”, “Paper”, and “Scissors”, 
on the landing page, so I instantly know my options for game play.
- As a user, I want to be able to click on one of the “Rock”, “Paper”, or “Scissors” 
buttons, making it easy to select my game move.
- As a user, I want visual feedback after making my selection, so I know my choice 
has been registered.
- As a user, I want to see the computer’s choice displayed next to mine, so I can 
compare the two.
- As a user, I want to be presented with a clear message indicating the winner of 
the game, so that I can immediately understand the outcome.
- As a user, I want the option to play another round, so I can try to improve my record.

Pseudocode:

- once the user clicks, background color of the button changes, text appears below the 
button (your choice)

- time delay of 2 seconds between your choice and computer's choice, text appears: 
"computer is thinking"

- computer's choice is highlighted, color of the button changes, text appears below the button
(computer's choice)

- once the result, the background color changes, message appears
    - option one: person wins
    - option two: computer wins
    - option three: draw!

- present a button with an option to play again that reloads the page and clears the selection


*/

/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];

/*-------------------------------- Variables --------------------------------*/

let playerChoice;
let computerChoice;
let randomIndex;

/*------------------------ Cached Element References ------------------------*/

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const sciButton = document.querySelector('#scissors');
const bodyEl = document.querySelector('body');
const htmlEl = document.querySelector('html');
const displayEl = document.querySelector('#result-display');

const tdRockEl = document.querySelector('#rock-choice');
const tdPaperEl = document.querySelector('#paper-choice');
const tdSciEl = document.querySelector('#sci-choice');

const tdRockComEl = document.querySelector('#rock-choice-c');
const tdPaperComEl = document.querySelector('#paper-choice-c');
const tdSciComEl = document.querySelector('#sci-choice-c');

const buttonReplay = document.querySelector('#restart-button');
/*-------------------------------- Functions --------------------------------*/

const play = (e) => {
    
    // get player choice
    getPlayerChoice(e);
    console.log(playerChoice);

    // set computer choice
    setComputerChoice();

    // result
    compare();

    // disable the play buttons until refreshed
    rockButton.disabled = true;
    paperButton.disabled = true;
    sciButton.disabled = true;

    // show replay button
    buttonReplay.style.display = "inline";
}

const getPlayerChoice = (e) => {
    // obtain id of the target
    playerChoice = e.target.id;

    // change color of the chosen button
    e.target.style.backgroundColor = "thistle";

    // fill the table
    if (playerChoice === 'rock') {
        tdRockEl.textContent = "Your choice";
    } else if (playerChoice === 'paper') {
        tdPaperEl.textContent = "Your choice";
    } else if (playerChoice === 'scissors') {
        tdSciEl.textContent = "Your choice";
    }
}

const setComputerChoice = () => {
    // choose random index
    randomChoice();
    computerChoice = choices[randomIndex];
    
    // computer signature color
    let compColor = "pink";

    // set color to computer's choice
    if (computerChoice === 'rock') {
        rockButton.style.backgroundColor = compColor;
        tdRockComEl.textContent = "Computer's choice";
    } else if (computerChoice === 'paper') {
        paperButton.style.backgroundColor = compColor;
        tdPaperComEl.textContent = "Computer's choice";
    } else if (computerChoice === 'scissors') {
        sciButton.style.backgroundColor = compColor;
        tdSciComEl.textContent = "Computer's choice";
    }
}

const compare = () => {
    // change the color of page
    htmlEl.style.backgroundColor = "saddlebrown";
    bodyEl.style.backgroundColor = "saddlebrown";

    // compare the choices, render results
    if (playerChoice === computerChoice) {
        displayEl.textContent = "Draw!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        displayEl.textContent = "Computer wins!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        displayEl.textContent = "You win!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        displayEl.textContent = "You win!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        displayEl.textContent = "Computer wins!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        displayEl.textContent = "Computer wins!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        displayEl.textContent = "You win!";
    };
}

const playAgain = () => {
    // reload page
    location.reload();
}

function randomChoice() {
    // produce random index number
    randomIndex = Math.floor(Math.random() * choices.length);
}

/*----------------------------- Event Listeners -----------------------------*/

rockButton.addEventListener('click', play);
paperButton.addEventListener('click', play);
sciButton.addEventListener('click', play);

buttonReplay.addEventListener('click', playAgain);
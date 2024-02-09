userScore = 0;   // declaring user score at start
compScore = 0;   // declaring computer score at start
let choices = document.querySelectorAll(".box");        // selecting user choices
let userCount = document.querySelector(".you-score");       // selecting user score count text
let compCount = document.querySelector(".comp-score");      // selecting computer score count text
let moveHeading = document.querySelector(".play-move");     // selecting footer heading

// getting computer choice
const getCompChoice = () => {           
    options = ["rock", "paper", "scissors"];
    const compChoice = Math.floor(Math.random() * 3);
    return options[compChoice];
}

// function to call if game was drawn
const gameDraw = () => {    
    moveHeading.innerText = "Game was Draw";
    moveHeading.style.backgroundColor = "#003049";
}
// function to call if user won the game
const userWin = (userChoice,compChoice) => {
    moveHeading.innerText = `You Won! You: ${userChoice} & Computer: ${compChoice}`;
    moveHeading.style.backgroundColor = "green";
    userScore++;
    userCount.innerText = userScore;
    
}

// function to call if user lose the game
const compWin = (userChoice,compChoice) => {
    moveHeading.innerText = `You Lose. You: ${userChoice} & Computer: ${compChoice}`;
    moveHeading.style.backgroundColor = "red";
    compScore++;
    compCount.innerText = compScore;
}

// function to call when user select any choice
const playGame = (userChoice) => {
    console.log("User = ",userChoice)
    
    //getting computer choice
    const compChoice = getCompChoice();
    console.log("Computer = ",compChoice)
    
    if(userChoice === compChoice){
        gameDraw();
    }
    else if(userChoice === "rock"){
        if(compChoice === "paper"){
            compWin(userChoice,compChoice);
        }else {
            userWin(userChoice,compChoice);
        }
    }
    else if(userChoice === "paper") {
        if(compChoice === "scissors") {
            compWin(userChoice,compChoice);
        }else {
            userWin(userChoice,compChoice);
        }
    }
    else {
        if(compChoice === "rock") {
            compWin(userChoice,compChoice);
        }else {
            userWin(userChoice,compChoice);
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
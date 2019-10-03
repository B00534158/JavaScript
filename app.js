//catche the DOM - actual variables in program
var userScore = 0;
var computerScore = 0;
//
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//generates random number between (0 and 1)*3 then assigns value to either r, p & s
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random()* 3));
  return choices[randomNumber];
}

//user choice r/p/s is set from eventlistener after click of rock_div gets ellement ID
function Convert2Word  (letter) {
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  return "SCISSORS";
}

  function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice).classList;
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = Convert2Word(userChoice) + " beats " + Convert2Word(computerChoice) + "...you WIN!!";
  userChoice_div.add('green-glow')
  setTimeout(function(){userChoice_div.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice).classList;
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = Convert2Word(userChoice) + " loses to " + Convert2Word(computerChoice) + "...you LOST!!";
  userChoice_div.add('red-glow');
  setTimeout(function(){userChoice_div.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice).classList;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = Convert2Word(userChoice) + " equals " + Convert2Word(computerChoice) + "....Its a Draw";
  userChoice_div.add('gray-glow');
  setTimeout(function(){userChoice_div.remove('gray-glow')}, 300);
}

function game(userChoice) {
  //console.log("" + userChoice);
  const computerChoice = getComputerChoice();
  //console.log("user choice =>" + userChoice);
  //console.log("computer choice =>" + computerChoice);

switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
  //console.log("USER WINS!!!");
  win(userChoice, computerChoice);
  break;
  case "rp":
  case "ps":
  case "sr":
  //console.log("USER LOSES!!!");
  lose(userChoice, computerChoice);
  break;
  case "rr":
  case "pp":
  case "ss":
  // console.log("ITS A DRAW!!!");
  draw(userChoice, computerChoice);}
}

function main() {
  rock_div.addEventListener('click', function() {
  game("r");
    //console.log("hey you clicked rock");
  })
  paper_div.addEventListener('click', function() {
  game("p");
    //console.log("hey you clicked paper");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
    //console.log("hey you clicked scissors");
  })
}

main();

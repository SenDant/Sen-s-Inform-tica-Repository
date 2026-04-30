let guess;
let coin;
function isItTails(guess, coin) {
    guess = "Tails!";
    ////////////////////// GET THE COIN'S FACE
    result = Math.random();
    if (result < 0.5) {
        coin = "Tails!"
    }
    else {
        coin = "Heads!"
    }
    let heading = document.querySelector('h2');
    heading.innerHTML = coin;
    console.log("you chose Tails.");
    console.log(result);
    console.log(coin);
    ////////////////////////// IS THE GUESS RIGHT OR WRONG?
    if (coin === guess) {
        let guessed = document.querySelector('h3');
	    guessed.innerHTML = "correct answer. YOU WIN!";
        console.log("Won");
        return 1;
    }
    else {
        let guessed = document.querySelector('h3');
	    guessed.innerHTML = "wrong answer. YOU LOSE!";
        console.log("Lost");
        return 2;
    }
}

function isItHeads(guess, coin) {
   guess = "Heads!";
    ////////////////////// GET THE COIN'S FACE
    result = Math.random();
    if (result < 0.5) {
        coin = "Tails!"
    }
    else {
        coin = "Heads!"
    }
    let heading = document.querySelector('h2');
    heading.innerHTML = coin;

    console.log("you chose Heads.");
    console.log(result);
    console.log(coin);
    ////////////////////////// IS THE GUESS RIGHT OR WRONG?
   if (coin === guess) {
        let guessed = document.querySelector('h3');
	    guessed.innerHTML = "correct answer. YOU WIN!";
        console.log("Won");
        return "won";
    }
    else {
        let guessed = document.querySelector('h3');
	    guessed.innerHTML = "wrong answer. YOU LOSE!";
        console.log("Lost");
        return "lost";
    }
}

let headsguesses = isItHeads();
let tailsguesses = isItTails();
let wins = 0;
let loses = 0;

function ratio(wins, loses, headsguesses, tailsguesses) {
    if (headsguesses === "won") {
        wins++;
    }
    if (tailsguesses === "won") {
        wins++;
    }
    if (headsguesses === "lost") {
        loses++;
    }
    if (tailsguessess === "lost") {
        loses++;
    }
    let victories = document.querySelector('span#wins');
	victories.innerHTML = wins;
    let defeats = document.querySelector('span#loses');
	defeats.innerHTML = loses;
}

function restart(coin, result, wins, loses) {
    let heading = document.querySelector('h2');
	heading.innerHTML = "";
    let guessed = document.querySelector('h3');
	guessed.innerHTML = "";
    let ratiowins = document.querySelector('span#wins');
	ratiowins.innerHTML = "0";
    let ratioloses = document.querySelector('span#loses');
	ratioloses.innerHTML = "0";
    coin = undefined;
    result = undefined;
    wins = 0;
    loses = 0;
    console.log(coin, result, wins, loses);
}

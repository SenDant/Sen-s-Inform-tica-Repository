function isItTails(guess, coin) {
    guess = "Tails!";
    return guess;
}

function isItHeads(guess, coin) {
    guess = "Heads!";
    return guess;
}

function rightOrWrong() {
     if (coin = guess) {
        let guessed = document.querySelector('h3');
	    guessed.innerHTML = "correct answer. YOU WIN!";
    }
    else {
        let guessed = document.querySelector('h3');
	    guessed.innerHTML = "wrong answer. YOU LOSE!";
    }
}

function flip(coin) {
    result = Math.random();
    if (result < 0.5) {
        coin = "Tails!"
    }
    else {
        coin = "Heads!"
    }
    let heading = document.querySelector('h2');
	heading.innerHTML = coin;
    console.log(result);
    return coin;
}
function restart() {
    let heading = document.querySelector('h2');
	heading.innerHTML = "";
    let guessed = document.querySelector('h3');
	guessed.innerHTML = "";
}

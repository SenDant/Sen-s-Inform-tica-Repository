let compChoise;
function rock(compChoise) {
    let userChoise = "rock";
    let me = document.querySelector('span#userChoosing');
        me.innerHTML = userChoise;
    ////////////////
    let choise = Math.floor(Math.random() * 3);
    console.log(choise);
    ////////////////
    if (choise === 0) {
        compChoise = "rock";
        let me = document.querySelector('span#compChoosing');
        me.innerHTML = compChoise;
    }
    if (choise === 1) {
        compChoise = "paper";
         let me = document.querySelector('span#compChoosing');
        me.innerHTML = compChoise;
    }
    if (choise === 2) {
        compChoise = "scissors";
         let me = document.querySelector('span#compChoosing');
        me.innerHTML = compChoise;
    }
    console.log(compChoise);
    ////////////////
    if (compChoise === userChoise) {
        let res = document.querySelector('p#result');
        res.innerHTML = "It's a Tie!";
    }
    if (compChoise === "paper") {
        let res = document.querySelector('p#result');
        res.innerHTML = "You Lose!";
    }
    if (compChoise === "scissors") {
        let res = document.querySelector('p#result');
        res.innerHTML = "You Win!";
    }
}

function paper() {
    let userChoise = "paper";
    let me = document.querySelector('span#userChoosing');
        me.innerHTML = userChoise;
    ////////////////
    let choise = Math.floor(Math.random() * 3);
    console.log(choise);
    ////////////////
    if (choise === 0) {
        compChoise = "rock";
        let me = document.querySelector('span#compChoosing');
        me.innerHTML = compChoise;
    }
    if (choise === 1) {
        compChoise = "paper";
         let me = document.querySelector('span#compChoosing');
        me.innerHTML = compChoise;
    }
    if (choise === 2) {
        compChoise = "scissors";
         let me = document.querySelector('span#compChoosing');
        me.innerHTML = compChoise;
    }
    console.log(compChoise);
    ////////////////
    if (compChoise === userChoise) {
        let res = document.querySelector('p#result');
        res.innerHTML = "It's a Tie!";
    }
    if (compChoise === "scissors") {
        let res = document.querySelector('p#result');
        res.innerHTML = "You Lose!";
    }
    if (compChoise === "rock") {
        let res = document.querySelector('p#result');
        res.innerHTML = "You Win!";
    }
}

function scissors() {
    let userChoise = "scissors";
    let me = document.querySelector('span#userChoosing');
        me.innerHTML = userChoise;
    ////////////////
    let choise = Math.floor(Math.random() * 3);
    console.log(choise);
    ////////////////
    if (choise === 0) {
        compChoise = "rock";
        let me = document.querySelector('span#compChoosing');
        me.innerHTML = compChoise;
    }
    if (choise === 1) {
        compChoise = "paper";
         let me = document.querySelector('span#compChoosing');
        me.innerHTML = compChoise;
    }
    if (choise === 2) {
        compChoise = "scissors";
         let me = document.querySelector('span#compChoosing');
        me.innerHTML = compChoise;
    }
    console.log(compChoise);
    ////////////////
    if (compChoise === userChoise) {
        let res = document.querySelector('p#result');
        res.innerHTML = "It's a Tie!";
    }
    if (compChoise === "rock") {
        let res = document.querySelector('p#result');
        res.innerHTML = "You Lose!";
    }
    if (compChoise === "paper") {
        let res = document.querySelector('p#result');
        res.innerHTML = "You Win!";
    }
}

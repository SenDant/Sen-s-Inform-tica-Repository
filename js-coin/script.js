function flip() {
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
}

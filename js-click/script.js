let i = 0;

function count() {
    i++;
	let heading = document.querySelector('h1');
	heading.innerHTML = i;
}

function reset() {
    i = 0
	let heading = document.querySelector('h1');
	heading.innerHTML = i;
}

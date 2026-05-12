let counter = 0;
let alarm = new Audio("sound/alarm.mp3");
function count(t) {
    console.log(t);
    let start = t*60;
    counter++;
    time = start - counter;
    document.querySelector('h1').innerHTML = time;
    if (time == 0) {
        alarm.currentTime = 0;
        alarm.play();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
        setInterval(count, 1000); // It's a 1,000 because it's measured in miliseconds.
        document.querySelector("button").disabled = true;
        };
});

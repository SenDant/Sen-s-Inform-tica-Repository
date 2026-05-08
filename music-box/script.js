document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/kick.wav");
    const clap = new Audio("sounds/clap.wav");
    const cowbell = new Audio("sounds/cowbell.wav");
    const hihat = new Audio("sounds/hihat.wav");
    const openhat = new Audio("sounds/openhat.wav");
    const snare = new Audio("sounds/snare.wav");
    const tom = new Audio("sounds/tom.wav");
    const yuh = new Audio("sounds/yuh.wav");

    const kickDiv = document.querySelector("#kick");
    const clapDiv = document.querySelector("#clap");
    const cowbellDiv = document.querySelector("#cowbell");
    const hihatDiv = document.querySelector("#hihat");
    const openhatDiv = document.querySelector("#openhat");
    const snareDiv = document.querySelector("#snare");
    const tomDiv = document.querySelector("#tom");
    const yuhDiv = document.querySelector("#yuh");

    window.addEventListener("keydown", function(event){
        if (event.key == "a") {
            kick.currentTime = 0;
            kick.play();
            kickDiv.classList.add("active");
        }
        if (event.key == "s") {
            clap.currentTime = 0;
            clap.play();
            clapDiv.classList.add("active");
        }
        if (event.key == "d") {
            cowbell.currentTime = 0;
            cowbell.play();
            cowbellDiv.classList.add("active");
        }
        if (event.key == "f") {
            hihat.currentTime = 0;
            hihat.play();
            hihatDiv.classList.add("active");
        }
        if (event.key == "g") {
            openhat.currentTime = 0;
            openhat.play();
            openhatDiv.classList.add("active");
        }
        if (event.key == "h") {
            snare.currentTime = 0;
            snare.play();
            snareDiv.classList.add("active");
        }
        if (event.key == "j") {
            tom.currentTime = 0;
            tom.play();
            tomDiv.classList.add("active");
        }
        if (event.key == "k") {
            yuh.currentTime = 0;
            yuh.play();
            yuhDiv.classList.add("active");
        }
        /////////////////////////////////////////////////////
         window.addEventListener("keyup", function(event){
            if (event.key == "a") {
                kickDiv.classList.remove("active");
            }
            if (event.key == "s") {
                clapDiv.classList.remove("active");
            }
            if (event.key == "d") {
                cowbellDiv.classList.remove("active");
            }
            if (event.key == "f") {
                hihatDiv.classList.remove("active");
            }
            if (event.key == "g") {
                openhatDiv.classList.remove("active");
            }
            if (event.key == "h") {
                snareDiv.classList.remove("active");
            }
            if (event.key == "j") {
                tomDiv.classList.remove("active");
            }
            if (event.key == "k") {
                yuhDiv.classList.remove("active");
            }

         })
    })
})

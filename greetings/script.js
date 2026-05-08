document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").onsubmit = function() {
    let name = document.querySelector("#name").value;
    console.log("Hi, "+name);
    document.querySelector("h1").innerHTML = "Hi, "+ name;
    let now = new Date();
    let hour = now.getHours();
    if (hour < 12) {
      document.querySelector("#time").innerHTML = "🌄 Good Morning!";
    }
    else if (hour < 18) {
      document.querySelector("#time").innerHTML = "☀️ Good Afternoon!";
    }
    else {
      document.querySelector("#time").innerHTML = "🌑 Good Night!";
    }

    let day = now.getDay();
    console.log(day);


    if (day === 0) {
      day = "Sunday";
    }
    else if (day === 1) {
      day = "Monday";
    }
    else if (day === 2) {
      day = "Tuesday";
    }
    else if (day === 3) {
      day = "Wednesday";
    }
    else if (day === 4) {
      day = "Thursday";
    }
    else if (day === 5) {
      day = "Friday";
    }
    else {
      day = "Saturday";
    }
    document.querySelector("#day").innerHTML = "Today is "+ day;

    if (day === "Friday") {
      document.querySelector("#friday").innerHTML = "FINALY FRIDAY!!!";
    }
    else if (day === "Saturday") {
      document.querySelector("#friday").innerHTML = "Enjoy your weekend!";
    }
    else if (day === "Sunday") {
      document.querySelector("#friday").innerHTML = "Enjoy your weekend!";
    }
    else {
      document.querySelector("#friday").innerHTML = "Not Friday yet!";
    }


    return false; //Prevents website from reloading.
    };
})

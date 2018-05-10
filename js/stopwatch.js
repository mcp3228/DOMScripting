// global variable
var sec = 0;
var min = 0; 
var  hrs = 0;
var isRunning = true;

// targetting buttton
var start = document.getElementById("btnstart");
var display = document.getElementById("display");
var reset = document.getElementById("reset");

// other element
var grabber = document.getElementById("grabbing");
var btnrecorder = document.getElementById("recordtime");

// event listenters
start.addEventListener("click", startNow);
reset.addEventListener("click", stopNow)
btnrecorder.addEventListener("click", recording);


// function to display the variable
function startNow() {
    if (isRunning && start.innerHTML == "start") {
        timer = setInterval(() => {
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
            if (min === 60) {
                min = 0;
                hrs++
            }
            if (sec < 10 && min < 10) {
                display.innerHTML = "0" + hrs + ":0" + min + ':0' + sec;
            } else {
                display.innerHTML = "0" + hrs + ":0" + min + ':' + sec;
            }
        }, 1000)
        isRunning = false;
        start.innerHTML = "pause";
    } else if (start.innerHTML == "pause") {
        clearInterval(timer);
        start.innerHTML = "start"
        isRunning = true;
    }
}
removeEventListener("click", startNow)

function stopNow() {
    clearInterval(timer);
    sec = 0, min = 0, hrs = 0;
    display.innerHTML = hrs + "0:" + min + '0:' + sec+ "0";
    start.innerHTML = "start"
    isRunning = true;
}
function recording() {
    grabber.innerHTML += "<li>" + display.innerHTML + "</li>";
}



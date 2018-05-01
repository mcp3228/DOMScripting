'use strict';
//targetting input value
var sec = document.getElementById("seconds");
var seconds = document.getElementById("seconds").value;
const min = document.getElementById("min").value;
const hours = document.getElementById("hours").value;

// all the inputs
var inputs = document.getElementsByTagName("input").value;
var isRunning = false;
// targetting button 
var reset = document.getElementById("reset");
var recorder = document.getElementById("recorder");
const start = document.getElementById("start");

// events listener
sec.addEventListener("change", editing)

if(isRunning == false) {
    start.addEventListener("click", startNow); 
    function startNow() {
        if (sec.validity.rangeUnderflow)
           alert("value too small");
            setTimer = setInterval(() => {
                if(sec.value <= 60 && sec.value != 0)
                    sec.value--
                if(sec.value == 0)
                 sec.value = 0;
                } , 1000)
         isRunning = true;
         
    } 
} else {
    isRunning = true;
    start.removeEventListener("click", startNow);
}


function editing() {
    this.value = event.target.value 
}
var timer;




// variable to count down
//
// check if sec and input[3].value
// if input[2]value 0 decrement 1 min
// 
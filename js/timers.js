'use strict';
//targetting input value
var sec = document.getElementById("seconds");
var seconds = document.getElementById("seconds").value;
const min = document.getElementById("min").value;
const hours = document.getElementById("hours").value;
// all the inputs
var inputs = document.getElementsByTagName("input").value;

// targetting button 
const start = document.getElementById("start");
var reset = document.getElementById("reset");
var recorder = document.getElementById("recorder");

// events listener
sec.addEventListener("change", editing)
start.addEventListener("click", startNow);


function editing() {
    this.value = event.target.value 
}
var timer;
function startNow() {
   setTimer = setInterval(() => {
    if(sec.value <= 60 && sec.value != 0)
        sec.value--
    if(sec.value == 0)
     sec.value = 0;
    } , 1000)
    
}  

// variable to count down
//
// check if sec and input[3].value
// if input[2]value 0 decrement 1 min
// 
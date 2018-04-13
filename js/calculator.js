
// global variable goes here:
var btnlist = document.getElementsByClassName("button");
var display = document.getElementById("show");


//function section
// parameter is the value that will pass
// when the button is clicked

function clearInput(val) {
// THE VALUE OF INPUT TEXT WILL BE 
//VALUE OF THE BUTTON CLICKED
    document.getElementById("show").value = val;
}

// any button clicked
function calc(val) {
    document.getElementById("show").value += val;
}

/// evaluation is here
function e() {
   try {
       clearInput(eval(document.getElementById("show").value))
   } catch(e) {
    clearInput('ERROR');
   }
}
display.addEventListener("input", kkey);

function kkey(event) {
    console.log(event.keyCode);
}

/* DUPERWEB IS ALL WE ARE */
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
        clearInput(eval(document.getElementById("show").value));
    } catch(e) {
        clearInput("ERROR");
    }
}
/* DUPERWEB IS ALL WE ARE */
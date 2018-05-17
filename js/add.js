// selecting the elements we are going to use
const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const result = document.getElementById("result");

// this event is input because it required
// when s.o input sthg 
// it will call sum
numOne.addEventListener("input", sum);
numTwo.addEventListener("input", sum);
// function to the result
function sum() {
    // parsefloat to convert to number
    // or 0 to NaN
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    let add = one + two;
    result.innerHTML = "this the result " + add;
}
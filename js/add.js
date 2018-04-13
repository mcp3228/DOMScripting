// selecting the elements we are going to use
var numOne = document.getElementById("numOne");
var numTwo = document.getElementById('numTwo');
var result = document.getElementById("result");

// this event is input because it required
// when s.o input sthg 
// it will call sum
numOne.addEventListener("input", sum);
numTwo.addEventListener("input", sum);
// function to the result
function sum(event) {
  // parsefloat toconver to number
  // or 0 to NaN
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  add = one + two;
  mult = one * two;
  result.innerHTML = "this the result " + add;
}

var domBody = document.body;
document.title = "using only javascript: controlling";

// create element
var heading = document.createElement("h1");
// creating text
var heading_text = document.createTextNode("all is done by javascript");
// append text to element
heading.appendChild(heading_text);

var header = document.getElementById("top-pages");
//append element to header
header.appendChild(heading);

// maybe try or another way faster and shorter
var para = document.createElement("p");
para.innerText = "you just crazy boy";
domBody.appendChild(para);

// secon paragraph
var paraII = document.createElement("p");
paraII.innerText = "the last will be first";
domBody.appendChild(paraII)

// create another element
var myButton = document.createElement("button");
var mbv = document.createTextNode("click please");
myButton.appendChild(mbv);
domBody.appendChild(myButton);


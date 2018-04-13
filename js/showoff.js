// selecting elements
var htmlel = document.getElementById("htmlid");
var htmlpic = document.getElementById("html-pic");
var wciel = document.getElementById("w3cid");
var wcpic = document.getElementById("w3c-pic");
var jsel =document.getElementById("jsid");
var jspicel =document.getElementById("js-pic");
 
// events to react
htmlel.addEventListener("click", function() {
    if (htmlpic.className === "hide") {
        htmlpic.className ="";
    } else {
        htmlpic.className = "hide"
    }
})

wciel.addEventListener("click", function() {
    if (wcpic.className === "hide") {
        wcpic.className = "";
    } else {
        wcpic.className = "hide"
    }
})

jsel.addEventListener("click", function() {
    if (jspicel.className === "hide") {
        jspicel.className = "";
    } else {
        jspicel.className = "hide"
    }
})

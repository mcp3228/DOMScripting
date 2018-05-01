const bio = document.getElementById("bio");
function init() {
    bio.style.display == "none"
}
var menuIcon = document.getElementById("menu-icon");
var menuClose = document.getElementById("menu-close")
const headerPages = document.getElementsByClassName("header-pages")[0];

menuIcon.addEventListener("click", showOff);
function showOff() {
    if(menuClose.style.display == "none") {
        menuClose.style.display = "block";
        menuClose.style.backgroundColor = "#44394a";
    } else {
        menuClose.style.display = "none";
    }
}

const aboutme = document.getElementById("aboutme");
aboutme.style.background = "#44394a";
aboutme.style.color = "white";

aboutme.addEventListener("click", showAbout)
function showAbout() {
    if(bio.style.display == "") {
        bio.style.display = "none";
    } else{
        bio.style.display = "";
    }
}

window.onload = showAbout()
const bio = document.getElementById("bio");
const  menuIcon = document.getElementById("menu-icon");
const  menuClose = document.getElementById("menu-close");
const aboutme = document.getElementById("aboutme");

menuIcon.addEventListener("click", showOff);
aboutme.addEventListener("click", showAbout);

function showOff() {
    if(menuClose.style.display == "none") {
        menuClose.style.display = "block";
        menuClose.style.backgroundColor = "#44394a";
    } else {
        menuClose.style.display = "none";
    }
}

function showAbout() {
    if(bio.style.display == "") {
        bio.style.display = "none";
    } else{
        bio.style.display = "";
    }
}

window.onload = showAbout();
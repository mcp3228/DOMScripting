const bio = document.getElementById("bio");
const aboutme = document.getElementById("aboutme");
const uiClose = document.querySelectorAll(".ui-close");
var aside = document.getElementsByClassName("side-pub-ads-news")[0];
const menuClose = document.getElementById("menu-close");
const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function () {
    if(window.innerWidth <= 480) {
        if(menuClose.className == "hide"){
            menuClose.className = "";
        }
        else {
            menuClose.className = "hide";
        }
    }
});

for (var ii = 0; ii < uiClose.length; ii++) {
    uiClose[ii].addEventListener("click", closeBox);
}

function closeBox() {
    if (this.parentElement) {
        this.parentElement.remove(this.parentElement);
        if (!aside.children) {
            showAbout();
            this.parentElement.parentElement.appendChild(bio);
        }
    }
} 

aboutme.addEventListener("click", showAbout);

function showAbout() {
    if (!aside.children.length) {
        aside.appendChild(bio);
    } 
    if (bio.style.display == "") {
        bio.style.display = "none";
    } else {
        bio.style.display = "";
    }
}

window.onload = showAbout(), closeBox();
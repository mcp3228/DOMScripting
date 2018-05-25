// check time to put on nightmode
window.addEventListener("load", changeElse);

function changeElse() {
    if (timeNow.getHours() >= 17) {
        changeBack();
    }
}
// targeting element by ID
const header = document.getElementById("header");
const footer = document.getElementById("pages-footer");
const btn = document.getElementById("buttonmode");
const wrapper = document.getElementById("wrapper");
const tt = document.getElementById("time");

// other html collection , header
const subHeading = document.querySelectorAll(".subheadline") ||
                   document.getElementsByClassName("subheadline");
const slen = subHeading.length;

// called the currnt time /sec
const timeNow = new Date();
setInterval(() => {
    tt.innerHTML = new Date();
}, 1000);


// event to element targeted
btn.addEventListener("click", changeBack)

// lop through all the subheadthin
// add en event to each
for (let i = 0; i < slen; i++) {
    subHeading[i].addEventListener("click", showOn);
}

function showOn() {
    // this refer to the subheading clicked
    if (this.nextElementSibling.className == "") {
        this.nextElementSibling.className = "hide";
    } else {
        this.nextElementSibling.className = "";
    }

}

// just change the background 
function changeBack() {
    if (wrapper.style.background == "" || btn.textContent == "nightmode") {
        wrapper.style.background = "black";
        wrapper.style.color = "white";
        wrapper.children[0].children[0].style.color = "white";
        btn.textContent = "foreyes";
    } else if (btn.textContent == "foreyes") {
        wrapper.style.background = "#9c4405c4";
        wrapper.style.color = "maroon";
        wrapper.children[0].children[0].style.color = "maroon";
        this.style.background = "maroon";
        header.style.background = "maroon";
        footer.style.background = "maroon";
        for (let i = 0; i < slen; i++) {
            subHeading[i].style.background = "maroon"
        }
        btn.textContent = "normal";

    } else if (btn.textContent == "normal") {
        wrapper.style.background = "white";
        wrapper.style.color = "#545454";
        wrapper.children[0].children[0].style.color = "";
        this.style.background = "rgb(43, 47, 58)";
        header.style.background = "rgb(43, 47, 58)";
        footer.style.background = "rgb(43, 47, 58)";
        for (let i = 0; i < slen; i++) {
            subHeading[i].style.background = "rgb(43, 47, 58)"
        }
        btn.textContent = "nightmode";
    }
}
// targeting element by ID
var header = document.getElementById("header");
var footer = document.getElementById("pages-footer");
var btn = document.getElementById("buttonmode");
var wrapper =document.getElementById("wrapper");
var tt = document.getElementById("time")

// other html collection , header
var subHeading = document.getElementsByClassName("subheadline");
var slen = subHeading.length;
var para = document.getElementsByTagName("p");

// called the currnt time /sec
setInterval(()=>{
    tt.innerHTML = new Date();
}, 1000)

// event to element targeted
btn.addEventListener("click", changeBack)

 // lop through all the subheadthin
 // add en event to each
for (var i = 0; i < slen; i++) {
    subHeading[i].addEventListener("click", showOn)
}
function showOn() {
    // this refer to the subheading clicked
   if(this.nextElementSibling.className == "hide") {
      this.nextElementSibling.className = "";
   } else {
        this.nextElementSibling.className = "hide";
   }

}
// just change the background 
function changeBack() {
    if(wrapper.style.background == "" || btn.textContent == "nightmode") {
        wrapper.style.background = "black";
        wrapper.style.color = "white";
        wrapper.children[0].children[0].style.color = "white";
        btn.textContent = "foreyes";
    } else if ( btn.textContent == "foreyes") {
        wrapper.style.background = "#9c4405c4";
        wrapper.style.color = "maroon";
        wrapper.children[0].children[0].style.color = "maroon";
        
        this.style.background = "maroon";
        header.style.background = "maroon";
        footer.style.background = "maroon";
        for (var i = 0; i < slen; i++) {
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
        for (var i = 0; i < slen; i++) {
            subHeading[i].style.background = "rgb(43, 47, 58)"
        }
        btn.textContent = "nightmode";
    } 
}
// check time to put on nightmode
window.addEventListener("load", changeElse);
 function changeElse() {
   if(timeNow.getHours() >= 17) {
    changeBack();
   }
 }

